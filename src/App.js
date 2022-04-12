
import './App.css';
import { Article, Navbar, Header, Footer, Services } from './components'
import homeImage from './assets/bg-houses.png'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className='image__section'>
        <img src={homeImage} alt='house image' />
      </div>
      <Services />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
