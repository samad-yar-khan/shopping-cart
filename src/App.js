
import React from 'react' 
import Cart from './Cart'
import NavBar from './NavBar'
import firebase from 'firebase/app';

class App extends React.Component {

    constructor(){
      super(); //must call parents constructor first 
      this.state = {
          
          products : [],
          loading : true
          
      }
      this.db = firebase.firestore(); //we put this in the constrcutor because it will be used again and again to aceess the firestore

      //method 2 , we bind our functions to this (otherwise their 'this' value wull be uundefined when they are assigned to an event listenr or aany other var)
      // this.increaseQuantity = this.increaseQuantity.bind(this);
  }

  componentDidMount(){
    
    this.db
      .collection('products')
      .onSnapshot((snapshot)=>{
       
        
        //what we do now is that we fecth data from the firebase and set state here

        const products = snapshot.docs.map((doc)=>{

          let product = doc.data(); //will set all data for a product except the product id
          product['id'] = doc.id;

          return product;
        })

        this.setState({
          products :products,
          loading : false
        })
       
      })

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

  handleDeleteProduct = (id)=>{
      
      let {products} = this.state;
      let  items = products.filter((item)=> item.id !== id); //this will basically filter out all those items whose id is not equal to the id of the item to be deleted

      this.setState({
          products : items
      })
  }

  getCartCount=()=>{
    let { products } = this.state;
    let count = 0; 
    products.forEach((product)=>{
      count += product.qty;
    })

    return count;
  }

  getCartTotal=()=>{
    let { products } = this.state;
    let cost = 0; 
    products.forEach((product)=>{
      cost += product.qty*product.price;
    })

    return cost;
  }

  addProduct=()=>{

    this.db
      .collection('products')
      .add({ //add will returna  promise with ref to the addec document
        img : '',
        price :1000,
        qty : 1,
        title : "Washing Mashine"
      }).then((docRef)=>{
        console.log("NEW PRODUCT ADDED !" , docRef);
      }).catch((err)=>{
        console.log("ERROR ADDING NEW PRODUCT " , err);
      })

  }

    render(){

      const products  = this.state;

      return (
        <div className="App">
          <NavBar 
            count = {this.getCartCount()}
          />
          {/* <button style = {{padding:10 , fontSize:10 , backgroundColor:"blue"}} onClick={this.addProduct}>ADD PRODUCT</button> */}
          <Cart 
            products = {products}
            increaseQuantity = {this.handleIncreaseQuantity}
            dicreaseQuantity = {this.handleDicreaseQuantity}
            deleteItem = {this.handleDeleteProduct}
          />
          {this.state.loading && <h1>Loading....</h1>}
          <div>
            <h2 style = {{color:'blue' , marginLeft:10 , padding:5}}>CART TOTAL : {this.getCartTotal()}</h2>
          </div>          
        </div>
       
      );
      }
  }

export default App;
