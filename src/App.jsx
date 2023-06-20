import React from 'react';
import { toast, Toaster, ToastBar } from 'react-hot-toast';
import './App.css';

function App() {

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
      <button onClick={() => toast.success("Button Clicked!")}>Test Toast</button>
      {/* Routes will go in here either with animated routes or just react-router-dom */}
      {/* Here will be our routing component to animate page transitions */}
    </React.Fragment>
  )
}

export default App
