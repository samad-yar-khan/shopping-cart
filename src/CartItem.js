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
                            src='https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1616931622~hmac=30486315acdb65fc85315855d8b97306' 
                            onClick = {()=>{increaseQuantity(product)}}
                            // onClick = {this.increaseQuantity.bind(this)} //method 1 bind the  this while passing a value of a func to an event llistner oor even anotehr variable so it can use the this of the linked object
                        />
                        <img 
                            alt = 'decrease' 
                            className='action-icons' 
                            src='https://www.flaticon.com/svg/vstatic/svg/659/659892.svg?token=exp=1616931664~hmac=95e2192a64272e2edef684867352939e' 
                            onClick = {()=>{ dicreaseQuantity(product)}}
                        />
                        <img 
                            alt = 'delete' 
                            className='action-icons' 
                            src='https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1616931704~hmac=0195b9f432ada021e512fa4072c7f4e3' 
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