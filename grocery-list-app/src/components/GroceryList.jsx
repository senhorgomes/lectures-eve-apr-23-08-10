// Render all the GroceryListItems
import GroceryListItem from "./GroceryListItem";
function GroceryList(props) {
    return (
        <ul>
            {/* We could also make this another component */}
            <h1>Bryan's Grocery List</h1>
            {props.groceryList.map((element) => {
                return (
                    <GroceryListItem
                        key={element.id}
                        item={element.item} //=>Toilet Paper
                        quantity={element.quantity}
                        image={element.image}
                    />
                )
            })}
        </ul>
    );
}

export default GroceryList;