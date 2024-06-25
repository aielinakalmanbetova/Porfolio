import React from 'react';

const Home = () => {
  return (
    <>
      <div className='home'>
        <h1 className='retroshadow'>Детская брендовая <br/> одежда</h1>
        <p className='deepshadow'>Тут вы найдёте детские одежды и обувь.</p>
        <div className='btn-category'>
          <p className='btn-text'>Мы предлогаем вам</p>
          <div className='btn-cat'>
            <button type='submit' className='btn btn-outline-primary'>Для девочек</button>
            <button type='submit' className='btn btn-outline-danger'>Для мальчиков</button>
            <button type='submit' className='btn btn-outline-dark'>Для малышей</button>
            <button type='submit' className='btn btn-outline-light'>Аксессуары</button>
            <button type='submit' className='btn btn-outline-info'>Обувь</button>
          </div>

        </div>
      </div>
    </>

  );
};

export default Home;