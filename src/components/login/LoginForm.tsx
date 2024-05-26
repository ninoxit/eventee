import React, { useState } from 'react';
import { useAuth } from '../../context/AuthProvider'; 
import { redirect } from '@tanstack/react-router';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const { login } = useAuth(); 

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newErrors = {};

        if (!email) {
            newErrors.email = 'Oops, email requerido';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'El email no es válido';
        }

        if (!password) {
            newErrors.password = 'Oops, contraseña requerida';
        } else if (password.length < 6) {
            newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                await login(email, password);
                throw redirect({
                    to: '/user'
                })
            } catch (error) {
                console.error('Error al iniciar sesión:', error.message);
            }
        }
    };

    return (
        <div className="left-side">
            <form onSubmit={handleSubmit} className='bg-light p-4 left-form'>
                <div className="form-group">
                    <h3>
                        Iniciar sesión
                    </h3>
                </div>
                <div className="form-group">
                    <hr />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        name="Email"
                        placeholder="*email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <div className="text-danger">{errors.email}</div>}
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        name="Password"
                        placeholder="*contraseña"
                        className="form-control mt-4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <div className="text-danger">{errors.password}</div>}
                </div>
                <div className="form-group mt-4">
                    <div className="row">
                        <div className="col-sm-6">
                            <label>
                                <input type="checkbox" name="keepSession" /> Recordar sesión
                            </label>
                        </div>
                        <div className="col">
                            <a href="enlace">
                                ¿Olvidó la contraseña?
                            </a>
                        </div>
                    </div>
                </div>
                <div className="form-group mt-4">
                    <button className="btn btn-primary">
                        Entrar ahora
                    </button>
                </div>
            </form>
        </div>
    );
}
