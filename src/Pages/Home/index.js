import React from 'react';
import { motion } from 'framer-motion'
const HomePage = () => {
    return (
        <motion.div 
        initial={{opacity:0, scale:0.8}}
        animate={{opacity:1, scale:1}}
        transition={{delay:0.2, duration:1.2 }}
        >
        Thats is a page HomePage  
        </motion.div>
    );
};

export default HomePage;