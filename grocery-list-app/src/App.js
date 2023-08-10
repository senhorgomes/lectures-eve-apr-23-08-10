import './App.css';
// import GroceryListItem from './components/GroceryListItem';
// import toiletPaperPicture from './assests/toiletPaper.jpeg'
// import breadPicture from './assests/bread.jpeg'
// import iceCreamPicture from './assests/iceCreamTub.jpeg'
import GroceryList from './components/GroceryList';
import { groceryListData } from './data/groceryListData';
// If I wanted to add a FIXED header that said Bryan's Grocery List
// App, GroceryList, or another component
// Ask ourselves, what is the purpose of the component, and what is the purpose of the data.
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        {/* A parent component, that renders as many GroceryListItems as there are element in the array */}
        <GroceryList groceryList={groceryListData} />
        {/* {groceryList.map((element) => {
          return (
          <GroceryListItem
            key={element.id}
            item={element.item} //=>Toilet Paper
            quantity={element.quantity}
            image={element.image}
          />
          )
        })} */}
        {/* <GroceryListItem 
          item={sampleGroceryListItem.item} //=>Toilet Paper
          quantity={sampleGroceryListItem.quantity}
          image={sampleGroceryListItem.image}
        /> */}
      </header>
    </div>
  );
}

export default App;
