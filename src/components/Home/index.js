import { Link } from 'react-router-dom';
import './index.css';

function Index() {
    return (
        <div className="home-container">
            <div className="profile-container">
            <h1>Select Your User Profile</h1>
            <ul className="profile-list">
                <li>
                    <Link to="/user" className="profile-link">
                        User
                    </Link>
                </li>
                <li>
                    <Link to="/admin" className="profile-link">
                        Admin
                    </Link>
                </li>
                <li>
                    <Link to="/verifier" className="profile-link">
                        Verifier
                    </Link>
                </li>
            </ul>
            </div>
        </div>
    );
}

export default Index;
