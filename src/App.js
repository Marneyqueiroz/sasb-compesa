import logo from '../src/assets/Gota.gif'
import DropDownFilter from './componentes/DropDownFilter';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Search from './componentes/Search';
import { categorias } from './mocks/Categorias';
import { danoPotencial } from './mocks/DanoPotencial';



function App() {
  return (
    <>
      <Header />
      <div className="container">
          <Search />
          <DropDownFilter opcoes={categorias} />
          <DropDownFilter opcoes={danoPotencial} />
      </div>
      <div className="App" style={{ display: "flex", justifyContent: "center", padding: 50 }}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <Footer />
    </>
  );
}

export default App;
