import React from 'react'
import Item from './Item'

const GroceryItemList = ({ items, updateItem, deleteItem }) => (
  <div class="row">
  { items.map( item => 
    <Item
      key={item.id}
      {...item}
      updateItem={updateItem}
      deleteItem={deleteItem}
    />
  )}
  </div>
)

export default GroceryItemList