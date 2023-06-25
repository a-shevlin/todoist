import React from 'react';
import { toast, Toaster, ToastBar } from 'react-hot-toast';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Home } from './pages';
import './App.css';

function App() {
  const location = useLocation();

  return (
    // React.Fragment is a good way to organize components and pages if you dont have a parent container.
    <React.Fragment>
      {/* For Notifications we will create a 'Toaster' I personally like to use react=hot-toast */}
      <Toaster
        position='top-center'
        toastOptions={{
          style: {
            color: '#000000',
          }
        }}
      >
        {(t) => (
          <ToastBar 
            toast={t}
            style={{
              ...t.style,
              // animation: t.visible ? 'custom-enter 1s ease' : 'custom-exit 1s ease',
            }}  
          >
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== 'loading' && (
                  <button onClick={() => toast.dismiss(t.id)}>x</button>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
      {/* Routes will go in here either with animated routes and react-router-dom */}
      {/* Here will be our routing component to animate page transitions */}
      <AnimatePresence>
        {/* context providers will wrap these routes */}
        <Routes location={location} key={location}>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </React.Fragment>
  )
}

export default App
