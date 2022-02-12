
const Formulario = () =>{
    return(
        <form className="mx-5">
            <div className="mb-3">
    <input type="email" className="form-control bg-light fs-5" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Telefono, usuario o correo electronico"/>
  </div>
  <div className="mb-3">
    <input type="password" className="form-control bg-light fs-5" id="exampleInputPassword1" placeholder="Contraseña"/>
  </div>
  
  <button type="submit" className="btn btn-primary container-fluid fs-4" disabled>Iniciar sesión</button>
</form>
    )
}

export default Formulario