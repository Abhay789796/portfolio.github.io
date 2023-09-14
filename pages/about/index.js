
import React, { useState } from 'react';


import { FiFigma } from 'react-icons/fi';
import { SiAdobeXd, SiAdobePhotoshop } from 'react-icons/si';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaHandMiddleFinger,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiFramer,
 
} from 'react-icons/si';


 export const aboutData = [
  {
    title: 'skills',
    info: [ 
      {
        title:'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3/>,
          <FaJs/>,
          <FaReact/>,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        
      ],
    },
    {
      title: 'UI/UX Design',
      IconList: [<FiFigma/>, <SiAdobeXd/>, <SiAdobePhotoshop/>],
    },

  ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011-2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009-2010',
      },
    ],
  },
{
  title: 'experience',
  info: [
    {
      title: 'UX/UI Desigener -XYZ Company',
      stage: '2012-2023',
    },
    {
      title: 'Web Development -ABC Company',
      stage: '2010-20212',
    },
    {
      title: 'Intern -DEF Corporation',
      stage: '2008-2010',
    },
  ],
},
{
  title: 'credentials',
  info: [
    {
      title: 'Web Development -XYZ University, LA, CA',
      stage: '2011',
    },
    {
      title: 'Computer Science Deploma - AC Technicasl Institute',
      stage: '2009',
    },
    {
      title: 'Certified Graphics Designewr - ABC Institute, Los Angkles, CA',
      stage: '2006',
    },
  ],
},
];



import Avatar from '../../components/Avatar';
import Circles from './../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from './../../variants';
import CountUp from 'react-countup';
import { info } from 'autoprefixer';
import IconList from '../../components/IconList';

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2 
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2'>
            Captivating <span className='text-accent'>stories</span> birth magnificent designs.
          </motion.h2>
          <motion.p 
          variants={fadeIn('right', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='max-w-[500px] mx-auto xl:mx-0 mb-12 px-2 xl:px-0'>
            10 years ago, I began freelancing as a developer. Since then, I have worked remotely for agencies, consulted for startups, and collaborated on digital products for businesses and consumers.
          </motion.p>
          <motion.div 
          variants={fadeIn('right', 0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
            <div className='flex flex-1 xl:gap-x-6'>
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'> 
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className=' text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >Years of experience</div>

              </div>
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                   <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                     <CountUp start={0} end={250} duration={5} /> +
                   </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>clients</div>
                 </div>
                 <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                   <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                     <CountUp start={0} end={650} duration={5} /> +
                   </div>
                   <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Finished projects</div>
                 </div>
                 <div className='relative flex-1'>
                   <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                     <CountUp start={0} end={8} duration={5} /> +
                   </div>
                   <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Winning awards</div>
                 </div>
            </div>
          </motion.div>
          <motion.div 
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className=' hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
            {/* ... (rest of the JSX) ... */}
          </motion.div>
        </div>
        
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex && 
                  'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => (
              <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                <div>{item.title}</div>
                <div className='hidden md:flex'></div>
                <div>{item.stage}</div>
                <IconList icons={item.icons || []} />
                <div className='flex gap-x-4'>
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={iconIndex} className='text-2xl'>
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;



// const About = () => {
//   const [index, setIndex] = useState(0);
//   console.log(index);

//   return (
//     <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
//       <Circles />
//       <motion.div
//         variants={fadeIn('right', 0.2)}
//         initial='hidden'
//         animate='show'
//         exit='hidden'
//         className='hidden xl:flex absolute bottom-0 -left-[370px]'
//       >
//         <Avatar />
//       </motion.div>
//       n
//           <motion.h2 
//           variants={fadeIn('right', 0.2)}
//           initial='hidden'
//           animate='show'
//           exit='hidden'
//           className='h2'>
//             Captivating <span className='text-accent'>stories</span> birth magnificent designs.
//             </motion.h2>
//           <motion.p 
//           variants={fadeIn('right', 0.4)}
//           initial='hidden'
//           animate='show'
//           exit='hidden'
//           className='max-w-[500px] mx-auto xl:mx-0 mb-12 px-2 xl:px-0'>
//             10 years ago, I beagn freelancing as a developer. Since then, I have remote work for agencies, counsulted for startups, and collaborated on digital products for bussiness and consumer use.
//             </motion.p>
//             <motion.div 
//             variants={fadeIn('right', 0.6)}
//             initial='hidden'
//             animate='show'
//             exit='hidden'
//             className=' hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
//               <div className='flex flex-1 xl:gap-x-6'>
//                 <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
//                   <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
//                     <CountUp start={0} end={10} duration={5} /> +
//                   </div>
//                   <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Years of experience</div>
//                 </div>
//                 <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
//                   <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
//                     <CountUp start={0} end={250} duration={5} /> +
//                   </div>
//                   <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>clients</div>
//                 </div>
               
//                 <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
//                   <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
//                     <CountUp start={0} end={650} duration={5} /> +
//                   </div>
//                   <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Finished projects</div>
//                 </div>
//                 <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
//                   <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
//                     <CountUp start={0} end={8} duration={5} /> +
//                   </div>
//                   <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Winning awards</div>
//                 </div>
//               </div>
//             </motion.div>
//         </div>
        
//         <div
//         variants={fadeIn('left', 0.4)}
//         initial='hidden'
//         animate='show'
//         exit='hidden'
//         className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
//           <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
//             {aboutData.map((item, itemIndex) => (
//               <div
//                 key={itemIndex}
//                 className={`${
//                   index === itemIndex && 
//                   'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
//                 } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
//                 onClick={() => setIndex(itemIndex)}
//               >
//                 {item.title}
//               </div>
//             ))}
//           </div>
//           <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start
//           '>
//            {aboutData[index].info.map((item, itemIndex) => {
//             return (

//               <div key={itemIndex} className='flex-1 felx flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
//                 <div>{item.title}</div>
//                 <div className='hidden md:flex'></div>
//                 <div>{item.stage}</div>
//                 <IconList icon={item.icons || []} />

                

//                 <div className='flex gap-x-4'>

//                 {item.icons?.map((icon, itemIndex) => {
//                   return <div className='text-2xl'>{icon}</div>;
                    
//                 })}
//               </div>
              
//                );   
//               })}
//               </div>
//             </div>    
               
//           </div>
            
//         </div>
            
       
//   );
// };

// export default About;

