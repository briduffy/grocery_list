import React, { Component } from 'react'
import ItemForm from './components/ItemForm'
import GroceryItemList from './components/GroceryItemList'

class App extends Component {
  state = { items: [] }

  componentDidMount() {
  }

  addItem = (name, type) => {
  }

  updateItem = (id) => {
  }

  deleteItem = (id) => {
  }

  render() {
    return (
      <div className="container">
        <ItemForm addItem={this.addItem} />
        <GroceryItemList
          items={this.state.items}
          updateItem={this.updateItem}
          deleteItem={this.deleteItem}
        />
      </div>
    )
  }
}

export default App