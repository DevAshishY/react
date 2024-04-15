import { Suspense, lazy } from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
const Home = lazy(()=> import('./Home'));
const About = lazy(()=> import('./About'));
const Service = lazy(()=> import('./Service'));
const Java = lazy(()=> import('./services/Java'));
const Python = lazy(()=> import('./services/Python'));


function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Suspense fallback={<p>loading</p>}><Home/></Suspense> ,
      children:[
          {
            path:'/about',
            element: <Suspense fallback={<p>loading</p>}><About/></Suspense>
          },
          {
            path:'/service',
            element:  <Suspense fallback={<p>loading</p>}><Service/></Suspense>,
            children:[
              {
              path:'java',
              element:  <Suspense fallback={<p>loading</p>}><Java/></Suspense>
            },
              {
              path:'phython',
              element:  <Suspense fallback={<p>loading</p>}><Python/></Suspense>
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
