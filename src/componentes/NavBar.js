import DropDownFilter from "./DropDownFilter";
import Search from "./Search";
import { categorias } from '../mocks/categorias';
import { danoPotencial } from '../mocks/danoPotencial';
import logo from '../assets/sasb_compesa_logo.png'


const NavBar = ({setBusca, setCategoria, setDano}) => {
    return (
        <div className="container-fluid sasb-navbar">
            <div className="row py-4">
                <div className="col-lg-3 col-md-12 d-flex justify-content-center">
                    <a className="navbar-brand" href="/">
                        <img className="sasb-logo-navbar" src={logo} alt="SASB-COMPESA" />
                    </a>
                </div>
                <div className="col-2">
                    <Search setBusca={setBusca} />
                </div>
                <div className="col-2">
                    <DropDownFilter opcoes={categorias} 
                    setFilter = {setCategoria} />
                </div>
                <div className="col-2">
                    <DropDownFilter opcoes={danoPotencial} 
                    setFilter = {setDano}/>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary">
                        ÁREA DO COLABORADOR
                    </button>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    )
}

export default NavBar;