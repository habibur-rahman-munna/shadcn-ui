import Homepage from "@/Pages/Home/Homepage"
import {Routes,Route} from "react-router-dom"
const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
        </Routes>
    </div>
  )
}

export default AppRouter