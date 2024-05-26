import React, { useState, useEffect } from "react";
import { supabase } from "../../../supabase/supabase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UserInformationForm(props) {
    const [userData, setUserData] = useState({
        name: '',
        lastname: '',
        telephone: '',
        email: '',
        username: '',
        bio: ''
    });

    useEffect(() => {
        if (props.userdata) {
            setUserData(props.userdata);
        } else {
            setUserData({
                name: '',
                lastname: '',
                telephone: '',
                email: props.email || '',
                username: '',
                bio: ''
            });
        }
    }, [props.userdata, props.email]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { error } = await supabase
                .from('usuario')
                .upsert({
                    name: userData.name,
                    lastname: userData.lastname,
                    telephone: userData.telephone,
                    email: userData.email,
                    username: userData.username,
                    bio: userData.bio
                }, { onConflict: ['email'] });

            if (error) throw error;

            // aqui
        } catch (error) {
            console.error('Error updating user data:', error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-sm-12 col-md-6 mb-2">
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Nombre" 
                            name="name" 
                            value={userData.name} 
                            onChange={handleChange} 
                        />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Apellido" 
                            name="lastname" 
                            value={userData.lastname} 
                            onChange={handleChange} 
                        />
                    </div>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-sm-12 col-md-12">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Telefono" 
                        name="telephone" 
                        value={userData.telephone} 
                        onChange={handleChange} 
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-6 mb-2">
                    <div className="form-group">
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Email" 
                            name="email" 
                            value={userData.email} 
                            onChange={handleChange} 
                        />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className="form-group">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">@</span>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Username" 
                                aria-label="Username" 
                                aria-describedby="basic-addon1" 
                                name="username" 
                                value={userData.username} 
                                onChange={handleChange} 
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-2">
                <div className="form-group">
                    <textarea 
                        placeholder="Bio" 
                        className="form-control" 
                        style={{ minHeight: "100px", resize: "none" }} 
                        name="bio" 
                        value={userData.bio} 
                        onChange={handleChange} 
                    ></textarea>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <button className="btn btn-primary btn-block">
                        <i className="bi bi-floppy-fill"></i> Guardar
                    </button>
                </div>
            </div>
        </form>
    );
}
