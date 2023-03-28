import { useEffect, useState } from "react";
import Mapa from "../../componentes/Mapa";
import NavBar from "../../componentes/NavBar";
import { barragens } from "../../mocks/barragens";
import { buscaBarragens } from "../../utils";

const Home = (() => {

    const [listaBarragem, setListaBarragem] = useState(barragens);
    const [busca, setBusca] = useState("");
    const [categoria, setCategoria] = useState("");
    const [dano, setDano] = useState("");
    

    useEffect(() => {
        setListaBarragem(buscaBarragens(barragens, busca, categoria, dano))
        
    }, [busca, categoria, dano])

    return (
        <>
            <NavBar setBusca = {setBusca} setCategoria = {setCategoria} setDano = {setDano} />
            <Mapa listaBarragem={listaBarragem} />
        </>
    )
})

export default Home;