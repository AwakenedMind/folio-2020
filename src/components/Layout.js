import React from 'react'
import styles from './Layout.module.scss'
import SocialLinks from './SocialLinks'
import Header from './Header'
import Folio from '../images/folio-img.png'

const Layout = (props) => {
  console.log(props)

  return (
    <main className={styles.main}>
      <Header route={props.path} />
      <div className={styles.verticalLine}></div>
      <div className={styles.horizontalLine}></div>
      <section className={styles.leftContent}>
        <div className={styles.titleWrapper}>
          <div className={styles.titleName}>{props.leftTitleName}</div>
          <h1 className={styles.title}>{props.leftTitle}</h1>
          <h4 className={styles.subTitle}>{props.leftsubTitle}</h4>
        </div>
        <h5 className={styles.availForHire}>
          <a href="mailto:html5engineer@gmail.com?subject=Enquiry">
            Available For Hire
        </a>
        </h5>
      </section>
      <section className={styles.rightContent}>
        <div className={styles.imageWrapper}>
          <img src={Folio} />
        </div>
        <div className={styles.occupationWrapper}>
          <div className={styles.occupationTitle}>{props.rightTitleName}</div>
          <div className={styles.occupation}>{props.rightTitle}</div>
        </div>
      </section>
      <SocialLinks />
    </main>
  )
}

export default Layout
