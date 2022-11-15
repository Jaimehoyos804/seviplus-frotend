import estados from "../../enums/estados";
import ClientesServicios from "../../servicios/ClientesServicios";

const ListadoClientes = () => {

let estado = estados.Cargando;
  const ListadoCliente = ClientesServicios.listarClientes();
  console.log(ListadoCliente);

  if(ListadoCliente > 0){
    estado = estados.Ok;
  }
  else{
    estado = estados.Vacio;
  }
  
  return (
    <div className="container">
      <h3 className="mt-2">Lista Clientes</h3>
      <table className="table table-sm ">
        <thead>
          <tr>
            <th>Nombres Completos</th>
            <th>Documento</th>
            <th>Telefono</th>
            <th>Email</th>
            <th>Direccion</th>
            <th className="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {estado==estados.Cargando?
          (<div>Carga en proceso</div>)
          :
          estado == estados.Vacio ? 
          (<div>No hay datos</div>)
          :
            ListadoCliente.map((cliente) => (
              <tr>
                <td>{cliente.nombres + " " + cliente.apellidos}</td>
                <td>{cliente.documento}</td>
                <td>{cliente.telefono}</td>
                <td>{cliente.correo}</td>
                <td>{cliente.direccion}</td>
                <td className="text-center">
                  <button className="btn  btn-primary me-2 btn-sm">
                    Editar
                  </button>
                  <button className="btn  btn-primary me-2 btn-sm">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
        }
       
        </tbody>
      </table>
    </div>
  );
};
export default ListadoClientes;
