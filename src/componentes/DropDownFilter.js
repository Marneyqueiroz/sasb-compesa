

const DropDownFilter = ({opcoes }) => {


    return <>
        <select className="form-select mx-2" aria-label="Default select example"  defaultValue={0}>
            {
                opcoes.map((opcao, indice) => {
                    return (
                        <option value={indice} key={indice}>{opcao}</option>
                    )
                })
            }
        </select>
    </>
}

export default DropDownFilter;