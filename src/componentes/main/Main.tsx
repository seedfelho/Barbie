import { useState } from 'react';
import './Main.css';
import Filme from '../filme/filme';

type FilmesType = {
    id: number,
    titulo: string,
    sinopse: string,
    imagem: string
}




function Main(){
    //Hook
    const [texto,setTexto] = useState("")

    const filmes:FilmesType[] = [
        {
            id:1,
            titulo: "Barbie",
            sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem:"/cartazBarbie.jpg"
        },
        {
            id:2,
            titulo: "Oppenheimer",
            sinopse:"O físico J. Robert Oppenheimer trabalha com uma equipe de cientistas durante o Projeto Manhattan, levando ao desenvolvimento da bomba atômica.",
            imagem:"/oppenheimer.jpg"
        },
        {
            id:3,
            titulo: "Jogo da imitação",
            sinopse:"objetivo quebrar o Enigma, o famoso código que os alemães usam para enviar mensagens aos submarinos. Um de seus integrantes é Alan Turing (Benedict Cumberbatch), um matemático de 27 anos estritamente lógico e focado no trabalho, que tem problemas de relacionamento com praticamente todos à sua volta. Não demora muito para que Turing, apesar de sua intransigência, lidere a equipe. Seu grande projeto é construir uma máquina que permita analisar todas as possibilidades de codificação do Enigma em apenas 18 horas, de forma que os ingleses conheçam as ordens enviadas antes que elas sejam executadas. Entretanto, para que o projeto dê certo, Turing terá que aprender a trabalhar em equipe e tem Joan Clarke (Keira Knightley) sua grande incentivadora.",
            imagem:"/jogoDaImitacao.jpg"
        },
        {
            id:4,
            titulo: "Jogo da imitação",
            sinopse:"objetivo quebrar o Enigma, o famoso código que os alemães usam para enviar mensagens aos submarinos. Um de seus integrantes é Alan Turing (Benedict Cumberbatch), um matemático de 27 anos estritamente lógico e focado no trabalho, que tem problemas de relacionamento com praticamente todos à sua volta. Não demora muito para que Turing, apesar de sua intransigência, lidere a equipe. Seu grande projeto é construir uma máquina que permita analisar todas as possibilidades de codificação do Enigma em apenas 18 horas, de forma que os ingleses conheçam as ordens enviadas antes que elas sejam executadas. Entretanto, para que o projeto dê certo, Turing terá que aprender a trabalhar em equipe e tem Joan Clarke (Keira Knightley) sua grande incentivadora.",
            imagem:"/jogoDaImitacao.jpg"
        },
        {
            id:5,
            titulo: "Jogo da imitação",
            sinopse:"objetivo quebrar o Enigma, o famoso código que os alemães usam para enviar mensagens aos submarinos. Um de seus integrantes é Alan Turing (Benedict Cumberbatch), um matemático de 27 anos estritamente lógico e focado no trabalho, que tem problemas de relacionamento com praticamente todos à sua volta. Não demora muito para que Turing, apesar de sua intransigência, lidere a equipe. Seu grande projeto é construir uma máquina que permita analisar todas as possibilidades de codificação do Enigma em apenas 18 horas, de forma que os ingleses conheçam as ordens enviadas antes que elas sejam executadas. Entretanto, para que o projeto dê certo, Turing terá que aprender a trabalhar em equipe e tem Joan Clarke (Keira Knightley) sua grande incentivadora.",
            imagem:"/jogoDaImitacao.jpg"
        }
]

    //função recebe um atributo e de "event"
    function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
        // console.log(e.target.value)
        setTexto(e.target.value)
    }
    return(
        <>
        <div className="pesquisa">
            <p>Buscar filme</p>
                <input className="barrapesquisa" type="text" onChange={mudaTexto}/>
                <div>
                    <p className="texto_digitado">Pesquisa: {texto}</p>    
                </div>
            </div>

        <main className="content-main">
            { filmes.filter((f) => f.titulo.toLowerCase().includes(texto)).map( (filme) => <Filme key = { filme.id } titulo={ filme.titulo } sinopse={filme.sinopse} imagem={filme.imagem}/>) }
        </main>
        </>
    )
}

export default Main