import React from 'react'
import { useState , useEffect } from 'react';
import { Link ,useParams} from 'react-router-dom';
import { useDispatch} from 'react-redux' 
import {addCart} from '../redux/action/cartActions'
import Skeleton from 'react-loading-skeleton';

const Product = () => {
    const {id} = useParams();
    const [product,setProduct] = useState([]);
    const [loading,setLoading] = useState(false);
   
    const dispatch = useDispatch(); 
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    useEffect(()=>{
        const getProduct = async () => {
            setLoading(true) ;
            const response = await fetch(`https://fakestoreapi.com/products/${id}`); 
         
            setProduct( await response.json()) ;
            setLoading(false);
        }
        getProduct() ;

    },[])
    const Loading = () => {
        return (
            <>
            loading...
            <div className="col-md-6">
                <Skeleton heigth={400}/>
            </div>
            <div className="col-md-6" style={{lineHeight:2}}>
                <Skeleton heigth={50} width={300}/>
                <Skeleton heigth={75} />
                <Skeleton heigth={25} width={150} />
                <Skeleton  heigth={50} />
                <Skeleton height={150} />
                <Skeleton heigth={50} width={100} />
                <Skeleton heigth={50} width={100} style={{marginLeft:6}} />
            </div>
            </>
        )
    }
    const ShowProduct = () => {
       
        return (
            <>
           
            <div className="col-md-6" >
               <img src={product.image} alt={product.title}
               heigth="400px" width="400px" /> 
               
            </div>
            <div className="col-md-6">
                <h4 className="text-uppercase text-black-50">
                    {product.category}
                </h4>
                <h1 className="display-5" > {product.title}</h1>
                <p classname="lead fw-bolder">
                    Rating {product.rating && product.rating.rate }
                    <i className="fa fa-star"></i>
                </p>
                <h3 className="display-6 fw-bold my-4">
                    $ {product.price}
                    <p className="lead">{product.description}</p>
                </h3>
                <button className="btn btn-outline-dark px-4 py-2" onClick={()=> addProduct(product)}>
                    Add to Cart
                </button>
                <Link to="/cart" className="btn btn-outline-dark ms-2 px-3 py-2 ">
                    go to Cart
                </Link>
            </div>
            </>
        )
    }
    return (
        <div>
       <div className="container py-5">
           <div className="row py-4">
               {loading ?  <Loading/> : <ShowProduct/>}
           </div>
       </div>
        </div>
    )
}

export default Product
