import React, { Component } from 'react'
import ItemForm from './components/ItemForm'
import GroceryItemList from './components/GroceryItemList'

class App extends Component {
  state = { items: [] }

  componentDidMount() {
    fetch('/api/items')
      .then( res => res.json() )
      .then( items => this.setState ({ items }))
  }

  addItem = (name, type) => {
    const { items } = this.state
    const id = Math.floor(( 1 + Math.random()) * 0x1000).toString()
    this.setState({ items: [...items, { id, name, type }] })
  }

  updateItem = (id) => {
    let items = this.state.items.map( i => {
      if ( i.id === id )
        return {...i, purchased: !i.purchased }
      return i
    })
    this.setState({ items })
  }

  deleteItem = (id) => {
    const { items } = this.state
    this.setState({ items: items.filter( i => i.id !== id )})
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