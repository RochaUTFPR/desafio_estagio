import { Routes, Route } from 'react-router-dom'
import {Home} from './Pages/Home/Home'
import { Mission } from './Pages/Mission/Mission'

export function Router() {
  return (
    <Routes>
      <Route path="home" element={<Home/>}/>
      <Route path="*" element={<Home/>}/>
      <Route path="/mission" element={<Mission/>}/>
    </Routes>
  )
}
