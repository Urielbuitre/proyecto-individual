import React from "react";
import Navbar from "../paginas/Navbar";
import ConterHeader from "../paginas/ConterHeader";
<link rel="stylesheet" href="styles.css"></link>

const admin = () => {
    return (
      <div className="wrapper">
        <Navbar>funciona</Navbar>
        
          <ConterHeader
            titulo={"lavanderia"}
            breadCrumb1={"Login"}
            breadCrumb2={""}
            ruta1={"/Login"}
          />

          <main className="prueba1 container mx-auto mt-5 md:-20 p-5 md: flex md:justify-center">
            <div className="md:w-2/3 lg:w-2/5">
              <h2 className="text-xl inline bg-gradient-to-r from-indigo-200">
                {" "}
              </h2>
            </div>
          </main>
          <main className="prueba container mx-auto mt-5 md:-20 p-5 md: flex md:justify-center">
            <h1 className="text-5xl inline bg-gradient-to-r from-indigo-200">
              BIENVENIDOS LAVANDERIA SAN CRISTOBAL
            </h1>
          </main>
          <div class="grid grid-cols-3 gap-3 bg-indigo-200">
            <div className="PRUEBA indent-8 text-center text-blue-950 text-1xl">
              <p className="text-center font-bold"> HORARIO DE ATENCIÓN</p>
              <p className="text-center">Sucursales Físicas</p>
              <p>
                Lunes a Viernes: 8am - 7pm Sábados: 8am - 6pm **Sede Colina
                8am-6pm**
              </p>
              <p className="text-center font-bold">Domicilios (Delivery)</p>
              <p>Lunes a Sábado: 8am - 6pm Manejamos bloques de 2 horas</p>
            </div>
            <div className="PRUEBA">
              <p class="indent-8 text-center font-bold text-blue-950 text-1xl ">
                ⚡ TIEMPOS DE ENTREGA ⏱️
              </p>
              <p className="text-center">
                - Entrega NORMAL 48 a 96 horas** según lo enviado SIN RECARGO -
                Entrega EXPRESS SIGUIENTE DÍA** con recargo adicional de $20mil
                ⚡ - Entrega EXTRA RÁPIDO MISMO DÍA* / Same Day, con recargo
                adicional de $20mil a 30mil según cantidad, tipo de artículo y
                ubicación ⚡ *Aplica para ordenes agendadas desde el día
                anterior o antes de las 10:00am del mismo día **Horas de días
                laborales (Lunes a Sábado)
              </p>
            </div>
            <div className="PRUEBA">
              <p class="indent-8 text-center text-blue-950 text-1xl font-bold ">
                MÉTODOS DE PAGO
              </p>

              <p className="text-center">
                - Recibimos EFECTIVO, Transferencias NEQUI, BANCOLOMBIA,
                DAVIVIENDA, COLPATRIA - Nuestros domiciliarios cuentan con
                DATÁFONO, o también podemos enviar enlace para PAGO EN LÍNEA con
                tarjeta o PSE, para ordenes mayores a $20.000 o $30.000 de
                acuerdo al sector.
              </p>
            </div>
          </div>
          <main className="prueba container mx-auto mt-5 md:-20 p-5 md: flex md:justify-center">
            <h1 className="text-4xl inline bg-gradient-to-r from-indigo-200">
              NUESTROS SERVICIOS
            </h1>
          </main>
          <div class="grid grid-cols-3 gap-3">
            <div className="card card-success shadow-lg rounded-lg outline outline-2 border-blue-700">
              <div className="prueba4 bg-center">
                <div class="elementor-image-box-wrapper">
                  <figure class="elementor-image-box-img">
                    <img
                      decoding="center"
                      loading="lazy"
                      width="150"
                      height="150"
                      src="https://th.bing.com/th/id/R.9fec56e37aa6e2f9e60993c58de9dfb0?rik=X15nfnUpOqrSwA&pid=ImgRaw&r=0"
                      class="attachment-full size-full wp-image-78"
                      alt="ropa planchada"
                    ></img>
                  </figure>
                  <div>
                    <p class="indent-8 text-center text-blue-950 text-3xl font-bold ">
                      Lavado de prendas - Lavaseco
                    </p>
                    <p class="text-center">
                      Lavamos todas tus prendas en seco, sistema de lavado
                      tradicional optimo para prendas delicadas y con forro.
                      Revisa la marquilla de tu ropa y si esta tiene una P tu
                      prenda se debe lavar en seco.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-success shadow-lg rounded-lg outline outline-2 border-blue-700">
              <div class="elementor-widget-wrap elementor-element-populated">
                <div
                  class="elementor-element elementor-element-b15320a elementor-position-top elementor-widget elementor-widget-image-box"
                  data-id="b15320a"
                  data-element_type="widget"
                  data-widget_type="image-box.default"
                >
                  <div class="elementor-widget-container">
                    <div class="elementor-image-box-wrapper">
                      <figure class="elementor-image-box-img">
                        <img
                          decoding="center"
                          loading="lazy"
                          width="150"
                          height="150"
                          src="https://www.lalavanderia.com.co/wp-content/uploads/2021/06/plancha.jpg"
                          class="attachment-full size-full wp-image-78"
                          alt="ropa planchada"
                        ></img>
                      </figure>
                      <div class="elementor-image-box-content">
                        <h2 class="indent-8 text-center text-blue-950 text-3xl font-bold">
                          Planchado
                        </h2>
                        <p class="elementor-image-box-description">
                          Se plancha cualquier tipo de prenda en dos modalidades
                          de servicio. - Planchado por unidad: El usuario nos
                          informa la prenda de la bolsa que quiere que le
                          planchemos. - Planchado de toda la bolsa: Se planchan
                          todas las prendas que vienen en la bolsa.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-success shadow-lg rounded-lg outline outline-2 border-blue-700">
              <div
                class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-3b9fec0"
                data-id="3b9fec0"
                data-element_type="column"
              >
                <div class="elementor-widget-wrap elementor-element-populated">
                  <div
                    class="elementor-element elementor-element-0c679ae elementor-position-top elementor-widget elementor-widget-image-box"
                    data-id="0c679ae"
                    data-element_type="widget"
                    data-widget_type="image-box.default"
                  >
                    <div class="elementor-widget-container">
                      <div class="elementor-image-box-wrapper">
                        <figure class="elementor-image-box-img">
                          <img
                            decoding="async"
                            loading="lazy"
                            width="150"
                            height="150"
                            src="https://www.lalavanderia.com.co/wp-content/uploads/2021/06/ropacama.jpg"
                            class="attachment-full size-full wp-image-97"
                            alt="lavado sabanas"
                          ></img>
                        </figure>
                        <div class="elementor-image-box-content">
                          <h2 class="indent-8 text-center text-blue-950 text-3xl font-bold">
                            Ropa de cama
                          </h2>
                          <p class="elementor-image-box-description">
                            Se lavan cubre lechos, cobijas, sabanas, sobre
                            colchones, almohadas, cojines, prendas muy delicadas
                            que requieran lavado y esterilización que preserven
                            la prenda y te generen la mejor sensación al
                            acostarte.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-3 gap-3">
            <div></div>
            <div className="card card-success shadow-lg rounded-lg outline outline-2 border-blue-700">
              <div
                class="elementor-element elementor-element-6b45064 elementor-position-top elementor-widget elementor-widget-image-box"
                data-id="6b45064"
                data-element_type="widget"
                data-widget_type="image-box.default"
              >
                <div class="elementor-widget-container">
                  <div class="elementor-image-box-wrapper center">
                    <figure class="elementor-image-box-img">
                      <img
                        background-size="center"
                        decoding="center"
                        loading="center"
                        width="150"
                        height="150"
                        src="https://www.lalavanderia.com.co/wp-content/uploads/2021/06/Tapetes.jpg"
                        class="attachment-full size-full wp-image-98"
                        alt=""
                      ></img>
                    </figure>
                    <div class="elementor-image-box-content img-center">
                      <h2 class="indent-8 text-center text-blue-950 text-3xl font-bold">
                        Tapetes
                      </h2>
                      <p class="elementor-image-box-description">
                        Lavamos tus tapetes generando la mejor higienización,
                        ten la medida de tu tapete para poder cotizar con
                        exactitud.{" "}
                      </p>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
          <main className="prueba container mx-auto mt-5 md:-20 p-5 md: flex md:justify-center">
            <h1 className="text-4xl inline bg-gradient-to-r from-indigo-200">
              LISTA DE PRECIOS
            </h1>
          </main>
          <div class="grid grid-cols-3 gap-3">
            <div className="card card-success shadow-lg rounded-lg outline outline-2 border-blue-700">
                  <div class="elementor-image-box-wrapper">
                    <div class="elementor-image-box-content">
                      <h2 class="indent-8 text-center text-blue-950 text-3xl font-bol">
                        Lavado y planchado por prendas</h2>
                </div>
                <tbody>
                  <tr>
                                    <td>
                                        <h1 class="indent-8 text-center text-blue-950 text-1xl font-bold">Pantalón, bermudas, pantalonetas o similares</h1>
                                    </td>
                                    <td><div class="progress progress-xs"><div class="progress-bar bg-warning"></div></div>
                                    </td>
                                    <td><span class="indent-8 text-center text-blue-950 text-1xl font-bold">$4.500</span></td>
                                </tr>
                                <tr>
                                <td>
                                    <h1 class="indent-8 text-center text-blue-950 text-1xl font-bold">Camisa, blusa, polos, camisetas o similares</h1>
                                </td>
                                <td><div class="progress progress-xs"><div class="progress-bar bg-warning"></div></div>
                                </td>
                                <td><span class="indent-8 text-center text-blue-950 text-1xl font-bold">$4.500</span></td>
                                </tr>
                                <tr>
                                 <td>
                                    <h1 class="indent-8 text-center text-blue-950 text-1xl font-bold">Falda corta (hasta la rodilla)</h1>
                                </td>
                                <td><div class="progress progress-xs"><div class="progress-bar bg-warning"></div></div>
                                </td>
                                <td><span class="indent-8 text-center text-blue-950 text-1xl font-bold">$4.500</span></td>
                                </tr>
                                <tr>
                                 <td>
                                    <h1 class="indent-8 text-center text-blue-950 text-1xl font-bold">Falda larga (de la rodilla hacia abajo)</h1>
                                </td>
                                <td><div class="progress progress-xs"><div class="progress-bar bg-warning"></div></div>
                                </td>
                                <td><span class="indent-8 text-center text-blue-950 text-1xl font-bold">$4.500</span></td>
                                </tr>
                                <tr><td><h1 class="indent-8 text-center text-blue-950 text-1xl font-bold">Saco, suéter o buzo</h1></td>
                                <td><div class="progress progress-xs"><div class="progress-bar bg-warning"></div></div></td>
                                <td><span class="indent-8 text-center text-blue-950 text-1xl font-bold">$4.500</span></td>
                                </tr>
                                <tr><td><h1 class="indent-8 text-center text-blue-950 text-1xl font-bold">Vestido mujer corto (hasta la rodilla)</h1></td>
                                <td><div class="progress progress-xs"><div class="progress-bar bg-warning"></div></div></td>
                                <td><span class="indent-8 text-center text-blue-950 text-1xl font-bold">$4.500</span></td>
                                </tr>
                                <tr><td><h1 class="indent-8 text-center text-blue-950 text-1xl font-bold">Vestido mujer largo (de la rodilla hacia abajo)</h1></td>
                                <td><div class="progress progress-xs"><div class="progress-bar bg-warning"></div></div></td>
                                <td><span class="indent-8 text-center text-blue-950 text-1xl font-bold">$9.500</span></td>
                                </tr>
                                <tr><td><h1 class="indent-8 text-center text-blue-950 text-1xl font-bold">Vestido coctel pedrería o lentejuelas</h1></td>
                                <td><div class="progress progress-xs"><div class="progress-bar bg-warning"></div></div></td>
                                <td><span class="indent-8 text-center text-blue-950 text-1xl font-bold">$10.500</span></td>
                                </tr>
                                <tr><td><h1 class="indent-8 text-center text-blue-950 text-1xl font-bold">Trajes, sastres o dos piezas</h1></td>
                                <td><div class="progress progress-xs"><div class="progress-bar bg-warning"></div></div></td>
                                <td><span class="indent-8 text-center text-blue-950 text-1xl font-bold">$9.000</span></td>
                                </tr>
                                <tr><td><h1 class="indent-8 text-center text-blue-950 text-1xl font-bold">Chaqueta sencilla (blazer, delgadas)</h1></td>
                                <td><div class="progress progress-xs"><div class="progress-bar bg-warning"></div></div></td>
                                <td><span class="indent-8 text-center text-blue-950 text-1xl font-bold">$5.500</span></td>
                                </tr>
                                <tr><td><h1 class="indent-8 text-center text-blue-950 text-1xl font-bold">Chaqueta mediana (abollonada, ovejera</h1></td>
                                <td><div class="progress progress-xs"><div class="progress-bar bg-warning"></div></div></td>
                                <td><span class="indent-8 text-center text-blue-950 text-1xl font-bold">$7.000</span></td>
                                </tr>
                                <tr><td><h1 class="indent-8 text-center text-blue-950 text-1xl font-bold">Chaqueta grande (gruesa, plumas, pelo, cuerina, gamusol)</h1></td>
                                <td><div class="progress progress-xs"><div class="progress-bar bg-warning"></div></div></td>
                                <td><span class="indent-8 text-center text-blue-950 text-1xl font-bold">$9.000</span></td>
                                </tr>
                                <tr><td><h1 class="indent-8 text-center text-blue-950 text-1xl font-bold">Chaqueta de cuero (lavado</h1></td>
                                <td><div class="progress progress-xs"><div class="progress-bar bg-warning"></div></div></td>
                                <td><span class="indent-8 text-center text-blue-950 text-1xl font-bold">$15.000</span></td>
                                </tr>
                                <tr><td><h1 class="indent-8 text-center text-blue-950 text-1xl font-bold">Chaqueta de cuero (lavado + restaurado)</h1></td>
                                <td><div class="progress progress-xs"><div class="progress-bar bg-warning"></div></div></td>
                                <td><span class="indent-8 text-center text-blue-950 text-1xl font-bold">$30.000</span></td>
                                </tr>
                                <tr><td><h1 class="indent-8 text-center text-blue-950 text-1xl font-bold">Zapatillas o morrales</h1></td>
                                <td><div class="progress progress-xs"><div class="progress-bar bg-warning"></div></div></td>
                                <td><span class="indent-8 text-center text-blue-950 text-1xl font-bold">$10.500</span></td>
                                </tr>
                                <tr><td><h1 class="indent-8 text-center text-blue-950 text-1xl font-bold">Vestido coctel pedrería o lentejuelas</h1></td>
                                <td><div class="progress progress-xs"><div class="progress-bar bg-warning"></div></div></td>
                                <td><span class="indent-8 text-center text-blue-950 text-1xl font-bold">$10.500</span></td>
                                </tr>
                                <tr><td><h1 class="indent-8 text-center text-blue-950 text-1xl font-bold">Vestido coctel pedrería o lentejuelas</h1></td>
                                <td><div class="progress progress-xs"><div class="progress-bar bg-warning"></div></div></td>
                                <td><span class="indent-8 text-center text-blue-950 text-1xl font-bold">$10.500</span></td>
                                </tr>
                                <tr><td><h1 class="indent-8 text-center text-blue-950 text-1xl font-bold">Tintura (pantalón, camisa, chaqueta corta)</h1></td>
                                <td><div class="progress progress-xs"><div class="progress-bar bg-warning"></div></div></td>
                                <td><span class="indent-8 text-center text-blue-950 text-1xl font-bold">$15.500</span></td>
                                </tr>
                  <tr>
                    <td></td>
                    <td>Fix and squish bugs</td>
                    <td></td>
                  </tr>
                </tbody>
            </div>
        </div>
         <div className="medio"></div>
             <div className="card card-success shadow-lg rounded-lg outline outline-2 border-blue-700">
                  <div class="elementor-image-box-wrapper">
                     <div class="elementor-image-box-content">
                      <h2 class="indent-8 text-center text-blue-950 text-3xl font-bol">
                        Ropa de cama</h2>
                
                <tbody>
                  <tr>
                                    <td>
                                        <h1 class="indent-8 text-center text-blue-950 text-1xl font-bold">Cobija, cubre lecho, edredón doble o sencillo (hasta 2 metros</h1>
                                    </td>
                                    <td><div class="progress progress-xs"><div class="progress-bar bg-warning"></div></div>
                                    </td>
                                    <td><span class="indent-8 text-center text-blue-950 text-1xl font-bold">$30.000</span></td>
                                </tr>
                                <tr>
                                <td>
                                    <h1 class="indent-8 text-center text-blue-950 text-1xl font-bold">Cobija, cubre lecho, edredón Queen o King (mas de 2 metros</h1>
                                </td>
                                <td><div class="progress progress-xs"><div class="progress-bar bg-warning"></div></div>
                                </td>
                                <td><span class="indent-8 text-center text-blue-950 text-1xl font-bold">$35.000</span></td>
                                </tr>
                                <tr>
                                 <td>
                                    <h1 class="indent-8 text-center text-blue-950 text-1xl font-bold">Cubre lecho o cobija plumas</h1>
                                </td>
                                <td><div class="progress progress-xs"><div class="progress-bar bg-warning"></div></div>
                                </td>
                                <td><span class="indent-8 text-center text-blue-950 text-1xl font-bold">$35.000</span></td>
                                </tr>
                                <tr>
                                 <td>
                                    <h1 class="indent-8 text-center text-blue-950 text-1xl font-bold">Mantas</h1>
                                </td>
                                <td><div class="progress progress-xs"><div class="progress-bar bg-warning"></div></div>
                                </td>
                                <td><span class="indent-8 text-center text-blue-950 text-1xl font-bold">$20.000</span></td>
                                </tr>
                                <tr><td><h1 class="indent-8 text-center text-blue-950 text-1xl font-bold">Juego de sabanas o duvet (sin planchar)</h1></td>
                                <td><div class="progress progress-xs"><div class="progress-bar bg-warning"></div></div></td>
                                <td><span class="indent-8 text-center text-blue-950 text-1xl font-bold">$15.000</span></td>
                                </tr>
                                <tr><td><h1 class="indent-8 text-center text-blue-950 text-1xl font-bold">Juego de sabanas o duvet (planchado)</h1></td>
                                <td><div class="progress progress-xs"><div class="progress-bar bg-warning"></div></div></td>
                                <td><span class="indent-8 text-center text-blue-950 text-1xl font-bold">$16.500</span></td>
                                </tr>
                                <tr><td><h1 class="indent-8 text-center text-blue-950 text-1xl font-bold">Almohada</h1></td>
                                <td><div class="progress progress-xs"><div class="progress-bar bg-warning"></div></div></td>
                                <td><span class="indent-8 text-center text-blue-950 text-1xl font-bold">$9.500</span></td>
                                </tr>
                                
                  <tr>
                    <td></td>
                    <td>Fix and squish bugs</td>
                    <td></td>
                  </tr>
                </tbody>    
                </div> 
                
                     <div class="elementor-image-box-content">
                      <h2 class="indent-8 text-center text-blue-950 text-3xl font-bol">
                        Ropa de cama</h2>
                
                </div>
              </div>
              </div>
              
              
      </div>
      </div>
      
    );
};

export default admin;
