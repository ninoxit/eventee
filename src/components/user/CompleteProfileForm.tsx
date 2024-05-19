import { useState, useEffect } from "react";
import ValidateField from "./ValidateField";
import IsNicknameTaken from "./IsNicknameTaken";
import RegisterUserData from "./RegisterUserData";

export default function CompleteProfileForm(props) {
    const userEmail = props.email;

    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        nickname: "",
        phone: ""
    });

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        nickname: "",
        phone: ""
    });

    const [nicknameError, setNicknameError] = useState("");

    const handleChange = async (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });

        const errorMessage = ValidateField(name, value);
        setErrors({
            ...errors,
            [name]: errorMessage
        });

        if (name === "nickname" && !errorMessage) {
            const isTaken = await IsNicknameTaken(value);
            setNicknameError(isTaken ? "Este nickname ya está en uso" : "");
        }else{
            console.log("Sí se puede " + value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!Object.values(errors).some(error => error !== "") && !nicknameError) {
            RegisterUserData(formValues);
            console.log("Formulario enviado:", formValues);
        }
    };

    return (
        <>
            <div className="container" style={{ width: '500px' }}>
                <h3>Completa tu perfil</h3>
                <form className="bg-dark p-4 rounded" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="Nombre(s)"
                                    className="form-control"
                                    value={formValues.firstName}
                                    onChange={handleChange}
                                />
                                {errors.firstName && <p className="text-danger">{errors.firstName}</p>}
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Apellido(s)"
                                    className="form-control"
                                    value={formValues.lastName}
                                    onChange={handleChange}
                                />
                                {errors.lastName && <p className="text-danger">{errors.lastName}</p>}
                            </div>
                        </div>
                    </div>
                    <div className="form-group mt-2">
                        <input
                            type="text"
                            name="nickname"
                            placeholder="Nickname"
                            className="form-control"
                            value={formValues.nickname}
                            onChange={handleChange}
                        />
                        {errors.nickname && <p className="text-danger">{errors.nickname}</p>}
                        {nicknameError && <p className="text-danger">{nicknameError}</p>}
                    </div>
                    <div className="form-group mt-2">
                        <input
                            type="text"
                            name="phone"
                            placeholder="Telefono"
                            className="form-control"
                            value={formValues.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && <p className="text-danger">{errors.phone}</p>}
                    </div>
                    <div className="form-group mt-2">
                        <button className="btn btn-primary" type="submit" disabled={Object.values(errors).some(error => error !== "") || nicknameError}>
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
