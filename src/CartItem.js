import React from 'react' 

class CartItem extends React.Component{

    render(){
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} />
                </div>
                 <div className='right-block'>
                    <div style = { { fontSize : 25 } }>Phone</div>
                    <div style = { { color : '#777' } }>Rs 10000</div>
                    <div style = { { color : '#777' } }>QTY : 2</div>
                    <div className='cart-item-actions'>
                        {/* Buttons */}
                    </div>
                </div>
            </div>
        )
    }

}

//we must export the ccomponent and import it in our app file 
//we cant add style like normal html so we do it by creating object

const styles = {
    image : {
        height : 110 ,  
        width : 110 , 
        borderRadius : 10,
        backgroundColor : 'grey'
    }
}
export default CartItem;