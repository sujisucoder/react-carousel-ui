import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageSlider from './components/ImageSlider'

const App= ()=> {

  const slides = [
    {url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'image1'},
    {url: 'https://images.unsplash.com/photo-1551656222-71345ab13814?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'image2'},
    {url: 'https://plus.unsplash.com/premium_photo-1669412515480-ab95d79d47b1?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'image3'},
    {url: 'https://images.unsplash.com/photo-1614690805859-3c0ce8feebfe?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'image4'},
    {url: 'https://images.unsplash.com/photo-1667339025643-81a5aba3b368?q=80&w=2369&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'image5'},
    {url: 'https://images.unsplash.com/photo-1717496002081-38a90d3cba26?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'image6'}
  ]



  const containerStyles = {
    width: "500px",
    height:"280px",
    margin: "0 auto",
  };

  return (
    <>
      <div>
        <h1>React Carousel</h1>
        <div style={containerStyles}>
        <ImageSlider slides={slides} />
        </div>
      </div>
    </>
  )
}

export default App
