import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function CheckoutComponent() {
    return (
        <>
            {/* <!-- Checout --> */}
            <div className="col-12 checkout col-md-3 d-flex shadow justify-content-center align-item-center">
                <div className="inner-checkout ">
                    <div className="inner-admin">
                        <div className="admin-img">
                            <ion-icon name="person"></ion-icon>
                        </div>
                        <div className="admin-text">
                            <h5>Welcome, Admin!</h5>
                            <p>There are product is ready</p>
                        </div>
                    </div>

                    <h4>Checkout Product</h4>

                    <div className="blank-product mt-5">
                        <img className="img-fluid" src="./img/undraw_save_to_bookmarks_re_8ajf (2).svg" alt=""/>
                        <p className="mt-3 text-secondary text-center">There is no product ready to checkout!</p>
                    </div>
                </div>
            </div>
            </>

        
    
    )
}

export default CheckoutComponent
