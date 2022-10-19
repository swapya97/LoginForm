import "./App.css";
import LoginForm from "./components/LoginForm";
var userIsRegistered = false;

function App() {
  return (
    <div className="container">
     <LoginForm isRegistered={userIsRegistered}/>
    </div>
  );
}

export default App;
