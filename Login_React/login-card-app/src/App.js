import Login from './Login';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import "./App.scss";

function App() {
  return (
    <>
    <main className = "App">
      <Login />
    </main>

    <div className='container'>
      <Header/>
      <MainContent />
      <Footer />
    </div>   
    </>

  );
}

export default App;
