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

    handleIncreaseQuantity = (product)=>{

        let {products} = this.state;
        let index = products.indexOf(product);
        // console.log(product);
        products[index].qty+=1;

        this.setState({
            products:products
        });

    }

    handleDicreaseQuantity = (product)=>{

        let {products} = this.state;
        let index = products.indexOf(product);
        // console.log(product);
       if(products[index].qty > 0){
           products[index].qty -=1;
           this.setState({
            products:products
        });
       }
       return;
    }
    
    render(){

        const {products} = this.state;
        return(

        <div className="cart">
            
            {products.map((product)=>{
                return  <CartItem 
                            product={product} 
                            key={product.id} 
                            increaseQuantity = {this.handleIncreaseQuantity}
                            dicreaseQuantity = {this.handleDicreaseQuantity}
                        />
            })}
      
        </div>
        )
    }

}

export default Cart;
//each elemnt created shoud have a unique ideniification key so react can differntiate beetweem two produts easiity