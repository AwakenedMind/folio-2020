import React from 'react'
import { graphql, Link } from 'gatsby'
import styles from '../components/Projects.module.scss'
import Img from 'gatsby-image'
import Header from '../components/Header'

/*
  bookmark october 11 2019
  crown october 15 2019
*/

const Projects = (props) => {
  return (
    <>
      <Header />
      <div className={styles.projectWrapper}>
        <Link to="/destroygames">
          <div className={styles.project}>
            <div className={styles.projectContent}>
              <div className={styles.imageWrapper}>
                <Img fluid={props.data.destroygames.childImageSharp.fluid} />
                <div className={styles.projectNumber}>01</div>
              </div>
              <h2>DestroyGames</h2>
            </div>
          </div>
        </Link>
        <Link to="/devsound">
          <div className={styles.project}>
            <div className={styles.projectContent}>
              <div className={styles.imageWrapper}>
                <Img fluid={props.data.devsound.childImageSharp.fluid} />
                <div className={styles.projectNumber}>02</div>
              </div>
              <h2>Devsound</h2>
            </div>
          </div>
        </Link>
        <Link to="crownstudio">
          <div className={styles.project}>
            <div className={styles.projectContent}>
              <div className={styles.imageWrapper}>
                <Img fluid={props.data.crownstudio.childImageSharp.fluid} />
                <div className={styles.projectNumber}>03</div>
              </div>
              <h2>CrownStudio</h2>
            </div>
          </div>
        </Link>
        <h1 className={styles.projectTitle}>Projects</h1>
      </div>
    </>
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
