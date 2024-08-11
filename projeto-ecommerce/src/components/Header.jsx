import logo from '../assets/logo.svg'
import lupa from '../assets/lupa.svg'
import carrinho from '../assets/carrinho.svg'
import '../index.css'

export default function Header() {
    return (
        <>
            <div className='header'>
                <img src={logo} alt="ícone da logo da Digital Store em cor de rosa" />
                <img src={lupa} alt="ícone de lupa da barra de pesquisa" />
                <img src={carrinho} alt="ícone de carrinho" />
            </div>
        </>
    )
}