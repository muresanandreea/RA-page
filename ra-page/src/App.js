import './App.css';
import {Header} from "./components/Header/Header";
import {SideMenu} from "./components/SideMenu/SideMenu";

function App() {

  return (
    <div className="App" >
        <div style={{width:'100%',height:'100vh',backgroundColor:'#69779b'}}>
        <Header/>
        </div>
    </div>
  );
}

export default App;
