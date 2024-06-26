import React from 'react';

const Home = () => {
  return (
    <>
      <div className='home'>
        <h1 className='retroshadow'>Детская брендовая <br/> одежда</h1>
        <p className='deepshadow'>Тут вы найдёте детские одежды и обувь.</p>
        <div className='btn-category'>
          <h3 className='btn-text'><strong>Модная одежда для ваших детей в лучшем ассортименте. <br/> Подарите своему малышу стильный вид</strong></h3>
          <div className='btn-cat'>
            <button type='submit' className='btn btn-outline-light'>Для девочек</button>
            <button type='submit' className='btn btn-outline-light'>Для мальчиков</button>
            <button type='submit' className='btn btn-outline-light'>Для малышей</button>
            <button type='submit' className='btn btn-outline-light'>Аксессуары</button>
            <button type='submit' className='btn btn-outline-light'>Обувь</button>
          </div>

        </div>
      </div>
    </>

  );
};

export default Home;