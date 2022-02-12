
const Formulario = () =>{
    return(
        <form className="mx-5">
            <div className="mb-3">
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Telefono, usuario o correo electronico"/>
  </div>
  <div className="mb-3">
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña"/>
  </div>
  
  <button type="submit" className="btn btn-primary container-fluid" disabled>Iniciar sesión</button>
</form>
    )
}

export default Formulario