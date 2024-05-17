import React from 'react';
import Carousel from '../components/home/Carousel';
import { useNavigate } from 'react-router-dom';
import HomeHeader from '../components/home';

const Home = () => {
  const navigate = useNavigate();

  const handleImageClick = (path) => {
    navigate(path);
  };

  return (
    <div className=''>
      <HomeHeader />
      <Carousel />
     {/* <h1 className='text-blue-900'>Welcome to My Art Portfolio</h1>
      <div className='flex justify-center items-center'>
      </div> */}
     </div>
  );
};

export default Home;