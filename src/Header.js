import logo from './logo.png';

function Header() {

    return (
    <header style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',}}>

        <img  style={{
            width:300,
            height: 100
            }}
            src={logo}
            alt='../public/logo512.png'/>
    </header>

    );
}

export default Header;