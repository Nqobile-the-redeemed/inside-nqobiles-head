export default function Footer () {
    return (
        <div className="footer">
            <div className="footer__logo">
                <link to="/">
                    <svg className="footerLogo" width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.3048 22.2468C0.3048 10.5828 9.8304 0.959992 21.4944 0.959992C33.2556 0.959992 42.7812 10.5828 42.7812 22.2468V43.4364C42.7812 46.4496 42.0036 51.99 47.058 51.99C49.3908 51.99 51.3348 50.1432 51.3348 47.8104V0.959992H68.3448V47.8104C68.3448 59.4744 58.722 69 47.058 69C35.2968 69 25.7712 59.4744 25.7712 47.8104V22.2468C25.7712 16.7064 17.3148 16.7064 17.3148 22.2468V69H0.3048V22.2468Z" fill="#0D1821"/>
                    </svg>
                </link>
            </div>
            <div className="footerContacts">
                <p className="footerText">Phone: +44 736 899 8897</p>
                <p className="footerText">Email: nqobilemadziba98@gmail.com</p>
            </div>
            <div className="footer__links">
                <link className='footerButton' to="/portfolio">Portfolio</link>
                <link className='footerButton' to="/resume">Resume</link>
                <link className='footerButton' to="/about">About</link>
                <link className='footerButton' to="/posts">Posts</link>
                <link className='footerButton' to="/contact">Contact</link>
            </div>
            <div className="footer__socials">
                <link className="footerSocials" to="https://www.linkedin.com/in/nqobile-madziba-2b1b3b1b2/">
                    <svg className="footerIcon" width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 24.5838C21 22.6057 22.6561 21 24.6975 21H67.3325C69.3747 21 71.03 22.6057 71.03 24.5838V67.4468C71.03 69.4255 69.3747 71.03 67.3325 71.03H24.6975C22.6563 71.03 21 69.4257 21 67.4474V24.5832V24.5838Z" fill="#006699"/>
                        <path d="M36.2032 62.8686V40.345H28.7167V62.8686H36.204H36.2032ZM32.4615 37.2703C35.0717 37.2703 36.6967 35.5407 36.6967 33.3793C36.6478 31.1686 35.0717 29.4873 32.5111 29.4873C29.9489 29.4873 28.2754 31.1686 28.2754 33.3791C28.2754 35.5405 29.8998 37.2701 32.4124 37.2701H32.4609L32.4615 37.2703ZM40.3471 62.8686H47.833V50.2918C47.833 49.6195 47.8819 48.9455 48.0796 48.4653C48.6206 47.1198 49.8524 45.7269 51.921 45.7269C54.6293 45.7269 55.7133 47.7922 55.7133 50.8204V62.8686H63.1991V49.9543C63.1991 43.0363 59.5062 39.8169 54.5808 39.8169C50.5426 39.8169 48.7691 42.074 47.7838 43.6112H47.8336V40.3458H40.3475C40.4452 42.4588 40.3469 62.8694 40.3469 62.8694L40.3471 62.8686Z" fill="white"/>
                    </svg>
                </link>

        </div>
    )
}
