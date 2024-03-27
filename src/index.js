import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import { Room1 } from './module/Room1';
import { Room2 } from './module/Room2';
import { Room3 } from './module/Room3';
import { Room4 } from './module/Room4';
let cod1=Math.floor(Math.random()*90)+10
let cod2=Math.floor(Math.random()*90)+10
let coda=[cod1,cod2]
let code=coda.join('')
console.log(code)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Swiper
  navigation={true}
  modules={[Navigation]}
  loop={true}
  allowTouchMove={false}
  className="mySwiper">
    <SwiperSlide><Room3/></SwiperSlide>
    <SwiperSlide><Room4/></SwiperSlide>
    <SwiperSlide><Room1/></SwiperSlide>
    <SwiperSlide><Room2/></SwiperSlide>
  </Swiper>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
