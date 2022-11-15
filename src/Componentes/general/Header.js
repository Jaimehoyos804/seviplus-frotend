const Header = () => {
    return (
        <header className="p-3 text-bg-dark">
                      
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start" >
                    <span className="fs-4" ></span>
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="/"><img src="https://cdn-icons-png.flaticon.com/128/1597/1597877.png
                        " alt="Logo Compania" width="60" height="50"></img></a></li>
                        <li><a href="/" className="nav-link px-4 text-light" style={{ fontFamily: "Elephant" }}
                        >Inicio</a></li>
                        <li><a href="/Cliente" className="nav-link px-4 text-light" style={{ fontFamily: "Elephant" }}
                        >Clientes</a></li>
                        <li><a href="/Agentes" className="nav-link px-4 text-light" style={{ fontFamily: "Elephant" }}
                        >Agentes</a></li>
                    </ul>
                    <div className="text-end">
                    <a href="/clientes/formLogin" type="button" className="btn btn-outline-light me-2">login</a>
                        <a href="/clientes/form" type="button" className="btn btn-outline-light me-2">Registrase</a>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;