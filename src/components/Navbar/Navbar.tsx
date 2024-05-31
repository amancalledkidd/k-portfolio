import './Navbar.scss';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <a href='#my-journey'>My Journey</a>
                <a href='#projects'>Projects</a>
                <a href='#contact'>Contact</a>
            </div>
        </div>
    );
}

export default Navbar;