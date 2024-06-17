import React, {useState} from "react";
import plantsArray from "./plantArray";
import {CartItemContext} from "../index.jsx"
import Header from "./Header.jsx"



function PlantList(){
const  { addItemToCart, cartItems } = React.useContext(CartItemContext)
const [plantList, setPlantList] = useState(plantsArray)
function existingItem(plantID){
  return cartItems.find(item => item.id === plantID)
}

    return (
        <>
        <Header/>
            {
        plantList.map((category, index)=>(
          <div key={index}>
          <div className="header">
            <hr/>
            <h1>{category.category}</h1>
            <hr/>
          </div>
          <div className='container'>
            <div className='row'>
            {category.plants.map((plant, index)=>(
              <div key = {index} className = "col-4">
                <div className='box'>
                  <div className='name'>{plant.name}</div>
                  <div className='plant'><img src={plant.imageUrl}/></div>
                  <div className='price'>${plant.price}</div>
                  <p>{plant.description}</p>
                  <div className="add-to-cart">
                    <button 
                      className='add-to-cart-btn'
                      onClick = {()=>addItemToCart(plant)} 
                      disabled = {existingItem(plant.id)}
                     > 
                      Add to cart 
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
          </div>
          </div>
          
        ))
      }
      
    </>
  )
}
        
    
export default PlantList
