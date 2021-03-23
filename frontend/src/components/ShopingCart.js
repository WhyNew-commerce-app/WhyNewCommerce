import React, {useState, useEffect, useContext} from 'react';
import actions from '../api';
import {CartContext} from './CartContext';
import './ShoppingCart.css'
// import {shoppingCart} from './storeFrontDesk';   
function ShopingCart(props) {

    // const addToCart = (item) => {
    //     actions.addItemtoCart(item)
    // }
    // const removeFromCart = () => {}

    const showItems =()=>{
        // props.ShopingCart
        let itemsToBuy = props.shoppingCart
        return itemsToBuy.map(eachE => {
            return(

                <div className="check-out-items" key={eachE._id}>
                    <img src={eachE.image_url} alt='picture'/>
                    <h5>{eachE.item}</h5>
                    <div style={{textJustify:'left'}}><p>${eachE.price}</p></div>
                    <div style={{display:'flex'}}>
                    <p> Qty: 1 </p>
                    {/* <button onClick={(e) => addToCart(eachE._id)} > + </button>
                    <button onClick={(e) => removeFromCart(eachE)} > - </button> */}
                    </div>
                    <p>Total:{1*eachE.price}</p>
                </div>
            )
        })
    }

    const totalCost =()=>{
        let itemsInShoppingCart = props.shoppingCart
        return itemsInShoppingCart.reduce((acc, curr) => (curr.price, acc) ,0)
    }

    return (
        <div style={{display:'flex'}}>
            <div  className="ShoppingCart-main">


            {showItems()}

       
            </div>  
            <div className='check-out-final'>
                    <div style={{ width:'23vw'}}>
                        <h5 className="positionCenter">Grand Total: ${totalCost()}</h5>                  
                    </div>
                    <button className="buy-btn-final">Proceed to check out</button>
            </div>

        </div>
    );

}

export default ShopingCart;