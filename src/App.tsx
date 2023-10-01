import RequestInput from "./components/RequestInput"
import UserCard from "./components/UserCard"
import { UserProvider } from "./contexts/userContext"

import './App.css'

function App() {

  return (
    <div className="App">
      <section className="App-header">
        <UserProvider>
          <UserCard />
          <RequestInput />
        </UserProvider>
      </section>
    </div>
  )
}

export default App