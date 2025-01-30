import Footer from "./Layout/Footer"
import Header from "./Layout/Header"
import AppRouter from "./Routes/AppRouter"
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div>
      <Header/>
      <AppRouter/>
      <Footer/>
    </div>
  )
}
export default App