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
                },
                {
                    title : 'Laptop',
                    price : 200000 ,
                    qty : 0
                }, {
                    title : 'Pen',
                    price : 10 ,
                    qty : 0
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
                return  <CartItem product={product} />
            })}
         
           
            
        </div>
        )
    }z

}

export default Cart;