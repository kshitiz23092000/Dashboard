import "./App.css";
import Header from "./components/Header";
import Price from "./components/Price";
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div style={{width:'100%'}}>
        <Header />
        
      </div>
    </div>
  );
}

export default App;
