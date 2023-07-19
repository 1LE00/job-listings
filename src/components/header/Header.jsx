import './header.css';
import Mobile from '../../assets/icons/bg-header-mobile.svg';
import Desktop from '../../assets/icons/bg-header-desktop.svg';
const Header = () => {
  return (
    <header className="header w-100">
    <picture>
        <source media="(min-width: 768px)" srcSet={Desktop} />
        <img src={Mobile} alt='Mobile Background' title='Mobile Background' aria-label='Mobile Background'/>
    </picture>
    </header>
  )
}

export default Header