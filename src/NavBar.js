import React from 'react'


//this is a functional component and it doesnt have a state soo instad of making it a class , we just make it a fucntion

const NavBar = (props) => {

        return(
            <div style={styles.nav} >
                <div style={styles.cartIconContainer}>
                    < img 
                        style ={styles.cartIcon}
                        src="https://www.flaticon.com/svg/vstatic/svg/1170/1170678.svg?token=exp=1617661496~hmac=3df2afd3fe8db0ec904d73dd416d9c8c"
                        alt="cart-icon"
                    />
                    <span style={styles.cartCount}>
                        {props.count}
                    </span>
                </div>
            </div>
        )

}


const styles = {
    cartIcon: {
      height: 32,
      marginRight: 25
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'white',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 4,
      top: -9
    }
  };
  

export default NavBar;
//each elemnt created shoud have a unique ideniification key so react can differntiate beetweem two produts easiity