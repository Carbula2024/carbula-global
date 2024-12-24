import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from './leads.module.css';

const Leads = () => {
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();


    const fetchLeads = async () => {
        try {
            const response = await fetch('/api/leads/getAllLeads');
            if (!response.ok) {
                throw new Error('Error al obtener los leads');
            }
            const data = await response.json();
            console.log(data)
            setLeads(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        
        const checkAuth = async () => {
            const res = await fetch('/api/leads/verify-token', {
                method: 'GET',
                credentials: 'same-origin',
            });
            if (res.ok) {
                setIsAuthenticated(true);
                fetchLeads()
            } else {
                router.push('/loginleads');
            }
        };
    
        checkAuth();
    }, [router]);

    if (!isAuthenticated) {
        return <p>Cargando...</p>;
    }







    const getBackgroundClass = (estado) => {
        switch (estado) {
            case "por tomar":
                return styles.pendiente;
            case "tomado":
                return styles.tomado;
            case "cerrado":
                return styles.cerrado;
            default:
                return "";
        }
    };

    const ChangeState = async (id, estadoActual) => {
        let estado;
        switch (estadoActual) {
            case "por tomar":
                estado = 'tomado';
                break;
            case "tomado":
                estado = 'cerrado';
                break;
            default:
                estado = 'por tomar';
                break;
        }
        try {
            const response = await fetch('/api/leads/setEstado', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id, estado }),
            });

            fetchLeads(); 
        } catch (error) {
            console.error('Error al ejecutar la consulta:', error);
        }
    };

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
            <div className={styles.lead_container}>
                <h2>Leads</h2>
                <div className="table-container">
                    <table className="responsive-table">
                        <thead>
                            <tr className={styles.head_titles}>
                                <th>Fecha</th>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>Numero</th>
                                <th>Marca</th>
                                <th>Placa</th>
                                <th>Año</th>
                                <th>Modelo</th>
                                <th>Versión</th>
                                <th>Kilometraje</th>
                                <th>$ Esperado</th>
                                <th>Transmisión</th>
                                <th>Combustible</th>
                                <th>Dueños</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                leads.length === 0 ? (
                                    <tr>
                                        <td colSpan="14">No se encontraron leads</td>
                                    </tr>
                                ) : (
                                    leads.leads.slice().reverse().map((lead) => (
                                        <tr key={lead.id} className={styles.leads_row}>
                                            <td>{lead.fecha}</td>
                                            <td>{lead.nombre_del_propietario}</td>
                                            <td>{lead.correo}</td>
                                            <td>{lead.numero_de_telefono}</td>
                                            <td>{lead.marca}</td>
                                            <td>{lead.numero_de_placa}</td>
                                            <td>{lead.ano}</td>
                                            <td>{lead.modelo}</td>
                                            <td>{lead.version}</td>
                                            <td>{lead.kilometraje}</td>
                                            <td>{lead.precio_esperado}</td>
                                            <td>{lead.transmision}</td>
                                            <td>{lead.tipo_de_combustible}</td>
                                            <td>{lead.numero_de_duenos}</td>
                                            <td onClick={() => ChangeState(lead.id, lead.estado)} className={getBackgroundClass(lead.estado)}>{lead.estado}</td>
                                        </tr>
                                    ))
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Leads;