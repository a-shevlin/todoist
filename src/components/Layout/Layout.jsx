import React from 'react';
import { motion } from 'framer-motion';
import classes from './Layout.module.css';

function Layout({children}) {
  return (
    <div className={classes.layoutWrapper}>
      <motion.main 
        className={classes.container}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.main>
    </div>
  )
}

export default Layout