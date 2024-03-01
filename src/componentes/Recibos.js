import React, {useState} from "react";
import crud from "../conexiones/crud";
import ConterHeader from "../paginas/ConterHeader";
import swal from "sweetalert";

const Recibo = () => {
    
    
    const [recibos , setRecibos ] = useState({
    
        numeroRecibo: '',
        nombre:'',
        cantidad:'',
        descripcion:'',
        valor:''
        
    })
    const {numeroRecibo,nombre,cantidad,descripcion,valor}= recibos;

    const onChange=(e)=>{
        setRecibos({
            ...recibos,[e.target.name]:e.target.value
        })
    }
    const crearRecibo = async()=>{
        const data={
            numeroRecibo:recibos.numeroRecibo,
            nombre:recibos.nombre,
            cantidad:recibos.cantidad,
            descripcion:recibos.descripcion,
            valor:recibos.valor          
        }
            console.log(data);
            const response = await crud.POST(`/api/recibos`,data);
            const mensaje = response.msg;
            console.log(mensaje);
            if(mensaje === 'recibo ya exixte' ){
                const mensaje = "EL recibo ya exixte";
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
                const mensaje = "EL RECIBO FUE CREADO";
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

                setRecibos({
                    nombre:'',
                    cantidad:'',
                    descripcion:'',
                    valor:''
                })
                
            }
    }


    const onSubmit=(e)=>{
        e.preventDefault();
        crearRecibo();
    }

    
    
    return (
        <div >
        <ConterHeader
        titulo={"BIENVENIDOS LAVANDERIA SAN CRISTOBAL"}
        breadCrumb1={""}
        breadCrumb2={"Home"}
        ruta1={"/Login"}
        ruta2={"/Home"}
        />
        
        <div className="md:flex md:min-h-screen">
            <main className="flex-1">
            <form onSubmit={onSubmit}>
                <div className="mt-10 flex justify-center">
                    <div className="card card-success">
                        <div className="card-header">
                            <h3 className="card-title">CREAR RECIBO</h3>
                        </div>
                        
                        <div className="card-body control-lg"
                        >
                            <input
                                className="form-control form-control-lg"
                                type="number"
                                placeholder="NUMERO RECIBO"
                                name="numeroRecibo"
                                value={numeroRecibo}
                                onChange={onChange}
                            />
                            <br />
                            <input
                                className="form-control form-control-lg"
                                type="text"
                                placeholder="nombre"
                                id="nombre"
                                name="nombre"
                                value={nombre}
                                onChange={onChange}
                            />
                            <br />
                            <input
                                className="form-control form-control-lg"
                                type="Number"
                                placeholder="CANTIDAD PIEZAS"
                                id="cantidad piezas"
                                name="cantidad"
                                value={cantidad}
                                onChange={onChange}
                            />
                            <br />
                            <input
                                className="form-control form-control-lg"
                                type="text"
                                placeholder="DESCRIPCION"
                                id="descripcion"
                                name="descripcion"
                                value={descripcion}
                                onChange={onChange}
                            />
                            <br />
                            <input
                                className="form-control form-control-lg"
                                type="Number"
                                placeholder="VALOR"
                                id="valor"
                                name="valor"
                                value={valor}
                                onChange={onChange}
                            />
                            
                        </div>
                        
                    </div>
                    
                </div>
                <input
                type="submit"
                value="CREAR RECIBO"
                className="btn btn-block btn-primary"
                />
                </form>
            </main>           
        </div>
        </div>
    );
};

export default Recibo;
