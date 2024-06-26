import React from 'react';

const SwiperSlide = () => {
  return (
    <>
      <div className="card-deck container w-75 d-flex">
        <div className="card">
          <img className="card-img-top" src="/public/pic-1.webp" alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Платье kids</h5>
            <p className="card-text">Качественные брендовые вещи.</p>
            <p>2400 KGS</p>
            <button type='submit' className='btn btn-group-vertical btn-outline-danger'>В корзину</button>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="/public/pic-2.webp" alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Комбенизон</h5>
            <p className="card-text">Качественные брендовые вещи.</p>
            <p>3200 KGS</p>
            <button type="submit" className="btn btn-group-vertical btn-outline-danger">В корзину</button>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="/public/pic-3.webp" alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Платье 3в1</h5>
            <p className="card-text">Качественные брендовые вещи</p>
            <p>5400 KGS</p>
            <button type='submit' className='btn btn-group-vertical btn-outline-danger'>В корзину</button>
          </div>
        </div>
      </div>
      <div className="card-deck container w-75 d-flex">
        <div className="card">
          <img className="card-img-top" src="/public/pic-4.webp" alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Жилетка</h5>
            <p className="card-text">Качественные брендовые вещи.</p>
            <p>4400 KGS</p>
            <button type='submit' className='btn btn-group-vertical btn-outline-danger'>В корзину</button>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="/public/pic-5.webp" alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Baby комбез</h5>
            <p className="card-text">Качественные брендовые вещи.</p>
            <p>2500 KGS</p>
            <button type="submit" className="btn btn-group-vertical btn-outline-danger">В корзину</button>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="/public/pic-6.webp" alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Сандали</h5>
            <p className="card-text">Качественные брендовые вещи</p>
            <p>4800 KGS</p>
            <button type='submit' className='btn btn-group-vertical btn-outline-danger'>В корзину</button>
          </div>
        </div>
      </div>
    </>


  );
};

export default SwiperSlide;