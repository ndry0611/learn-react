"use client";
import { useState } from 'react';
import './index.css'
import Header from './components/Header';
import Form from './components/Form';
import GroceryList from './components/GroceryList';
import Footer from './components/Footer';

export default function Home() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    /*
      Immutability :
      instead of changing the state value, copy the exact array -> add the new value to temporary array -> change the state value with temporary array
      example :
      let arr = [a,b,c]
      let temp = arr
      temp.push(d)
      arr = temp
     */
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    // #1
    // const updatedItem = items.filter((item) => item.id !== id);
    // setItems((updatedItem));

    // #2
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => item.id == id ? { ...item, checked: !item.checked } : item))
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems} />
      <Footer items={items} />
    </div>
  )
}

// array of object example
// const groceryItems = [
//   {
//     id: 1,
//     name: 'Kopi Bubuk',
//     quantity: 2,
//     checked: true,
//   },
//   {
//     id: 2,
//     name: 'Gula Pasir',
//     quantity: 5,
//     checked: false,
//   },
//   {
//     id: 3,
//     name: 'Air Mineral',
//     quantity: 3,
//     checked: false,
//   },
// ];
