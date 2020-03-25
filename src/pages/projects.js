import React from 'react'
import { graphql } from 'gatsby'
import styles from '../components/Projects.module.scss'
import Img from 'gatsby-image'

const Projects = (props) => {
  return (
    <div className={styles.projectWrapper}>
      <div className={styles.project}>
        <div className={styles.projectContent}>
          <div className={styles.imageWrapper}>
            <Img fluid={props.data.devsound.childImageSharp.fluid} />
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.projectContent}>
          <div className={styles.imageWrapper}>
            <Img fluid={props.data.devsound.childImageSharp.fluid} />
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.projectContent}>
          <div className={styles.imageWrapper}>
            <Img fluid={props.data.devsound.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query {

        dev: file(relativePath: {eq: "crownstudio.png" }) {
        childImageSharp {
      fixed(width: 200, height: 200) {
        ...GatsbyImageSharpFixed_withWebp_tracedSVG
      }
      }
    }

    crownstudio: file(relativePath: {eq: "crownstudio.png" }) {
        ...projectImage
      }

      destroygames: file(relativePath: {eq: "destroygames.png" }) {
        ...projectImage
      }

      devsound: file(relativePath: {eq: "devsound.png" }) {
        ...projectImage
      }

      folio: file(relativePath: {eq: "folio-img.png" }) {
        childImageSharp {
      fixed(width: 500, height: 500) {
        ...GatsbyImageSharpFixed_withWebp
      }
      }     
    }
  }
  `


export default Projects
