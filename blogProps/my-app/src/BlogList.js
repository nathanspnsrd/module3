import React from "react"
import BlogPost from "./BlogPost"
import blogPostData from "./BlogPostData"

function BlogList() {
    const blogComponents = blogPostData.map(blogPost => <BlogPost {...blogPost} />)

    return (
        <div className="mainContent">
            <div className="blogList">
                {blogComponents}
            </div>
            <button className="button">OLDER POSTS</button>
        </div>    
    )
}

export default BlogList