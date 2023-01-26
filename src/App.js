import React,{useState} from 'react'
import './App.css';
import Navbar from './myComponents/Navbar';
import Footer from './myComponents/Footer.js'
import Body from './myComponents/Body';
// import ProductList from './myComponents/ProductList.js'
// import AddItem from './myComponents/AddItem';


function App() {
  return (
    <>
     <Navbar/>
     <Body/>
     <Footer/>
    </>
  );
}
export default App;