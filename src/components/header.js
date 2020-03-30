import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './Header.module.scss'
import { Location } from '@reach/router'

const Header = (props) => {
  console.log(props)
  return (
    <header className={styles.header}>

      {/* {props.route === "/" ? <AniLink to={props.location.pathName} cover bg="blue" duration={0.7}>Projects</AniLink> : <AniLink to="/">Home</AniLink>} */}

      {props.route === "/" ? <Link to={props.route}>Projects</Link> : <Link to="/">Home</Link>}

      {/* <AniLink to={"/projects/"} cover bg="blue" duration={0.7}>Home</AniLink> */}

      {/* <h3>Work</h3> */}
      {/* <AniLink fade to="/devsound">Devsound</AniLink> */}
    </header>)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
