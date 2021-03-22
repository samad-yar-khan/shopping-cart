import React from 'react' 

const CartItem  = (props)=>{


        let {title , price , qty,id } = props.product;  //object destructuring 
        let {product , 
            increaseQuantity , 
            dicreaseQuantity , 
            deleteItem} = props;
        // console.log("render");
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} />
                </div>
                 <div className='right-block'>
                    <div style = { { fontSize : 25 } }>{title}</div>
                    <div style = { { color : '#777' } }>Rs {price}</div>
                    <div style = { { color : '#777' } }>QTY {qty}</div>
                    <div className='cart-item-actions'>
                        {/* Buttons */}
                        <img 
                           
                           alt = 'increase' 
                            className='action-icons' 
                            src='https://www.flaticon.com/svg/vstatic/svg/1828/1828926.svg?token=exp=1616429613~hmac=30c02061f4cb06489fc0530ab432e73e' 
                            onClick = {()=>{increaseQuantity(product)}}
                            // onClick = {this.increaseQuantity.bind(this)} //method 1 bind the  this while passing a value of a func to an event llistner oor even anotehr variable so it can use the this of the linked object
                        />
                        <img 
                            alt = 'decrease' 
                            className='action-icons' 
                            src='https://www.flaticon.com/svg/vstatic/svg/1828/1828906.svg?token=exp=1616429578~hmac=4530135522df9c0e6957869493765ae0' 
                            onClick = {()=>{ dicreaseQuantity(product)}}
                        />
                        <img 
                            alt = 'delete' 
                            className='action-icons' 
                            src='https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1616429139~hmac=e8a9d3f99cb1df05040abfed68510646' 
                            onClick = {()=>{ deleteItem(product.id)}}
                        />

                    
                    </div>
                </div>
            </div>
        )
    
}

//we must export the ccomponent and import it in our app file 
//we cant add style like normal html so we do it by creating object

const styles = {
    image : {
        height : 120 ,  
        width : 120 , 
        borderRadius : 10,
        backgroundColor : 'grey'
    }
}
export default CartItem;