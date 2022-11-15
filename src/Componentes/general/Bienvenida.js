const Bienvenido = () => {
    return (
        <html>
            <body>

                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="2000">
                            <img src="https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2020/07/Soporte-Tecnico-presencial-1-1024x576.png" class="d-block w-100" alt="..."width="800" height="800"/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Soporte IT</h5>
                                    <p>Los mejores profesionales para brindarte un soporte de calidad</p>
                                </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="https://newbest.net/wp-content/uploads/2018/09/tickects.jpg" class="d-block w-100" alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Seguimiento de Incidencias</h5>
                                    <p>Seguimeinto en tiempo real de tus casos realizados</p>
                                </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="https://palabrasclaras.mx/wp-content/uploads/2021/12/estudiantes-unam-comunicaciones-2-scaled-1.jpg" class="d-block w-100" alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Tecnologia de punta</h5>
                                    <p>Contamos con excelentes servidores para mejorar la velociada de respuesta</p>
                                </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

            </body>

        </html>
    )
}
export default Bienvenido;