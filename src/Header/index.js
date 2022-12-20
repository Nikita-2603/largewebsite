import './styles.css';
import SubHeader from './subheader';

const Header = () => {
    return <div className='container'>
        <div className="header">
            <div className="left">
                <div className="left-section">
                    <a className="s-link" href='/subscribe'>subscribe</a>
                </div>
            </div>
            <div className="middle">
                <div className="middle-section">
                    <a className="s-link main-logo" href="/">Large</a>
                </div>
            </div>
            <div className="right">
                <div className="right-section">
                    <div className="search-icon">
                        <i className="bi bi-search"></i>
                    </div>
                    <div className="signup">
                        <a className='s-link signup-link' href='/signup'>Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
        {/* <SubHeader /> */}
    </div>
}

export default Header;