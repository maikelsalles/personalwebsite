/* eslint-disable react/no-unescaped-entities */
import styles from './about.module.scss'
import globals from '../../globals.module.scss'
import Image from 'next/image'
import FotoH from '@img/maikel-salles-h.jpg'
import FotoW from '@img/maikel-salles-w.jpg'

export default function AboutComponent() {
  return (
    <>
      <article className={`${styles.article} ${globals.wrapper} ${globals.sectionPadding} ${globals.twoCollumns} ${globals.waveGgradient}`}>
        <div className={`${styles.frontPic} ${globals.stickyIt}`}>
          <picture>
            <source srcSet={FotoH.src} media="(min-width: 600px)" />
            <Image
              src={FotoW}
              width={380}
              height={576}
              alt="A picture of me at my graduation. I'm wearing a navy blue blazer and a dark purple shirt. In the background, there's a light blue panel with some bright lights. I'm smiling, sporting a short beard, and I'm bald."
            />
          </picture>
        </div>
        <div className={`${styles.textContent} ${styles.imageContainer}`}>
          <h2>About me</h2>
          <p>
            I am a Senior Front-End Designer and Product Designer based in Calgary, Alberta, Canada, with 15+ years of experience creating responsive web and mobile products across enterprise software, payments, fleet management, healthcare, media, and startup environments.
          </p>
          <p>
            My work sits at the intersection of Design, Product, and Engineering. I translate research, analytics, user needs, and business requirements into user flows, prototypes, high-fidelity interfaces, Design Systems, and production-ready specifications.
          </p>
          <p>
            I use Human-Centered Design, accessibility, reusable component libraries, and front-end collaboration to reduce complexity, support consistent implementation, and create measurable value for users and organizations.
          </p>
        </div>
      </article>
      <section className={`${globals.wrapper} ${styles.section} ${globals.sectionPadding} ${globals.coloredGradient}`}>
        <h3>Key Achievements</h3>
        <ul className={`${styles.cards}`}>
          <li className={`${styles.card}`}>
            <span><strong>30%</strong> faster delivery</span>
            Reduced design and development time through improved Design System collaboration and reusable patterns.
          </li>
          <li className={`${styles.card}`}>
            <span><strong>90%</strong> of WCAG issues addressed</span>
            Addressed approximately 90% of identified WCAG issues across a large enterprise platform.
          </li>
          <li className={`${styles.card}`}>
            <span><strong>60%</strong> less development workload</span>
            Reduced development workload through an accessible, reusable component library.
          </li>
          <li className={`${styles.card}`}>
            <span><strong>50%</strong> faster qualified leads</span>
            Reduced the time required to reach a qualified real-estate lead by 50%.
          </li>
        </ul>
      </section>
  </>
  )
}
