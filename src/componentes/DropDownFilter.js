

const DropDownFilter = ({opcoes, setFilter}) => {


    return <>
        <select 
            className="form-select mx-2" 
            aria-label="Default select example"  
            defaultValue={0}
            onChange = {(e) => {setFilter(e.target.value)}}
            >
            {
                opcoes.map((opcao, indice) => {
                    return (
                        <option value={opcao} key={indice}>{opcao}</option>
                    )
                })
            }
        </select>
    </>
}

export default DropDownFilter;