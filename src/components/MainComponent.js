import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NumberCommas } from "../utils/NumberCommas"; 

 
 const MainComponent = ({menus}) => {
     return (
        <>
        {/* <!-- Main --> */}
        <div className="col-12 col-md-8 bg-light">
          <div className="main">
            <div className="header d-flex mt-5 justify-content-between">
              <h3 className="">Choose Product</h3>
              <input
                type="text"
                className="shadow"
                placeholder="Search product name..."
              />
            </div>

            <div className="item">
              <div className="row mt-5">


                {menus &&
                  menus.map((menu) => (
                    <div className="col-md-4 p-3">
                      <div className="item-detil item-detil shadow ">
                        <h5 className="text-center">{menu.nama}</h5>
                        <p className="text-center">Rp. {NumberCommas(menu.harga)}</p>
                        <div className="item-img">
                          <img
                            className="img-fluid "
                            src={"./img/"+menu.category.nama.toLowerCase()+"/"+menu.gambar}
                            alt="itemimage"
                          />
                        </div>

                        <div className="detil-button d-flex justify-content-center">
                          <button className="mt-3">Add to Cart</button>
                        </div>
                      </div>
                    </div>
                  ))}



              </div>
            </div>
          </div>
        </div>
      </>
     )
 }
 
 export default MainComponent
 
