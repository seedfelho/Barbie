import './Main.css'
import Filme from '../filme/filme'

function Main(){
    return(
        <main className="content-main">
            <Filme titulo= "Barbie" sinopse="Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita,
             Barbie parte para o mundo humano em busca da verdadeira felicidade."
             imagem="/barbie.png"
             />
            <Filme/>
            <Filme/>
            <Filme/>
        </main>
    )
}

export default Main