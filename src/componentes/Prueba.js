import React from "react";
/*import { Link} from "react-router-dom";

import Footer from "../paginas/Footer";
import SiderbarContainer from "../paginas/SidebarContainer";
import Navbar from '../paginas/Navbar';*/
import ConterHeader from "../paginas/ConterHeader";
const prueba = () => {
  return (
    <div className="content-wrapper">
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
                <th>ID</th>
                <th>NOMBRE</th> 
                <th>Date</th>
                <th>PRECIO</th>
                <th>DESCRIPCION</th>
                </tr>
            </thead>
            <tbody>
              
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

export default prueba;
