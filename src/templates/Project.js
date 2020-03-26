import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout';

const Project = props => {
  return (
    <Layout
      path={props.location.pathName}
      leftTitleName={"Name"}
      leftTitle={"Robert Arteaga"}
      leftSubTitle={"Lets Work Together?"}
      rightTitleName={"Occupation"}
      rightTitle={"Frontend Developer & Designer"}
    />
  )
}

export default Project

export const query = graphql`
  query($dev: [String]) {

    devsound1:file(relativePath: { in: $dev }) {
      childImageSharp {
      fixed(width: 200, height: 200) {
        ...GatsbyImageSharpFixed_withWebp_tracedSVG
      }
    }    
  }

    dev:file(relativePath: { eq: "crownstudio.png" }) {
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
  }
`