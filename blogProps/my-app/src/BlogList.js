import React from "react"
import BlogPost from "./BlogPost"
import BlogPostData from "./BlogPostData"

function BlogList() {
    const blogComponents = BlogPostData.map(post => <BlogPost title={post.title} />)

    return (
        <div>
            {blogComponents}
        </div>
    )
}

export default BlogList