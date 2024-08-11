import '../index.css'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/insta.svg'

export default function Footer() {
    return (
        <>
            <div className='footer'>
                <img src={facebook} alt="logo do facebook" />
                <img src={instagram} alt="logo do instagram" />
            </div>
        </>
    )
}