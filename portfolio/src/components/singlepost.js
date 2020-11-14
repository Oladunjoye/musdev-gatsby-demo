import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`

export default function singlePostLayout({ data: { mdx: post } }) {
  return (
    <Layout>
      <div>
        <p>{post.frontmatter.title}</p>

        <MDXRenderer>{post.body}</MDXRenderer>
        <p>Written {post.frontmatter.author}</p>
      </div>
    </Layout>
  )
}
