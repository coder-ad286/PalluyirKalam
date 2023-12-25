import React from 'react'
import { Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './screens/Home';
import Ulaa from './screens/Ulaa';
import PalliKoodam from './screens/PalliKoodam';
import Kulu from './screens/Kulu';
import Kadai from './screens/Kadai';
import MeichalKaadu from './screens/MeichalKaadu';
import Uyir from './screens/Uyir';
import Thottam from './screens/Thottam';
import PageNotFound from './screens/PageNotFound';
import { HelmetProvider ,Helmet} from 'react-helmet-async';
import KaaniNilam from './screens/KaaniNilam';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>} />
        <Route path='/kaaninilam' element={<KaaniNilam/>} />
        <Route path='/ulaa' element={<Ulaa/>}/>
        <Route path='/pallikoodam' element={<PalliKoodam/>}/>
        <Route path='/kulu' element={<Kulu/>}/>
        <Route path='/kadai' element={<Kadai/>}/>
        <Route path='/meichalkaadu' element={<MeichalKaadu/>}/>
        <Route path='/uyir' element={<Uyir/>}/>
        <Route path='/thottam' element={<Thottam/>}/>
        <Route path='*' element={<PageNotFound/>} />
    </Route>
  )
)
const App = () => {
  return (
    <>
    <HelmetProvider>
      <Helmet>
        <meta name='description' content="Default" />
      </Helmet>
      <RouterProvider router={router} />
    </HelmetProvider>
  </>
  )
}

export default App