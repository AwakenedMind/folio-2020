import React from 'react'
import styles from './ProjectCard.module.scss';
import DestroyGames from '../images/destroygames.png'
import DevSound from '../images/devsound.png'
import CrownStudio from '../images/crownstudio.png'

const ProjectCard = () => {


  const projects = [
    {
      title: "DestroyGames",
      date: "Feb 19' - Current",
      description: "DestroyGames.com is a gaming platform for playing .io games (popular multiplayer browser games). Players can easily visit the site and find their next favorite game.",
      stack: ["ReactJS", "GatsbyJS", "Styled Components", "Contentful", "Firebase", "Netlify Auth", "Jest", "CircleCI"],
      image: DestroyGames,
    },
    {
      title: "CrownStudio",
      date: "Sept 19'",
      description: "CrownStudio is a digital agency mockup wireframed in Figma based in Brisbane, Au. The landing page is built with industry standard web design & UI/UX trends.",
      stack: ["ReactJS", "Javascript", "HTML5", "CSS3", "Sass"],
      image: CrownStudio
    },
    {
      title: "DevSound(WIP)",
      date: "February 20' - Current",
      description: "DevSound is a fullstack application that uses SpotifyAPI to connect developers through music",
      stack: ["Create-React-App", "NodeJS", "HTML5", "CSS Modules"],
      image: DevSound
    }
  ]

  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImageWrapper}>
        <img className={styles.projectImage} src={DevSound} />
      </div>
      <div className={styles.projectDescriptionWrapper}>
        <div className={styles.projectDescriptionContent}>
          <div className={styles.projectDescriptionTitleWrapper}>
            <h3>DestroyGames</h3>
            <div>Feb 19 - Current</div>
          </div>
          <p>
            DestroyGames.com is a gaming platform for playing .io games (popular multiplayer browser games). Players can easily visit the site and find their next favorite game.
          </p>
          <ul className={styles.projectList}>
            <li>Text</li>
            <li>Text</li>
            <li>Text</li>
            <li>Text</li>
            <li>Text</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard