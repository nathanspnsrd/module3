import React from "react"


function BlogPost(props) {
    return (
        <div className="post">
            <h2 className="postTitle">{props.title}</h2>
            <h3 className="postSubtitle">{props.subTitle}</h3>
            <p className="postInfo">Posted by {props.author} on {props.date}</p>
        </div>
    )
}

export default BlogPost