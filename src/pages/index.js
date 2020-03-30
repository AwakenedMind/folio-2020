import React, { useState } from "react"
import SEO from "../components/seo"
import styles from '../components/Index.module.scss'
import LandingScroll from '../images/landing-scroll.svg'
import SocialLinks from '../components/SocialLinks'
import ProjectCard from '../components/ProjectCard'
import { graphql } from 'gatsby'
import DestroyGames from '../images/destroygames.png'
import DevSound from '../images/devsound.png'
import CrownStudio from '../images/crownstudio.png'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Header from '../components/Header'
import { Location } from '@reach/router'
import Img from 'gatsby-image'
import "../components/layout.css"
import Layout from '../components/Layout';

const IndexPage = (props) => {


  // const projects = [
  //   {
  //     title: "DestroyGames",
  //     date: "Feb 19' - Current",
  //     description: "DestroyGames.com is a gaming platform for playing .io games (popular multiplayer browser games). Players can easily visit the site and find their next favorite game.",
  //     stack: ["ReactJS", "GatsbyJS", "Styled Components", "Contentful", "Firebase", "Netlify Auth", "Jest", "CircleCI"],
  //     image: data.destroygames.childImageSharp.fluid
  //   },
  //   {
  //     title: "CrownStudio",
  //     date: "Sept 19'",
  //     description: "CrownStudio is a digital agency mockup wireframed in Figma based in Brisbane, Au. The landing page is built with industry standard web design & UI/UX trends.",
  //     stack: ["ReactJS", "Javascript", "HTML5", "CSS3", "Sass"],
  //     image: data.crownstudio.childImageSharp.fluid
  //   },
  //   {
  //     title: "DevSound(WIP)",
  //     date: "February 20' - Current",
  //     description: "DevSound is a fullstack application that uses SpotifyAPI to connect developers through music",
  //     stack: ["Create-React-App", "NodeJS", "HTML5", "CSS Modules"],
  //     image: data.devsound.childImageSharp.fluid
  //   }
  // ]
  console.log(props)

  return (
    <Layout
      path={props.location.pathName}
      leftTitleName={"Name"}
      leftTitle={"Robert Arteaga"}
      leftSubTitle={"Lets Work Together?"}
      rightTitleName={"Occupation"}
      rightTitle={"Frontend Developer & Designer"}
      image={props.data.folio.childImageSharp.fluid}
    />

    // <main className={styles.main}>
    //   <Header route={props.location.pathname} />
    //   <div className={styles.verticalLine}></div>
    //   <div className={styles.horizontalLine}></div>
    //   <section className={styles.leftContent}>
    //     <div className={styles.titleWrapper}>
    //       <div className={styles.titleName}>name</div>
    //       <h1 className={styles.title}>Robert arteaga</h1>
    //       <h4 className={styles.subTitle}>Lets Work Together</h4>
    //     </div>
    //     <h5 className={styles.availForHire}>Available For Hire</h5>
    //   </section>
    //   <section className={styles.rightContent}>
    //     <img src={Folio} />
    //     <div className={styles.occupationWrapper}>
    //       <div className={styles.occupationTitle}>Occupation</div>
    //       <div className={styles.occupation}>Frontend Developer & Designer</div>
    //     </div>
    //   </section>
    //   <SocialLinks />
    //   {console.log(props)}
    // </main>
  )
}

export default IndexPage

export const query = graphql`
  query {

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