# React Developer Workflow

- Development environment review/best practices
- React development tools
- Where do we start with developing a React project?
    - How should we structure out files?
    - How do we start developing components?
    - How should we name our components?
    - Where do we put our mock data?
    - What comes first? The data or the structure?
    - Where do we put images? Public vs Src

# React Development Tools

A project built with React can become quite massive. Our first instinct is to console.log everything and while for most situations it would work, there are better approachs for debugging our components.

[React Developer Tools](https://react.dev/learn/react-developer-tools) is a tool that allows you to interact with the components directly in your dev tools and also debug state.

# React file structure/best practices

There isn't a specific instruction on organization, naming props, and even components. There are the general accepted practices. Such as leaving your data in a folder named `data`. Any images being rendered in your components should be stored inside of the folder `src`. If the images are not being used by the components, then they can safely be stored in the folder `public`. All images should be organized in one location so it's easier to keep track of where they are located. It can a folder named `images` or `assests`. Naming components should revolve around the purpose of the component

# Component-based development

The two most important questions we should answer during development is what does our data look like, and what is the purpose of this component. Diving into development of our components without having an idea of what data the component is supposed to look like will make our work more challenging. By understanind this idea, you will have a better idea of the structure of the HTML, and the purpose of the component.

Each component should serve a single purpose. We can make a React app with a few (1-3) components but it will be come a wall of code. To keep things organized, and easier to understand, we should develop our app based on each component having its own purpose. 

Example:

- A component to render a single Grocery List Item

```jsx
function GroceryListItem(props) {
    return ( 
        <li>
            <h2>Item name:{props.item}</h2>
            <h2>Quantity: {props.quantity}</h2>
        </li>
     );
}
```

- Another component that houses all the Grocery List Items

```jsx
function GroceryList(props) {
    return (
        <ul>
            <h1>Bryan's Grocery List</h1>
            {props.groceryList.map((element) => {
                return (
                    <GroceryListItem
                        key={element.id}
                        item={element.item}
                        quantity={element.quantity}
                    />
                )
            })}
        </ul>
    );
}
```