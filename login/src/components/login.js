import React from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import $ from "jquery"
import { browserHistory } from "react-router";
import ReactDOM from "react-dom"
import Home from "./home"
import '../styles/login.css'

class Login extends React.Component {
    
  state={
    val: false,
  }

    cambiar = () =>{
        this.setState((state)=>({
          val:true,
          comp: <Home></Home>
        }))
    }
      validar=(usuario,password) =>{
        var datos={
            User: usuario,
            password: password
        }

        $.get("http://localhost:8080/Proyecto/Login",datos, (resultado)=>{
          if(resultado[0].usuario !="error"){
            this.state.val = true;
            this.forceUpdate();
          }else{
            alert("USUARIO NO REGISTRADO")
          }
          
        })
     
    }
    render() {
      const qId = (new URLSearchParams(window.location.search).get("val") == "true")? true:false;
      const undiv= <div className="d-grid" id="equis">
                    <div id="titulo">
                      <div className="center">
                        <div className="animated-text">Neural Network Color Classifier</div>
                      </div>
                    </div>
                    <div id="login" className="contenedor">
                    <div className="center">
                      <h1 className="AlignCenter" > Login </h1>
                        <div className="formulario">
                          <div class="form-group">
                            <label class="form-label" for="User">Usuario</label>
                            <input placeholder="Ingrese el usuario" type="text" id="User" class="form-control" />
                          </div>
                          <div class="form-group"><label class="form-label" for="password">Password</label>
                            <input placeholder="Ingrese su contraseña" type="password" id="password" class="form-control" />
                          </div>
                          <button className="boton" onClick={() => this.validar(document.getElementById("User").value,document.getElementById("password").value)}>
                          Submit
                          </button>
                      </div>
                    </div>
                    </div>
            </div>
       const esValido = (this.state.val) || qId?<Home></Home>: undiv
        return(
          <div>
            {esValido}
            {console.log(esValido)}
          </div>
        )    
  }
}
export default Login; 