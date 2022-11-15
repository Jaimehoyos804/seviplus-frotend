const ListadoAgentes= () => {
    return (
        <div className="container">
            <h3 className="mt-2">Lista Agentes</h3>
            <table className="table table-sm ">
                <thead>
                    <tr>
                        <th>Nombres Completos</th>
                        <th>Documento</th>
                        <th>Cargo</th>
                        <th>Email</th>
                        <th>Direccion</th>
                        <th>Acciones</th>
                    </tr>

                </thead>
                <tbody>
                <tr>
                    <td>Jaime Hoyos</td>
                    <td>20104567</td>
                    <td>3245679087</td>
                    <td>jaime.dev@gmail.com</td>
                    <td>Localidad C</td>
                    <td>
                        <button>Editar</button>
                        <button>Eliminar</button>
                    </td>
                </tr>
                <tr>
                    <td>Jaime Hoyos</td>
                    <td>20104567</td>
                    <td>3245679087</td>
                    <td>jaime.dev@gmail.com</td>
                    <td>Localidad C</td>
                    <td>
                        <button>Editar</button>
                        <button>Eliminar</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
export default ListadoAgentes;