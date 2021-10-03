import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';
import Buttons from "./components/Buttons";

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);
    
    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: ' pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: ' x' },
        { id: 4, value: 'Eggs', qty: 16, unit: ' x' },
      ]
    };
    
  }
  
  addSomeFood = (foodDescription, quantity) => {
    return () => {
      const searchResult = this.state.items.findIndex((element, index, array) => {
        if(element.value === foodDescription){
          return true;
        } else {
          return false;
        }
      });

      if(searchResult !== -1) {
        console.log("Success! Element with index" + searchResult + " is matching for " + foodDescription);
        let newItems = [...this.state.items];
        newItems[searchResult].qty += quantity;
        this.setState({items: newItems});
      }
      else{
        console.log('Noumilk');
        this.setState({items: [...this.state.items, {id: this.state.items.length + 1, value: foodDescription, qty: quantity, unit: 'pcs'}]});
      }

    }
   
  }

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <Buttons 
      addStrawberries= {this.addSomeFood('Strawberries', 3)}
      addYoghurt= {this.addSomeFood('Yoghurt', 1)}
      addCarrots= {this.addSomeFood('Carrots', 4)}
      addOnions= {this.addSomeFood('Onions', 3)}/>

    </div>
  }
}

export default App;


 // if (this.state.items.includes({ id: 1, value: 'Milk', qty: 5, unit:'ltr'}) == true)
      // {
      //   console.log('Jees. Maitoa')
      // }
      // else{
      //   console.log('Noup, ei ole maitoa')
      // }

    
     