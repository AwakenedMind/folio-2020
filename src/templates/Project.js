import React from 'react'
import { graphql } from 'gatsby'
import { Location } from '@reach/router'
import styles from '../components/Project.module.scss'
import SocialLinks from '../components/SocialLinks'
import Header from '../components/Header'
import Img from 'gatsby-image'

const Project = props => {
  console.log(props)
  const dev = props.pageContext.route


  const getImage = (dev) => {
    const devsound = { path: "/devsound", img: props.data.devsound.childImageSharp.fluid }
    const destroygames = { path: "/destroygames", img: props.data.destroygames.childImageSharp.fluid }
    const crownstudio = { path: "/crownstudio", img: props.data.crownstudio.childImageSharp.fluid }

    if (dev.includes(devsound.path)) {
      return devsound.img
    }

    if (dev.includes(destroygames.path)) {
      return destroygames.img
    }

    if (dev.includes(crownstudio.path)) {
      return crownstudio.img
    }
  }


  const generateLayout = (path) => {

    return (
      <main className={styles.main}>
        <Header route={props.location.pathName} />
        <div className={styles.verticalLine}></div>
        <div className={styles.horizontalLine}></div>
        <section className={styles.leftContent}>
          <div className={styles.titleWrapper}>
            <div className={styles.titleName}>{"Project"}</div>
            <h1 className={styles.title}>{props.pageContext.title}</h1>
            <h4 className={styles.subTitle}>{null}</h4>
          </div>
          <h5 className={styles.availForHire}>Available For Hire</h5>
        </section>
        <section className={styles.rightContent}>
          <div className={styles.imageWrapper}>
            {props.path === "/devsound" ?
              <Img fluid={props.data.devsound.childImageSharp.fluid} />
              : null}
            {props.path === "/crownstudio" ?
              <Img fluid={props.data.crownstudio.childImageSharp.fluid} alt="crownstudio" /> : null}
            {props.path === "/destroygames" 
            ? (<a href="https://destroygames.com"><Img fluid={props.data.destroygames.childImageSharp.fluid} alt="destroygames" /></a>) 
            : null}
          </div>
          <div className={styles.occupationWrapper}>
            <div className={styles.occupationTitle}>{"Summary"}</div>
            <div className={styles.occupation}>{props.pageContext.description}</div>
          </div>
          <div className={styles.techstack}>
            <h3 className={styles.occupationTitle}>Techstack</h3>
          <ul>
            {props.pageContext.techstack.map(stack => {
              return (<li>{stack}</li>)
            })}
          </ul>

          </div>
        </section>
        <SocialLinks />
      </main>
    )
  }
  return (
    generateLayout(props.path)
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

    dev:file(relativePath: { in: $dev }) {
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