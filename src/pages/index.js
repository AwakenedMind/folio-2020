import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from '../components/Header';
// import Prism from "prismjs"

const IndexPage = () => {
  const code = `const foo = 'foo';
  const bar = 'bar';
  console.log(foo + bar);
  `

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
      <Header />
      <SEO title="Home" />
    </Layout >
  )
}

export default IndexPage
