import React from "react";
//import Button from '../components/Button';
//import Label from '../components/Label';
//import Input from '../components/Input';
import '../assets/styles/login.css';

export function LoginForm ({}) {
    return(
        <form className="login-container">

            <h1>FOLIOS</h1>
            <p>Ingresa tu panda</p>
            
            <div className="login-form-elements">

                <input
                    type="text"
                    placeholder="Ejemplo: 123456"
                    id="panda"
                />
                <button type="submit">
                    Acceder
                </button>

            </div>

        </form>
    )
}