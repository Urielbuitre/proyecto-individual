import React, {useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import crud from "../conexiones/crud";
import swal from "sweetalert";

const Login = () => {

    const navigate= useNavigate();
    const [usuario , setUsuario ] = useState({
    
        email: '',
        password:''
        
    })

    const {email,password}= usuario;

    const onChange=(e)=>{
        setUsuario({
            ...usuario,[e.target.name]:e.target.value
        })
    }

    const autenticarusuario = async()=>{
        const data={
            email:usuario.email,
            password:usuario.password
        }
        console.log(data);
        const response = await crud.POST(`/api/auth`,data);
            const mensaje = response.msg;
            console.log(mensaje);
            if(mensaje ==='no existe'){
                const mensaje = "EL USUARIO NO EXISTE";
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
            }else if(mensaje ==="password incorrecto"){
                const mensaje = "PASSWORD INCORRECTO";
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

                const jwt = response.token;

                localStorage.setItem('token',jwt);


                navigate("/home");
            }
    }


    const onSubmit=(e)=>{
        e.preventDefault();
        autenticarusuario();
    }
    

    return (
        <main className="container mx-auto mt-5 md:-20 p-5 md: flex md:justify-center">
            <div className="md:w-2/3 lg:w-2/5">
            <h3 className="text-5xl inline bg-gradient-to-r from-indigo-200 via-violet-700 to-indigo-200 bg-clip-text font-bold">
            </h3>
                
        
    <div className="login-box bg-gray-200">
        <div className="login-logo bg-slate-200">
            <Link to={"#"}><b>Iniciar</b>Sesión</Link>
        </div>
        <div className="card">
            <div className="card-body login-card-body bg-gray-200">
                <p className="login-box-msg">Bienvenido, ingrese sus credenciales.</p>
                <form action="" method=""
                onSubmit={onSubmit}>
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
                        iniciar sesion
                    </button>
                    <Link to={"/crear-cuenta"} className="btn btn-block btn-danger">
                        Crear Cuenta
                    </Link>
                </div>
                </form>
            
            </div>
        </div>
    </div>
    </div>
</main>
);
};

export default Login;
