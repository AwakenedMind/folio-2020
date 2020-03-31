import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './Header.module.scss'
import { Location } from '@reach/router'

const Header = (props) => {
  console.log(props)
  return (
    <header className={styles.header}>
      {props.route === "/" ? <Link to="projects">Projects</Link> : <Link to="/">Home</Link>}
    </header>)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
