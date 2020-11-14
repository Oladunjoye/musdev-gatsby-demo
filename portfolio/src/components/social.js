import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"

const ImageContainer = styled.figure`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

const Wrapper = styled.div`
  display: grid;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 5vw);
  grid-gap: 25px;

  .gallery-item-1 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .gallery-item-2 {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .gallery-item-3 {
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 6;
  }

  .gallery-item-4 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 6;
  }

  .gallery-item-5 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 6;
    grid-row-end: 9;
  }

  .gallery-item-6 {
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 6;
    grid-row-end: 9;
  }
`

export default function Insta() {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode(limit: 6) {
        nodes {
          id
          caption
          username
          localFile {
            image: childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  const instaPosts = data.allInstaNode.nodes.reverse().map(node => ({
    ...node.localFile.image,
    username: node.username,
    caption: node.caption,
    id: node.id,
  }))
  return (
    <div>
      <h1> View my instagram feed</h1>
      <Wrapper>
        {instaPosts.map((post, i) => {
          return (
            <ImageContainer key={i} className={`gallery-item-${i + 1}`}>
              <Image fluid={post.fluid} />
            </ImageContainer>
          )
        })}
      </Wrapper>
    </div>
  )
}
