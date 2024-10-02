import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'

export default function Logo() {
  return (
    <Link to="/" className='d-block logo'>
      <img src={logo} alt="" />
    </Link>
  )
}