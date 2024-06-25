import React from 'react';
import Home from './containers/Home/Home';
import Toolbar from './components/Toolbar/Toolbar';
import './containers/Home/Home.css';
import SwiperSlide from './components/Carousel/SwiperSlide';


const App = () => {

  return (
    <>
      <div className='bg-image'>
        <Toolbar/>
        <Home/>
      </div>
      <div>
        <SwiperSlide/>
      </div>
    </>


  );
};

export default App;
