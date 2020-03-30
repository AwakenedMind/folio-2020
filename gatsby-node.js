/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// You can delete this file if you're not using it
const path = require(`path`);

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  const ProjectPage = path.resolve("./src/templates/Project.js")


  const projects = [
    {
      title: "DestroyGames",
      date: "Feb 19' - Current",
      description: "DestroyGames.com is a gaming platform for playing .io games (popular multiplayer browser games). Players can easily visit the site and find their next favorite game.",
      stack: ["ReactJS", "GatsbyJS", "Styled Components", "Contentful", "Firebase", "Netlify Auth", "Jest", "CircleCI"],
      path: "destroygames"
    },
    {
      title: "CrownStudio",
      date: "Sept 19'",
      description: "CrownStudio is a digital agency mockup wireframed in Figma based in Brisbane, Au. The landing page is built with industry standard web design & UI/UX trends.",
      stack: ["ReactJS", "Javascript", "HTML5", "CSS3", "Sass"],
      path: "crownstudio"

    },
    {
      title: "DevSound(WIP)",
      date: "February 20' - Current",
      description: "DevSound is a fullstack application that uses SpotifyAPI to connect developers through music",
      stack: ["Create-React-App", "NodeJS", "HTML5", "CSS Modules"],
      path: "devsound"
    }
  ]

  projects.forEach(project => {
    createPage({
      path: `/${project.path}`,
      component: ProjectPage,
      context: {
        title: `${project.title}`,
        description: `${project.description}`,
        techstack: project.stack,
        route: project.path
      },
    })
  })
}




