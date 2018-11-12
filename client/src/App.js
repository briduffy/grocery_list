import React from 'react'
import ItemForm from './components/ItemForm'
import GroceryItemList from './components/GroceryItemList'

class App extends React.Component {
  state = { items: [] }

  componentDidMount() {
    fetch('/api/items')
      .then(res => res.json())
      .then( items => this.setState ({ items: items }))
  }

  addItem = (name, type) => {
    const item = { name }
    fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(item)
    }).then(res => res.json())
      .then(item => {
        const { items } = this.state;
        this.setState({ items: [...items, item] })
      })
  }

  updateItem = (id) => {
    fetch(`/api/items/${id}`, { method: 'PUT' })
      .then(res => res.json())
      .then(item => {
        const items = this.state.items.map( i => {
          if ( i.id === id )
            return {item}
          return i
       })
    this.setState({ items: items })
    })
  }

  deleteItem = (id) => {
    fetch(`/api/items/${id}`, { method: 'DELETE' })
      .then( () => {
        const { items } = this.state;
        this.setState({ items: items.filter( i => i.id !== id ) })
      })
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