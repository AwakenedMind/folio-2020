import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './Header.module.scss'

const Header = () => (
  <header className={styles.header}>
    <div>
      <h1>Robert Arteaga</h1>
    </div>
    <nav>
      <Link to="#Projects">
        Projects
      </Link>
      <Link to="#Projects">
        Reach Out
      </Link>
      {/* <div>Projects</div> */}
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
