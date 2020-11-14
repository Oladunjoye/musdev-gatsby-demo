import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function useBlogData() {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            author
          }
          excerpt
        }
      }
    }
  `)

  return data.allMdx.nodes.map(node => ({
    title: node.frontmatter.title,
    author: node.frontmatter.author,
    excerpt: node.excerpt,
  }))
}
