import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './containers/Home/Home';
import Toolbar from './components/Toolbar/Toolbar';
import SwiperSlide from './components/Carousel/SwiperSlide';
import HomeTwo from './containers/HomeTwo/HomeTwo';
import './containers/Home/Home.css';


const App = () => {

  return (
    <>
      <header className='nav-header'>
        <Toolbar />
      </header>
      <div className='bg-image'>
        <Routes>
          <Route path='/' element={( <Home />) } />
          <Route path='/homeTwo' element={( <HomeTwo /> )} />
          <Route path='/swiperSlide' element={( <SwiperSlide /> )} />
        </Routes>
      </div>
    </>
  );
};

export default App;
