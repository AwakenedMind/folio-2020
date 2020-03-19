import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from '../components/Index.module.scss'
import LandingScroll from '../images/landing-scroll.svg'
import SocialLinks from '../components/SocialLinks'
import ProjectCard from '../components/ProjectCard'
// import Prism from "prismjs"

const IndexPage = () => {
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
        <ProjectCard />
      </section>
    </Layout >
  )
}

export default IndexPage
