import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from '../components/Index.module.scss'
import LandingScroll from '../images/landing-scroll.svg'
import SocialLinks from '../components/SocialLinks'
import ProjectCard from '../components/ProjectCard'
import Img from 'gatsby-image'
// import Prism from "prismjs"

const IndexPage = ({ data }) => {


  return (
    <Layout>
      <SEO title="Home" />
      <section className={styles.landingSection}>
        <div className={styles.landingScrollWrapper}>
          <img src={LandingScroll} className={styles.landingScroll} />
        </div>
        <p className={styles.landingCopy}>a frontend developer and designer looking for a role developing sites using <p className={styles.landingCopyReact}>ReactJS<span></span></p>
        </p>
        <SocialLinks text="black" />
      </section>
      <section className={styles.projectSection}>
        <div className={styles.projectTitleWrapper}>
          <h2>Projects</h2>
        </div>
      </section>
      {console.log(data)}
      <ProjectCard images={data} />

      {/* <Img fluid={data.crownstudio.childImageSharp.fluid} /> */}
    </Layout >
  )
}

export default IndexPage

export const query = graphql`
  query {
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

export const projectImage = graphql`
  fragment projectImage on File {
    childImageSharp {
      fixed(width: 200, height: 200) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`





// const code = `const foo = 'foo';
// const bar = 'bar';
// console.log(foo + bar);
// `

// React.useEffect(() => {
//   // call the highlightAll() function to style our code blocks
//   Prism.highlightAll()
// })

{/* <div className="code-container">
    <pre>
      <code className="language-javascript">{code}</code>
    </pre>
  </div> */}