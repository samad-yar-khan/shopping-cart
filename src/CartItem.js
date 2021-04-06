import React from 'react' 

const CartItem  = (props)=>{


        let {img,title , price , qty,id } = props.product;  //object destructuring 
        let {product , 
            increaseQuantity , 
            dicreaseQuantity , 
            deleteItem} = props;
        // console.log("render");
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} src={img}/>
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
                            src='https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1617661529~hmac=be375a7178fb0f784c392fedadd63f81' 
                            onClick = {()=>{increaseQuantity(product)}}
                            // onClick = {this.increaseQuantity.bind(this)} //method 1 bind the  this while passing a value of a func to an event llistner oor even anotehr variable so it can use the this of the linked object
                        />
                        <img 
                            alt = 'decrease' 
                            className='action-icons' 
                            src='https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1617661407~hmac=03f5ac3429973fcbd73886d2bd2a600c' 
                            onClick = {()=>{ dicreaseQuantity(product)}}
                        />
                        <img 
                            alt = 'delete' 
                            className='action-icons' 
                            src='https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1617661451~hmac=89b47490d213dedccfdabf669e23fd58' 
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