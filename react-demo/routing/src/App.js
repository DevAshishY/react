import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';
import Java from './services/Java';
import Python from './services/Python';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home/>,
      children:[
          {
            path:'/about',
            element:<About/>
          },
          {
            path:'/service',
            element:<Service/>,
            children:[
              {
              path:'java',
              element:<Java/>
            },
              {
              path:'phython',
              element:<Python/>
            }
          ]
          }
      ]
    },
    
   
  ])
  return (
   <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
