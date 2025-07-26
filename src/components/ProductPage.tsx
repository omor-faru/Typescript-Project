import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
    images: string[]



}

const ProductPage = () => {
const {id} = useParams<{id: string}>()
const navigate = useNavigate()
const [product, setProduct] = useState<Product | null>(null)
                       

useEffect(() => {
     if (id) {
        axios.get<Product>(`https://dummyjson.com/products/${id}`).then((Response) => {
            setProduct(Response.data)
        }).catch((error) => {
            console.error(`Error fatching product data: ${error}`)

        })
     }                                                                                                                                                                                   
}, [id])


if (!product) {
    return <h1>Loading....</h1>
    
}


  return (
    <div className="p-5 w-[60%]">
        <button onClick={() => navigate(-1)} className="mb-5 px-4 py-2 bg-black text-white rounded ">
            Back
        </button>
      <img src={product.images[0]} alt={product.title} className="w-[50%] h-auto mb-5 " />

      <h1 className="text-3xl mb-4 font-bold">{product.title}</h1>
      <p className="mb-5 text-gray-800 w-[70%] font-semibold text-xl">{product.description}</p>
      <div className="flex">
        <p className="font-semibold ">Price: ${product.price}</p>
        <p className="ml-10 font-semibold"> Rating: {product.rating}</p>
      </div>
    </div>
  )
}

export default ProductPage
