import React from 'react'
import styles from './ProjectCard.module.scss';

import Img from 'gatsby-image'

const ProjectCard = (props) => {
  console.log(props)
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImageWrapper}>
        {/* <Img fluid={path} className={styles.projectImage} /> */}
      </div>
      <div className={styles.projectDescriptionWrapper}>
        <div className={styles.projectDescriptionContent}>
          <div className={styles.projectDescriptionTitleWrapper}>
            {/* <h3>{title}</h3> */}
            {/* <div>{date}</div> */}
          </div>
          <p>
            {/* {description} */}
          </p>
          {/* <ul className={styles.projectList}>
            {stack.map(library => {
              return (<li>{library}</li>)
            })}
          </ul> */}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard




