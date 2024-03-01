

import React, { useEffect } from "react";
import { Link,useNavigate, } from "react-router-dom";
import ConterHeader from "../paginas/ConterHeader";
import Footer from "../paginas/Footer";




const Home = () => {
    const navigate = useNavigate();


useEffect(()=>{
const autenticar = async () =>{
    const token = localStorage.getItem("token")
    if(!token){
    navigate("/");
    }
}
autenticar()
},[]);
    
    return(
        
    <div >
    
    
    <div className>
        <ConterHeader
        titulo={"BIENVENIDOS LAVANDERIA SAN CRISTOBAL"}
        breadCrumb1={""}
        breadCrumb2={"salir"}
        ruta1={"/Login"}
        ruta2={"/"}
        />
        <section className="content">
        <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-3 col-6'>
                        <div className='small-box bg-info'>
                            <div class="inner">
                                
                                <h3>RECIBOS</h3>
                                <p>&nbsp;</p>
                                </div>
                                <div className='icon'>
                                <i className='' />
                                    <div class="img-con">
                                </div>
                                </div>
                                <Link to ={"/Recibo"} class="small-box-footer">CREAR RECIBOS <i class="fas fa-arrow-circle-right"></i></Link>
                        </div>                             
                    </div>
                </div>
            </div>         
            </section>
            <section className="content">
        <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-3 col-6'>
                        <div className='small-box bg-info'>
                            <div class="inner">
                                
                                <h3>LISTA DE RECIBOS</h3>
                                <p>&nbsp;</p>
                                </div>
                                <div className='icon'>
                                <i className='' />
                                    <div class="img-con">
                                </div>
                                </div>
                                <Link to ={"/Listarecibos"} class="small-box-footer">VER RECIBOS <i class="fas fa-arrow-circle-right"></i></Link>
                        </div>                             
                    </div>
                </div>
            </div>         
            </section>
    </div>
    <Footer></Footer>
</div>
    )
};


export default Home;
