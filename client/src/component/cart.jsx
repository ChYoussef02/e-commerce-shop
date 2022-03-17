import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import {del} from '../redux/action/cartActions' 
import {addCart} from '../redux/action/cartActions'

const  Cart = () => {
    const state  = useSelector((state) => state.handleCart)
    const dispatch = useDispatch()
    const handleClose = (product) => {
        dispatch(del(product))
    }
    const addProduct = (product) => {
        dispatch(addCart(product));
    }
    const cartProducts = (product) =>{
    return (
        <div>
            <div className="px-4 my-5  rounded-3" key={product.id}>
                <div className="container py-4">
                     <div className="row">
                         <div className="col-md-4">
                             <img src={product.image} alt={product.title} 
                             height="200px" width="180px"/>
                         </div>
                         <div className="col-md-4">
                             <h3>{product.title}</h3>
                             <p className="lead fw-bold">
                                 {product.qty} X ${product.price} = ${product.qty * product.price}          
                             </p>
                             <button className="btn btn-outline-dark me-4"
                             onClick={()=> handleClose(product)}>
                                 <i className="fa fa-minus"></i>
                             </button>
                             <button className="btn btn-outline-dark"
                             onClick={()=> addProduct(product)}
                             > <i className="fa fa-plus"></i>
                             </button>
                         </div>
                     </div>
                 </div>
            </div>
        </div>
    )
    }
    
    const emptyCart = () => {

        
        return(
       <div className="px-4 my-5  py-5 ">
        <div className="container py-4">
            <div className="row">
                <h3>
                    Your cart is empty
                </h3>
            </div>
        </div>
       </div>
        );
    }
    
    const button = () => {

        return (
<div className="container">
    <div className="row">
        <Link to='/checkout' className="btn btn-outline-dark me-4">
          Proceed To checkout
        </Link>
    </div>
</div>
        );
    }
    
    return (
        <>
          {state.length === 0 && emptyCart()} 
          {state.length !== 0 && state.map(cartProducts)}
          {state.length !== 0 && button()}

        </>
    )

}
export default Cart
