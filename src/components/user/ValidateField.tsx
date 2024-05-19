export default function ValidateField(name: string, value: string){
    let errorMessage = "";
    switch (name) {
        case "firstName":
        case "lastName":
            if (value.trim() === "") {
                errorMessage = "Este campo es requerido";
            }
            break;
        case "nickname":
            if (value.trim() === "") {
                errorMessage = "El nickname es requerido";
            }
            break;
        case "phone":
            const phoneRegex = /^[0-9\b]+$/;
            if (!phoneRegex.test(value)) {
                errorMessage = "El teléfono debe contener solo números";
            }
            break;
        default:
            break;
    }
    return errorMessage;
}