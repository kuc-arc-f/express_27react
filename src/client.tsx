import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App';

/*
function App(){
  return(
    <div>
      <h1>hello</h1>
    </div>
  )
}
*/
console.log("#client.ts");
//root
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
