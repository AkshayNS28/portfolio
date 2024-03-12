import './App.css'
import Home from '../components/Home/Home'
import About from '../components/About/About';
import Education from '../components/Education/Education';
import Skills from '../components/Skills/Skills';
import Memories from '../components/Memories/Memories';
import Contact from '../components/Contact/Contact';
import {createBrowserRouter , RouterProvider} from 'react-router-dom'


function App() {
  const router = createBrowserRouter([
    {
      path:"/portfolio/",
      element:<Home/>
    },
    {
      path:"/portfolio/about",
      element:<About/>
    },
    {
      path:"/portfolio/education",
      element:<Education/>
    },
    {
      path:"/portfolio/skills",
      element:<Skills/>
    },
    {
      path:"/portfolio/memories",
      element:<Memories/>
    },
    {
      path:"/portfolio/contact",
      element:<Contact/>
    },
    
])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App