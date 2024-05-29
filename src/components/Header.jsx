import React from 'react'

function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <img src="/public/images/icon.png" alt="icon" width={40} height={40} />
                <span>noted.io</span>
            </div>
            <p className="header__text">
                Take your <span className="header__text-highlight">notes</span> easily with us.
            </p>
        </div>
    )
}

export default Header