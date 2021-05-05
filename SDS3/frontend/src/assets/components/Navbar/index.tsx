import './styles.css'
import { ReactComponent as Logo} from 'assets/img/ds-dark.svg';

const NavBar = () => {
    return (
        <>
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
                <div className="container">
                    <Logo className="logo" />
                </div>

            </div>
        </>
    );
}

export default NavBar;