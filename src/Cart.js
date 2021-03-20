import React from 'react'
import CartItem from './CartItem'


class Cart extends React.Component{

    constructor(){
        super(); //must call parents constructor first 
        this.state = {
            
            products : [//array of products
                {
                    title : 'Phone',
                    price : 10000 ,
                    qty : 0,
                    id : 1
                },
                {
                    title : 'Laptop',
                    price : 200000 ,
                    qty : 0,
                    id : 2
                }, {
                    title : 'Pen',
                    price : 10 ,
                    qty : 0,
                    id : 3
                }
                
            ]
            
        }


        //method 2 , we bind our functions to this (otherwise their 'this' value wull be uundefined when they are assigned to an event listenr or aany other var)
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    
    render(){

        const {products} = this.state;
       
        return(

        

        <div className="cart">
            
            {products.map((product)=>{
                return  <CartItem product={product} key={product.id} />
            })}
         
           
            
        </div>
        )
    }z

}

export default Cart;
//each elemnt created shoud have a unique ideniification key so react can differntiate beetweem two produts easiity