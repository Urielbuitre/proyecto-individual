import React, {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
/*import Navbar from "../paginas/Navbar";*/
import ConterHeader from "../paginas/ConterHeader";
import crud from "../conexiones/crud";



const Listarecibos = () => {


    const navigate = useNavigate();

    useEffect(()=>{
        const autenticarUsuario=async()=>{
          const token=localStorage.getItem("token")
          if(!token){
            navigate("/login")
          }
        }
        autenticarUsuario()
      },[navigate]);

      
      const [recibo, setRecibo]=useState([]);

      const cargarRecibos = async ()=>{
        const response= await crud.GET(`/api/recibos`);
        console.log(response);
        setRecibo(response.recibo);
        }
        
        useEffect(()=>{
            cargarRecibos();
        },[])




  return (
    <div >
        <ConterHeader
        titulo={"BIENVENIDOS LAVANDERIA SAN CRISTOBAL"}
        breadCrumb1={""}
        breadCrumb2={"Home"}
        ruta1={"/Login"}
        ruta2={"/Home"}
        />
      <div className="row">
        <div className="col-12">
        <div className="card">
        <div className="card-header">
            <h3 className="card-title">RECIBOS DE ENTRADA</h3>
            <div className="card-tools">
            <div
                className="input-group input-group-sm"
                style={{ width: 150 }}
            >
                <input
                type="text"
                name="table_search"
                className="form-control float-right"
                placeholder="Search"
                />
                <div className="input-group-append">
                <button type="submit" className="btn btn-default">
                    <i className="fas fa-search" />
                </button>
                </div>
            </div>
            </div>
        </div>
          {/* /.card-header */}
        <div className="card-body table-responsive p-0">
            <table className="table table-hover text-nowrap">
            <thead>
                <tr>
                <th>RECIBO</th>
                <th>NOMBRE</th> 
                <th>CANTIDAD</th>
                <th>DESCRIPCION</th>
                <th>VALOR</th>
                <th>fecha</th>
                </tr>
            </thead>
            <tbody>
                {
                    recibo.map(
                        item =>
                        <tr key={item._id}>
                          <td>{item.numeroRecibo}</td>
                            <td>{item.nombre}</td>
                            <td>{item.cantidad}</td>
                            <td>{item.descripcion}</td>
                            <td>{item.valor}</td>
                            <td>{item.registro}</td>
                        </tr>
                    )
                };
              </tbody>
            </table>
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
      </div>
    </div>
  );
};
export default Listarecibos;
