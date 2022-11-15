const clientes = [
    {
        nombres: "Michell Sofia",
        apellidos:"Hoyos Valdes",
        documento:1033567890,
        direccion: "Localidad 5A",
        telefono: 3217890654,
        correo: "m.sofi.dev2032@gmail.com",
        passw: "admin"
    }
]
const ClientesServicios ={};

ClientesServicios.listarClientes = ()=>{
    return clientes;
}

export default ClientesServicios;