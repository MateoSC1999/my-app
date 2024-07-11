import logo from './logo.png';


function Header() {

    return (
    <header id="header" >

        <img id='logo'
            src={logo}
            alt='../public/logo512.png'/>
    </header>

    );
}

export default Header;