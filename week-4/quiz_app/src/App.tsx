import Home from "./components/Home"
import Header from "./components/Header"

const App = () => {

 //const [changemode, setChangemode] = useState("light-mode")

  return (
    <main className="app">
      <Header/>
      <Home/>
    </main>
  )
}

export default App