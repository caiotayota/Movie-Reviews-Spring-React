import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className='container'>
                <div className='moviereviews-nav-content'>
                    <h1>Movie Reviews</h1>
                    <a href="https://github.com/caiotayota">
                        <div className='moviereviews-contact-container'>
                            <GithubIcon />
                            <p className='moviereviews-contact-link'>/caiotayota</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar