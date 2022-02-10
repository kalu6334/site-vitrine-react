import React,{useState,useEffect} from 'react';
import './theme.css';

function Theme  ()  {
  const [darkMode, setDarkMode] = useState(false);
  const ActiveMode = async () => {
    setDarkMode(!darkMode);
    if(darkMode === true){ 
      document.body.classList.add('light__mode');
      document.body.classList.remove('dark__mode');
      await localStorage.setItem('Theme','light__mode'); 
    }
    if(darkMode === false){ 
      document.body.classList.add('dark__mode');
      document.body.classList.remove('light__mode');
      await localStorage.setItem('Theme','dark__mode'); 
    }

 
  
  useEffect(() => {
    if (localStorage.getItem('Theme') === 'light__mode') {
      document.body.classList.add('light__mode');

    } else if (localStorage.getItem('Theme') === 'dark__mode') {
      document.body.classList.add('dark__mode');
      setDarkMode(!darkMode);
    }

  }, []); 
};
    return (
        <>
            <div className="so__sticky " >
              <div className="switch-checkbox">               
                 <div>
                  <button onClick={ActiveMode} className='btn'>
                    {localStorage.getItem('Theme') === 'dark__mode' ? '☀️' : '🌙'}
                  </button> 
               </div> 
               </div>
            </div>
        </>
    );
};

export default Theme;