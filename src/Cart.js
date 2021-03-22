import React from 'react'
import CartItem from './CartItem'



const Cart = (props) => {

   
        let {products} = props.products;

        return(

        <div className="cart">
            
            {products.map((product)=>{
                return  <CartItem 
                            product={product} 
                            key={product.id} 
                            increaseQuantity = {props.increaseQuantity}
                            dicreaseQuantity = {props.dicreaseQuantity}
                            deleteItem = {props.deleteItem}
                        />
            })}
      
        </div>
        )
 

}

export default Cart;
//each elemnt created shoud have a unique ideniification key so react can differntiate beetweem two produts easiity