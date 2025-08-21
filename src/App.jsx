import { UpdateFollower } from "react-mouse-follower"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"

const App = () => {
  return (
    <div>
      <UpdateFollower
      mouseOptions={{
        backgroundColor:"white",
        zIndex:999,
        followSpeed:1.5
      }}
      >
        <Navbar/>
        <Hero/>
      </UpdateFollower>
      
    </div>
  )
}

export default App