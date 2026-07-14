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
            I am a Product Designer and Design Systems Specialist based in Calgary, with over 13 years of experience across Product Design, Accessibility, Front-End Development, and Product Leadership.
          </p>
          <p>
            My work sits at the intersection of Design, Product, and Engineering. I help teams translate complex business needs into clear user flows, accessible interfaces, reusable components, and implementation-ready documentation.
          </p>
          <p>
            Before moving to Canada, I built my career in Brazil’s fast-paced technology market, working with enterprise software, financial products, design systems, and cross-functional teams. Today, I am focused on refining my skills for the North American market, with a strong focus on scalable product design, accessibility, and modern design-engineering collaboration.
          </p>
        </div>
      </article>
      <section className={`${globals.wrapper} ${styles.section} ${globals.sectionPadding} ${globals.coloredGradient}`}>
        <h3>Key Achievements</h3>
        <ul className={`${styles.cards}`}>
          <li className={`${styles.card}`}>
            <span><strong>30%</strong> faster delivery</span>
            Reduced design and development time through a scalable Design System.
          </li>
          <li className={`${styles.card}`}>
            <span><strong>90%</strong> accessibility improvement</span>
            Improved WCAG compliance across an enterprise platform.
          </li>
          <li className={`${styles.card}`}>
            <span><strong>60%</strong> front-end time reduction</span>
            Created a W3C-standard component library for reusable UI implementation.
          </li>
          <li className={`${styles.card}`}>
            <span><strong>50%</strong> fewer customer inquiries</span>
            Improved UX and interface clarity for a real estate digital product.
          </li>
        </ul>
      </section>
  </>
  )
}
