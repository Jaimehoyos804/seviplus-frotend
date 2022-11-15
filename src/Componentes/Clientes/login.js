const FrmLogin = () => {
  return (
    <body>
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/x-icon" href="/assets/logo-vt.svg" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bootstrap Login Page</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossorigin="anonymous"
        />
      </head>
      <body className="bg-info d-flex justify-content-center align-items-center vh-100">
        <div className="bg-white p-5 rounded-5 text-secondary" style={{width:"25rem"}} >
          <div className="d-flex justify-content-center" >
            <img
              src="https://www.cambiayvive.es/wp-content/uploads/2020/04/icono-candado.png"
              alt="login"
              style={{ height: "7rem" }}
            />
          </div>
          <div className="text-center fs-1 fw-bold">Login</div>
          <div class="input-group mt-4">
            <div className="input-group-text bg-info">
              <img src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-bleu.png" alt="" height="10px"></img>
            </div>
            <input className="form-control" type="text" placeholder="User name"></input>
          </div>
          <div className="input-group mt-1">
            <div className="input-group-text bg-info">
              <img src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-bleu.png" alt="" height="10px"></img>
            </div>
            <input className="form-control" type="password" placeholder="password"></input>
          </div>
          <div className="d-flex justify-content-around mt-1">
            <div className="d-flex align-items-center">
              <input className="form-check-input" type="checkbox"></input>
              <div className="pt-1" class="text-decoration-none text-info fw-semibold fst-italic">Recuerdame</div>
            </div>
            <div>
              <a href="/clientes/form" className="text-decoration-none text-info fw-semibold fst-italic">¿No tienes cuenta?</a>
            </div>
          </div>
          <div className="btn btn-info text-white w-100 mt-4"><a href="/">Login</a></div>
        </div>
      </body>
    </body>
  );
};
export default FrmLogin;
