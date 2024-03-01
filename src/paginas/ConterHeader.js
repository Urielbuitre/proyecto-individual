import React from "react";
import { Link } from "react-router-dom";

const ConterHeader = ({titulo,breadCrumb1,breadCrumb2, ruta1,ruta2}) => {
    return (
        <section className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1>{titulo}</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><Link to ={ruta1}>{breadCrumb1}</Link></li>
                            <li className="breadcrumb-item"><Link to ={ruta2}>{breadCrumb2}</Link></li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default ConterHeader;