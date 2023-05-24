import React from 'react';
import ReactDOM from 'react-dom/client';
import FirstPage from './pages/FirstPage';



const root = ReactDOM.createRoot(document.getElementById('root'));


console.log('루트');
root.render(
	
  <React.StrictMode>
	<FirstPage />
  </React.StrictMode>
	
);
