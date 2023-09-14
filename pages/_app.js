import '../styles/globals.css';
import Layout from '../components/Layout';
import  Transition  from '../components/Transition';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';

// import MyApp from './_app';


function MyApp({Component, pageProse}) {
    const router = useRouter();

    return (
        <Layout>
            <AnimatePresence mode='wait'>
                <motion.div key={router.route} className='h-full'>
                    <Transition/>
                    <Component {...pageProse}/>
                
                </motion.div>
            </AnimatePresence>
           
        </Layout>
    )
}

export default MyApp;