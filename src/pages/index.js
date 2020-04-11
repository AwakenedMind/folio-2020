import React from "react"
import SEO from "../components/Seo"
import { graphql } from "gatsby"
import { Location } from "@reach/router"
import "../components/Layout.css"
import Layout from "../components/Layout"

const IndexPage = props => {
  console.log(props)
  return (
    <>
      <SEO title="Robert Arteaga | ReactJS Developer Based in Los Angeles area" />
      <Layout
        path={props.path}
        leftTitleName={"Name"}
        leftTitle={"Robert Arteaga"}
        leftSubTitle={"Lets Work Together?"}
        rightTitleName={"Occupation"}
        rightTitle={"Frontend Developer & Designer"}
        image={props.data.folio.childImageSharp.fluid}
      />
    </>
  )
}

export default IndexPage

export const root = graphql`
  query {
    dev: file(relativePath: { eq: "crownstudio.png" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }

    crownstudio: file(relativePath: { eq: "crownstudio.png" }) {
      ...projectImage
    }

    destroygames: file(relativePath: { eq: "destroygames.png" }) {
      ...projectImage
    }

    devsound: file(relativePath: { eq: "devsound.png" }) {
      ...projectImage
    }

    folio: file(relativePath: { eq: "folio-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export const projectImage = graphql`
  fragment projectImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
