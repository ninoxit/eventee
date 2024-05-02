import { useState } from 'react';

export function PasswordInput(){
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="password-input">
            <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='form-control'
            />
            <label className="toggle-password-label float-right" onClick={togglePasswordVisibility}>
                {showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            </label>
        </div>
    );
}


