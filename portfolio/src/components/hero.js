import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"

import BackgroundImage from "gatsby-background-image"

const StyledBackgroundImage = styled(BackgroundImage)`
  background: linear-gradient(
    to bottom,
    rgba(245, 246, 252, 0.52),
    rgba(117, 19, 93, 0.73)
  );
  height: 100vh;
  width: 100%;
  background-size: cover;
  opacity: 1 !important;
  color: white;
`

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  h1 {
    font-size: 4rem;
  }
`
function Hero({ className }) {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "elephants.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid

  return (
    <StyledBackgroundImage Tag="section" fluid={imageData}>
      <Flex>
        <h1>Hi, I am Joye Shonubi</h1>
        <p>
          <span>I am full stack software engineer .</span>
          <span> You might not know but I really love wildlife</span>
        </p>
      </Flex>
    </StyledBackgroundImage>
  )
}

export default Hero
