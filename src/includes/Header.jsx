import { useEffect, useState } from 'react';

export const Header = () => {

    const [ isDarkMode, setIsDarkMode ] = useState( false );

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, [ isDarkMode ]);
    

  return (
    <header className="header">
        <a href="https://github.com/Ferney-Baron" target="_blank"><i className="fa-brands fa-github"></i></a>
        <button 
            type="button"
            onClick={ () => setIsDarkMode( !isDarkMode ) }
            >
            <i className= { isDarkMode ? 'fa-regular fa-sun' : 'fa-regular fa-moon' }></i>
        </button>
    </header>
  )
}
