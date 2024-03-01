import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import swal from "sweetalert";
import crud from "../conexiones/crud"

const CrearCuenta =()=>{
   
    const navigate= useNavigate();
    const [usuario , setUsuario ] = useState({
        nombre:'',
        email: '',
        password:'',
        confirmar:''
    })

    const {nombre,email,password,confirmar}= usuario;
    const onChange=(e)=>{
        setUsuario({
            ...usuario,[e.target.name]:e.target.value
        })
    }
    const crearCuenta=async()=>{ 
        
        if(password !==confirmar){
            console.log("el password es diferente");
            const mensaje ="las contraseñas son diferentes.";
            swal({
                title: "error",
                text:mensaje,
                icon:"error",
                buttons:{
                    confirm:{
                        Text:"OK",
                        value:true,
                        visible:true,
                        className : "btn btn-danger",
                        closeModal: true
                    }
                }
            })
        }else{
            const data={
                nombre: usuario.nombre,
                email:usuario.email,
                password:usuario.password
            }
            console.log(data);
            const response = await crud.POST(`/api/usuarios`,data);
            const mensaje = response.msg;
            if(mensaje ==='ya existe'){
                const mensaje = "EL USUARIO YA EXISTE";
                swal({
                    title: "error",
                    text:mensaje,
                    icon:"error",
                    buttons:{
                        confirm:{
                            Text:"OK",
                            value:true,
                            visible:true,
                            className : "btn btn-danger",
                            closeModal: true
                        }
                    }
                })

            }else{
                const mensaje = "EL USUARIO FUE CREADO";
                swal({
                    title: "información",
                    text:mensaje,
                    icon:"success",
                    buttons:{
                        confirm:{
                            Text:"OK",
                            value:true,
                            visible:true,
                            className : "btn btn-promay",
                            closeModal: true
                        }
                    }
                });

                setUsuario({
                    nombre:'',
                    email:'',
                    password:'',
                    confirmar:''
                })
                navigate("/login");
            }
        }
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        crearCuenta();
    }



    return(
<div className="hold-transition login-page">
    <div className="login-box">
        <div className="login-logo">
            <Link to={"#"}><b>CREAR</b>CUENTA</Link>
        </div>
        <div className="card">
            <div className="card-body login-card-body">
                <p className="login-box-msg">Ingrese los datos.</p>
                <form
                onSubmit={onSubmit}
                action="../../index3.html" method="post">
                <div className="input-group mb-3">
                        <input type="nombre" 
                            className="form-control" 
                            placeholder="nombre"
                            id="nombre"
                            name="nombre"
                            value={nombre}
                            onChange={onChange}/>
                            <div className="input-group-append">
                            <div className="input-group-text">
                                <span className="fas fa-user" />
                            </div>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <input type="email" 
                            className="form-control" 
                            placeholder="Email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={onChange}/>
                            <div className="input-group-append">
                            <div className="input-group-text">
                                <span className="fas fa-envelope" />
                            </div>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <input type="password" 
                            className="form-control" 
                            placeholder="Password"
                            id="password"
                            name="password" 
                            value={password}
                            onChange={onChange}/>
                        <div className="input-group-append">
                            <div className="input-group-text">
                                <span className="fas fa-lock" />
                            </div>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <input type="password" 
                            className="form-control" 
                            placeholder="confirmar password"
                            id="confirmar"
                            name="confirmar"
                            value={confirmar}
                            onChange={onChange} />
                        <div className="input-group-append">
                            <div className="input-group-text">
                                <span className="fas fa-lock" />
                            </div>
                        </div>
                    </div>
                
                <div className="social-auth-links text-center mb-3">
                    <button 
                    type="submit"
                    className="btn btn-block btn-primary">
                        Crear Cuenta
                    </button>
                    <Link to={"/"} className="btn btn-block btn-danger">
                        Regresar a Login
                    </Link>
                </div>
                </form>
            
            </div>
        </div>
    </div>
</div>);

}; 

export default CrearCuenta;