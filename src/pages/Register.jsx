import React from 'react'
import { NavLink } from 'react-router-dom'

import '../assets/signin.css'
import img from '../assets/img/118498257_298230474608155_1978830216380982306_n.jpg'

// Diseñar el formulario de inicio de sesión y programar los eventos de formulario
// Como así también el envío de los datos al servidor
export const Register = () => {
  return (
    <div className='container d-block'>
      <main className="form-signin w-100 m-auto">
        <form className='form-control'>
          <img className="mb-4" src={img} alt="imagen" width={72} height={57} />
          <h1 className="h3 mb-3 fw-normal">Registro</h1>

          <div className="form-floating mb-2">
            <input type="text" className="form-control" id="floatingInput" placeholder="Username" />
            <label htmlFor="floatingInput">Nombre de Usuario</label>
          </div>
          
          <div className="form-floating mb-2">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Contraseña</label>
          </div>

          <div className="form-floating mb-2">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Confirmar contraseña</label>
          </div>

          <div className="form-floating mb-2">
            <input type="email" className="form-control" id="floatingEmail" placeholder="Example@email.com" />
            <label htmlFor="floatingInput">Email</label>
          </div>

          <div className="form-floating mb-2">
            <input type="number" className="form-control" id="floatingPhone" placeholder="Telefono" />
            <label htmlFor="floatingInput">Telefono</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" defaultValue="remember-me" /> Acepto los terminos y condiciones
            </label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">Registrarse</button>

          <div className='mt-3'>
            <h6>Si ya esta registrado</h6>
            <NavLink to="/login">Inicie Sesion</NavLink>
          </div>

          <p className="mt-3 mb-3 text-muted">© 2017–2022</p>
        </form>
      </main>
    </div>
  )
}
