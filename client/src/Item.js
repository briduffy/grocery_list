import React from 'react'

const styles = {
  purchased: {
    textDecoration: 'line-through',
    color: 'grey'
  },
  pointer: { cursor: 'pointer' }
}

const Item = ({id, purchased, name, updateItem, deleteItem }) => (
  <div className="col s12">
    <div className="col m8">
      <div style={ purchased ? styles.purchsed : {} } className="center">
        {name}
      </div>
    </div>
    <div className="col m2">
      <input
        id={`item-${id}`}
        type="checkbox"
        defaultChecked={purchased}
        onClick={() => updateItem(id)}
      />
      <label htmlFor={`item-${id}`}>Purchased></label>
    </div>
    <div style={ styles.pointer } className="col m1" onClick={() => deleteItem(id)}>
      X
    </div>
  </div>
)

export default Item