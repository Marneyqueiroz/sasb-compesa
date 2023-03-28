import DropDownFilter from './componentes/DropDownFilter';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Marker from './componentes/Marker';
import Search from './componentes/Search';
import { categorias } from './mocks/Categorias';
import { danoPotencial } from './mocks/DanoPotencial';
import Home from './paginas/Home';



function App() {
  return (
    <>
      <Header />
      <div className='background'>
        <Home></Home>
        <div className="input-control">
          <Search />
          <DropDownFilter opcoes={categorias} />
          <DropDownFilter opcoes={danoPotencial} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
