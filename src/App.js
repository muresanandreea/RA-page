import './App.css';
import {Header} from "./components/Header/Header";
import {MidSection} from "./components/MidSection/MidSection";
import {Hero} from './components/Hero/Hero';

function App() {

  return (
    <div className="App" >
        <div style={{width:'100%',height:'100vh',backgroundColor:'#69779b'}}>
        <Header/>
        <Hero/>
        <MidSection/>
        </div>
    </div>
  );
}

export default App;
