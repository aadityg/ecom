import React from "react";
import './Home.css';
import Product from "./Product";

export default function Home(){
    return (
        <div className='home'>
            <div className='home-container'>
            <img className='image' src="https://th.bing.com/th/id/R.09c097211d4d5acc508a35756f5a12ec?rik=9jAzaQh8efgtjw&riu=http%3a%2f%2fwbbands.info%2fwp-content%2fuploads%2f2014%2f09%2famazon-smile-banner.jpg&ehk=vwHBwSdNayH9EAMAtn1o3XVcm8L%2fAK7nfq2jtKhrBV0%3d&risl=&pid=ImgRaw" alt=""/>
            </div>
            <div className='home-row'>
                <Product 
                title="new book" 
                price={20} 
                image="https://m.media-amazon.com/images/I/410llGwMZGL._AC_SY200_.jpg"
                rating={4}/>
                <Product/>
                
            </div>
            <div className='home-row'>
                <Product/>
                <Product/>
                <Product/>
            </div>
            <div className='home-row'>
                <Product/>
               
            </div>
        </div>
    )
}