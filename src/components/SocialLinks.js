import React from 'react'
import styles from './SocialLinks.module.scss'
const SocialLinks = (props) => {

  var links = [
    { endpoint: 'githublink', text: "git" },
    { endpoint: "githublink", text: "lin" },
    { endpoint: "https://codepen.io/chantel-sky/pens/showcase", text: "twi" }
  ];

  const lightLink = (link) => {
    return (
      <a href={link.endpoint} className={styles.lightLink}>{link.text}</a>
    )
  }
  const darkLink = (link) => {
    return (
      <a href={link.endpoint} className={styles.darkLink}>{link.text}</a>
    )
  }

  return (
    <ul className={styles.socialLinks}>
      {links.map((link) => (
        <li key={link.endpoint}>
          {props.text === "white" ? lightLink(link) : darkLink(link)}
        </li>
      ))}
    </ul>
  )
}
export default SocialLinks




  // <ul className={styles.socialLinks}>
  //   {links.map((link, key) => (
  //     <li key={key}>
  //       {props.text === "white" ? <a href={link.endpoint} className={styles.lightLink}>{link.text}</a> : <a href={link.endpoint} className={styles.darkLink}>{link.text}</a>}
  //     </li>
  //   ))}
  // </ul>

  // <ul className={styles.socialLinks}>
  //   {links.map((link, key) => (
  //     <li key={key}>
  //       {props.text === "white" ? lightLink(link) : darkLink(link)}
  //     </li>
  //   ))}
  // </ul>