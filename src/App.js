import './App.css';
import Header from '../src/component/AppLayout/Header/index'
import Footer from '../src/component/AppLayout/Footer'
import Map from '../src/component/section/Map'
import Analysis from '../src/component/section/Analysis'

function App() {
  return (
    <div>
     <Header/>
     <Map/>
     <Analysis/>
     <Footer/>
    </div>
  );
}

export default App;
