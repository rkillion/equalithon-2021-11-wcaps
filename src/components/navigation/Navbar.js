export default function Navbar() {
    return (
        <nav id="navbar">
            <img className="wcaps-logo-large" src="//images.squarespace-cdn.com/content/v1/5eb9913ab179d02117a5f7db/1623423279200-C26AK1SJRF25JMP8FG1E/WCAPS-logo-original-opt2-fullcolor.png?format=1500w" alt="WCAPS" />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
            {/* <div id="navlinks">
                <span>links here</span>
            </div> */}
        </nav>
    )
}