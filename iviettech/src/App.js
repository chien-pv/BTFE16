import logo from './logo.svg';
import './App.css';
import Header from './header/menu';
import Body from './body/body';
import Footer from './footer/footer';

function App() {
  return ( 
    <div className = "App" >
      <Header></Header>  
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;