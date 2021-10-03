import React from 'react';
import SearchView from './components/SearchView';
import data from './data.json';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: data.items,
      productSearchString: "",
    
    }
  }

  onSearchFieldChange = (event) => {

    console.log('Keyboard event');
    console.log(event.target.value);
    this.setState({ productSearchString: event.target.value });
  }

  addNewItem = (name, author, price, type) => {
    let newItems = [...this.state.items];
    newItems.push({
      id: newItems.length + 1,
      name: name,
      author: author,
      price: price,
      type: type
    });

    this.setState({
      items: newItems
    });
  }

  deleteItem = itemId => this.setState({items: this.state.items.filter(item => item.id !== itemId)})

  render()
  {
    let output =
      <>
        <div>
          Search <input type="text" onChange={ this.onSearchFieldChange } value={ this.state.productSearchString }/>
        </div>
        <SearchView
          items={ this.state.items.filter((item) => item.name.includes(this.state.productSearchString)) }
          />
      </>
    return (
      <>
        { output }
      </>
    )
  }
}

export default App;