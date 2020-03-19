import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
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
      <SEO title="Home" />
    </Layout >
  )
}

export default IndexPage
