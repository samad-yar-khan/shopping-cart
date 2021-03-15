import React from 'react' 

class CartItem extends React.Component{

    constructor(){
        super(); //must call parents constructor first 
        this.state = {
            title : 'phone',
            price : 1000 ,
            qty : 2
        }

        //method 2 , we bind our functions to this (otherwise their 'this' value wull be uundefined when they are assigned to an event listenr or aany other var)
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    //here we used arrow dunction because they dont have  theri own binding to this and use this of the object which are linked to
    //if we used simple functions then we would have needed to bind them to this while assigning iit to the event listener
    //for case 1 and 2
    // increaseQuantity = function(){
    //     console.log(this); //this 'this' will be undefined unless we bind it at the time of assignin to event listtener or assign it in the constructor

    // } 
    //case 3 best , use arrow func in class t share this
    increaseQuantity = ()=>{

        //method1
        
        //if we just do this.state.qty++ it will just manipulate the tate oobject but wont actially change anything fo the component
        //so to re rednder the component we us setState function to make changes
        //what we do here is we pass an object to the set state functiona and based on the passed 
        //object it performs shallow merging on the state , i.e. merge the changes to the qty only and not the whole state
        //we use this method when we dont need the previos state
        
        // this.setState({
        //     qty : this.state.qty+1    
        // })
        
        //method 2 
        
        //here we passa function to the set state function and the argumnet will carry the previes state of the componente
        //this is to be used when we require the previoes state
        this.setState((prevState)=>{
            
            return {
                qty : prevState.qty + 1
            }

        })
      

    }

    dicreaseQuantity = ()=>{
        //method 
        
        // this.setState({
        //     qty : this.state.qty-1    
        // })
        
        //method 2

        this.setState((prevState)=>{

            if(prevState.qty < 1){
                return
            }
            
            return {
                    qty : prevState.qty - 1
            }

           

           
        })

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
                        <img 
                            alt = 'increase' 
                            className='action-icons' 
                            src='https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1615675046~hmac=2d2f91b997c9e9b9aeb360cd97be5a15' 
                            onClick = {this.increaseQuantity}
                            // onClick = {this.increaseQuantity.bind(this)} //method 1 bind the  this while passing a value of a func to an event llistner oor even anotehr variable so it can use the this of the linked object
                        />
                        <img 
                            alt = 'decrease' 
                            className='action-icons' 
                            src='https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1615675079~hmac=f06388951cb8573d4347487043540fe7' 
                            onClick = {this.dicreaseQuantity}
                        />
                        <img 
                            alt = 'delete' 
                            className='action-icons' 
                            src='https://www.flaticon.com/svg/vstatic/svg/3096/3096673.svg?token=exp=1615674957~hmac=771ac488c89fe34832cff287246beab1' 
                        />

                    
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