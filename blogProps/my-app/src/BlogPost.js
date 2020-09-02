import React from "react"


function BlogPost(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <p>Posted by {props.author} on {props.date}</p>
        </div>
    )
}

export default BlogPost