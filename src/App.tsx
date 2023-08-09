import React from 'react';
import AnzLogo from 'img/anz-logo.png';

function App() {
    return (
        <nav className="navbar" role="navigation">
            <div className="navbar__item navbar__item--content-centered">
                <a
                    href="/"
                    className="navbar__anz-link-logo"
                    aria-label="ANZ Home"
                >
                    <img src={AnzLogo} alt="ANZ Logo" />
                </a>
                <span className="navbar__tagline">
                    ANZ Institutional Insights
                </span>
            </div>
            <div className="navbar__item navbar__item--content-centered">
                <span>John doe</span>
            </div>
        </nav>
    );
}

export default App;
