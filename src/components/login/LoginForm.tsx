import React, { useState } from 'react';
import { useAuth } from '../../context/AuthProvider'; 
import { redirect } from '@tanstack/react-router';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
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
                throw redirect({
                    to: '/user'
                })
            }
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="left-side">
            <form onSubmit={handleSubmit} className='bg-light p-4 left-form'>
                <div className="form-group">
                    <img src="https://bpzhrnohprgmwxqrdyow.supabase.co/storage/v1/object/public/event_frontpage/eventee_icon.png?t=2024-05-28T00%3A17%3A14.730Z"
                    alt="" 
                    style={{width: "50px"}}/>
                    <h3 className='mt-4'>
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
                        placeholder="correofantastico@gmail.com"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ borderRadius: '50px', outline: "none", boxShadow: "none" }}
                    />
                    {errors.email && <div className="text-danger">{errors.email}</div>}
                </div>
                <div className="form-group position-relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        name="Password"
                        placeholder="contraseña"
                        className="form-control mt-4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ borderRadius: '50px', outline: "none", boxShadow: "none" }}
                    />
                    <button
                        type="button"
                        className="btn position-absolute top-50 end-0 translate-middle-y"
                        onClick={toggleShowPassword}
                        style={{ background: 'none', border: 'none' }}
                    >
                        <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                    </button>
                    {errors.password && <div className="text-danger">{errors.password}</div>}
                </div>
                <div className="form-group mt-4">
                    <div className="d-grid gap-2">
                        <button className="btn btn-lg btn-primary rounded-pill">
                            Entrar ahora
                        </button>
                    </div>
                </div>
                <div className="form-group mt-4 text-center">
                    <a href="/forgot">
                        ¿Olvidaste tu contraseña?
                    </a>
                </div>
                
            </form>
        </div>
    );
}
