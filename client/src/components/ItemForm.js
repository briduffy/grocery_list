import React from 'react'

class ItemForm extends React.Component {
  state = { name: '', type: '' }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  handleSumbit = (e) => {
    e.preventDefault()
    this.props.addItem(this.state.name)
    this.setState({ name: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSumbit}>
        <input
          placeholder='Add Grocery Item'
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default ItemForm