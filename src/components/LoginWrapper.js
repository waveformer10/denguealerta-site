import { useState } from "react";
import  './LoginWrapper.css'
import logo from './img/LogoDA.png';

const LoginWrapper = ({children}) => {
    const[logado, setlogado]= useState(false);
    if (logado){
        return children;
    }
  return (
    <div className="login-layout">
        <form className="login-form" onSubmit={(event)=>{
            event.preventDefault();
            setlogado(true);
        }}>
            <div className="login-container">
                <h3>Entrar</h3>
                <p>
                    <input type="text" name="email" placeholder="E-mail"/>
                </p>
                <p>
                    <input type="password" name="senha" placeholder="Senha"/>
                </p>
                <p>
                    <button type="submit">Entrar</button>
                </p>
            </div>
        </form>
        <div className="quadro-cinza">
            <div className="container">
                <img src={logo} alt="logo" className="logo"/>
                <h1>BEM-VINDO</h1>
                <h2>Dengue <span className="red">Alerta</span> informa!</h2>
            </div>
        </div>
    </div>
  )
}

export default LoginWrapper;