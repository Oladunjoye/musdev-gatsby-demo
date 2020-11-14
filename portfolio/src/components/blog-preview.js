import React from "react"
import useBlogData from "../hooks/useBlogData"
import PostPreview from "./post-preview"

export default function BlogPreview() {
  const blogPosts = useBlogData()

  return (
    <div style={{ height: "100vh" }}>
      {blogPosts.map((post, i) => (
        <PostPreview key={i} post={post} />
      ))}
    </div>
  )
}
