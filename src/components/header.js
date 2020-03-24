import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './Header.module.scss'
import { Location } from '@reach/router'

const Header = (props) => (
  <header className={styles.header}>
    {/* {props.route === "/" ? <Link to={props.route}>Projects</Link> : <Link to="/">Home</Link>} */}
    <h3>Work</h3>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
