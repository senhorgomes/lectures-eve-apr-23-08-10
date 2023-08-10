import { useState } from "react";

function GroceryListItem(props) {
    const [purchased, setPurchased] = useState(false)
    return ( 
        <li>
            {purchased && <h2>Purchased!</h2>}
            <h2>Item name:{props.item}</h2>
            <h2>Quantity: {props.quantity}</h2>
            <img alt="toiletPaperPicture" src={props.image}/><br/>
            {/* Add a button when clicked, it will toggle the item as purchased */}
            <button onClick={()=>setPurchased(true)}>Purchased!</button>
        </li>
     );
}

export default GroceryListItem;