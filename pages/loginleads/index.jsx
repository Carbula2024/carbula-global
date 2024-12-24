import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './loginleads.module.css'

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/leads/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });
        if (res.ok) {
            router.push('/leads'); // Redirige al usuario después del login
        } else {
            console.error('Error al iniciar sesión');
        }
    };

    return (
        <>
            <form onSubmit={handleLogin} className={styles.form_login}>
            <input
                type="text"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Iniciar sesión</button>
        </form>
        </>
    );
}