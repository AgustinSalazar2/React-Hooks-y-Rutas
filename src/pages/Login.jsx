import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/signin.css'
import img from '../assets/img/0957809107620ce.jpg'
import { AuthContext } from '../context/AuthContext'
import { type  } from "../types/type";

// Diseñar el formulario de inicio de sesión y programar los eventos de formulario
// Como así también el envío de los datos al servidor
export const Login = () => {

  const { authDispatch } = useContext(AuthContext);

  return (
    <div className='container d-block'>
      <main className="form-signin w-100 m-auto">
        <form className='form-control'>
          <img className="mb-4" src={img} alt="carrito" width={72} height={57} />
          <h1 className="h3 mb-3 fw-normal">Inicio de Sesión</h1>
          <div className="form-floating mb-2">
            <input type="text" className="form-control" id="floatingInput" placeholder="Username" />
            <label htmlFor="floatingInput">Nombre de Usuario</label>
          </div>
          
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Contraseña</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" defaultValue="remember-me" /> Remember me
            </label>
          </div>
          <button onClick={()=>authDispatch({type: type.login})} className="w-100 btn btn-lg btn-primary">Iniciar Sesión</button>
          <div className='mt-5'>
            <h6>En caso de no estar registrado debe</h6>
            <NavLink to="/register">Registrarse</NavLink>
          </div>
          <p className="mt-3 mb-3 text-muted">© 2017–2022</p>
        </form>
      </main>
    </div>
  
  )
}
