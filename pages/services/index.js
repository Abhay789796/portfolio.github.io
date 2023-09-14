import React from 'react';
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket
} from 'react-icons/rx';
import ServiceSlider from '../../components/ServiceSlider'
import Circles from '../../components/Circles'
import Bulb from './../../components/Bulb';
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';
// import Services from './index';

const Services = () => {
 const serviceData = [
    {
      icon: <RxCrop />,
      title: 'Branding',
      description: 'lorem ipuse sdksdjfsdfjkfdjffjk.',
    },
    {
      icon: <RxDesktop />,
      title: 'Development',
      description: 'lorem ipuse sdksdjfsdfjkfdjffjk.',
    },
    {
      icon: <RxPencil2 />,
      title: 'Design',
      description: 'lorem ipuse sdksdjfsdfjkfdjffjk.',
    },
    {
      icon: <RxReader />,
      title: 'Copywriting',
      description: 'lorem ipuse sdksdjfsdfjkfdjffjk.',
    },
    {
      icon: <RxRocket />,
      title: 'SEO',
      description: 'lorem ipuse sdksdjfsdfjkfdjffjk.',
    },
  ];

  return (
    <div className='h-full bg-primary/30 py-36 items-center'>
      <Circles />
      <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
         <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <h2 className='h2 xl:mt-8'>My Services <span className='text-accent'>.</span></h2>
            <p className='mb-4 max-w-[400px] mx-auto lg:mx-0'>lorem*20

            </p>
         </div>
        <ServiceSlider/>
      </div>
      </div>
      <Bulb/>
    </div>
  );
  };

export default Services;
