import React from "react"

function Navbar() {
    return (
        <div className="navBar">
            <div className="headerWords">
                <h3 className="pageTitle">Start Bootstrap</h3>
                <ul className="navList">
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>SAMPLE POST</li>
                    <li>CONTACT</li>
                </ul>
            </div>
            <div className="centerStuff">
                <h1 className="cleanBlog">Clean Blog</h1>
                <h2 className="description">A Blog Theme by Start Bootstrap</h2>
            </div>
        </div>
    )
}

export default Navbar