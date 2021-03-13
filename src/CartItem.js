import React from 'react' 

class CartItem extends React.Component{

    constructor(){
        super(); //must call parents constructor first 
        this.state = {
            title : 'phone',
            price : 1000 ,
            qty : 2
        }
    }

    render(){
        let {title , price , qty } = this.state;  //object destructuring 
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
                        <img alt = 'increase' className='action-icons' src='https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1615675046~hmac=2d2f91b997c9e9b9aeb360cd97be5a15' />
                        <img alt = 'decrease' className='action-icons' src='https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1615675079~hmac=f06388951cb8573d4347487043540fe7' />
                        <img alt = 'delete' className='action-icons' src='https://www.flaticon.com/svg/vstatic/svg/3096/3096673.svg?token=exp=1615674957~hmac=771ac488c89fe34832cff287246beab1' />

                    
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
        height : 120 ,  
        width : 120 , 
        borderRadius : 10,
        backgroundColor : 'grey'
    }
}
export default CartItem;