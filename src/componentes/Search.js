
import { HiSearch } from 'react-icons/hi';



const Search = ({setBusca}) => {
    return (
        <div className="input-group me-2 " bis_skin_checked="1">
            <input
                type="text"
                className="form-control"
                placeholder="Digite o nome da barragem"
                onKeyUp={(e) => {setBusca(e.target.value)}}
                 />
            <span className="input-group-text" id="basic-addon1">
                <HiSearch />
            </span>
        </div>

    )
}

export default Search;