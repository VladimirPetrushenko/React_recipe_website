import {Link} from 'react-router-dom'

export function Header() {
    return (
        <nav className="light-green lighten-1">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">
                    React recipe website
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="/random-recipe">Random recipe</a>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
