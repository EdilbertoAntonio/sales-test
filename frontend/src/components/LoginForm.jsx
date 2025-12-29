import React from "react";
import Button from '../components/Button';
import Label from '../components/Label';
import Input from '../components/Input';
import '../assets/styles/login.css';

export function LoginForm ({}) {
    return(
        <form className="login-container">
            <Label>
                Folios
            </Label>
            <p>
                Ingresa tu panda
            </p>
            <Input
                type="text"
                placeholder="Ejemplo: 123456"
                id="panda"
            />
            <Button type="submit">
                Ingresa
            </Button>

        </form>
    )
}