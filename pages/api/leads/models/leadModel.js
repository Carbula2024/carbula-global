const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'public', 'data', 'leads.json');

const createLead = async (leadData) => {
    let idLead = 0;
    try {
            // Leer el archivo lead.json o inicializar un array vacío si no existe
            let leads = [];
            if (fs.existsSync(filePath)) {
                const data = fs.readFileSync(filePath, 'utf-8');
                leads = JSON.parse(data);
            }

            const obtenerFechaActual = () => {
                const fecha = new Date();
            

                const dia = String(fecha.getDate()).padStart(2, '0'); // Asegura que siempre tenga 2 dígitos
                const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11
                const anio = fecha.getFullYear();
            
                return `${dia}/${mes}/${anio}`;
            };


            idLead = leads.length+1;

            const newLead = {
                id: leads.length + 1, // ID secuencial
                fecha: obtenerFechaActual(),
                ...leadData,
                estado:"por tomar"
            };
        
            leads.push(newLead);
        
            // Guardar los leads actualizados en el archivo lead.json
            fs.writeFileSync(filePath, JSON.stringify(leads, null, 2), 'utf-8');
        return idLead;
    } catch (error) {
        throw error
    }
};

const getAllLeads = async () => {
    try {
        let leads = [];
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf-8');
            leads = JSON.parse(data);
        }
        return leads;
    } catch (error) {
        throw error
    }

};



const setEstadoLead = async (id, estado) => {
    try {
        let leads = [];
        // Leer el archivo JSON
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf-8');
            leads = JSON.parse(data);
        }

        // Buscar y actualizar el estado del lead con el ID correspondiente
        const leadIndex = leads.findIndex(lead => lead.id === id);
        if (leadIndex === -1) {
            throw new Error(`Lead con ID ${id} no encontrado.`);
        }

        leads[leadIndex].estado = estado;

        // Guardar los leads actualizados en el archivo lead.json
        fs.writeFileSync(filePath, JSON.stringify(leads, null, 2), 'utf-8');

        return { success: true, message: `estado actualizado exitosamente "${estado}".` };
    } catch (error) {
        throw new Error(`Error al actualizar el estado`);
    }
};


module.exports = { createLead, getAllLeads, setEstadoLead };