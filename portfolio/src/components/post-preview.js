import React from "react"
// import { css } from "@emotion/react"
// import { Link } from "gatsby"
// import Image from "gatsby-image"

const PostPreview = ({ post }) => {
  return (
    <article>
      <h1>{post.title} </h1>
      <h3>THis was written by {post.author}</h3>
      <p>{post.excerpt}</p>
    </article>
  )
}

export default PostPreview

// <article
//     css={css`
//       border-bottom: 1px solid #ddd;
//       display: flex;
//       margin-top: 0;
//       padding-bottom: 1rem;
//       :first-of-type {
//         margin-top: 1rem;
//       }
//     `}
//   >
//     <Link
//       to={post.slug}
//       css={css`
//         margin: 1rem 1rem 0 0;
//         width: 100px;
//       `}
//     >
//       <Image
//         css={css`
//           * {
//             margin-top: 0;
//           }
//         `}
//         fluid={post.image.sharp.fluid}
//         alt={post.title}
//       />
//     </Link>
//     <div>
//       <h3>
//         <Link to={post.slug}>{post.title}</Link>
//       </h3>
//       <p>{post.excerpt}</p>
//       <Link to={post.slug}>read this post &rarr;</Link>
//     </div>
//   </article>
