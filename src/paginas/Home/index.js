import Mapa from "../../componentes/Mapa";
import { useEffect, useState } from "react";
import { barragens } from "../../mocks/barragens";
import NavBar from "../../componentes/NavBar";

const Home = (() => {

    const [listaBarragem, setListaBarragem] = useState(barragens);
    const [busca, setBusca] = useState("");
    

    useEffect(() => {
        setListaBarragem(barragens)
    }, [busca])

    return (
        <>
            <NavBar setBusca = {setBusca} />
            <Mapa listaBarragem={listaBarragem} />
        </>
    )
})

export default Home;