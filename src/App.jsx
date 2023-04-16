import './App.css';
import { data } from './data';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Page from './components/Page';

function App() {
  const first10Img = data.slice(0, 10);

  return (
    <div className="App">
      <Header />
      <Main>
        <Page first10Img={first10Img} />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
