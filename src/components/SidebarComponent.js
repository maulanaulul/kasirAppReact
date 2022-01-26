import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Component } from "react";

export default class SidebarComponent extends Component {
  render() {
    const { changeCategory } = this.props;
    function setstate(){
      console.log("hello")
    }

    return (

        <>
          {/* <!-- Sidebar --> */}
          <div className="col-12 col-md-1 main-sidebar d-flex flex-column">
            <div className="sidebar detil mt-4  d-flex justify-content-center align-item-center">
              <img
                className="img-fluid"
                src="./img/Cashier APP.png"
                alt="imageCashier"
              />
            </div>

            <div
              className="sidebar detil mt-5 d-flex flex-column justify-content-center align-item-center active"
              onClick={() => changeCategory("all")
              
              }
              
            >
              <div className="icon mx-auto mt-3 ">
                <ion-icon className="text-center mx-auto" name="home">
                  {" "}
                </ion-icon>
              </div>
              <div className="icon-prop text-center">
                <p className=" mx-auto">Home</p>
              </div>
            </div>

            <div
              className="sidebar detil mt-4 d-flex flex-column justify-content-center align-item-center "
              onClick={() => changeCategory("makanan")}
            >
              <div className="icon mx-auto mt-3 ">
                <ion-icon className="text-center mx-auto" name="fast-food">
                  {" "}
                </ion-icon>
              </div>
              <div className="icon-prop text-center">
                <p className=" mx-auto">Food</p>
              </div>
            </div>

            <div
              className="sidebar detil mt-4 d-flex flex-column justify-content-center align-item-center "
              onClick={() => changeCategory("minuman")}
            >
              <div className="icon mx-auto mt-3 ">
                <ion-icon className="text-center mx-auto" name="beer">
                  {" "}
                </ion-icon>
              </div>
              <div className="icon-prop text-center">
                <p className=" mx-auto">Drink</p>
              </div>
            </div>
          </div>
        </>
     
    );
  }
}
