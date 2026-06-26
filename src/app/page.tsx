/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next'
import './globals.scss'
import Button from '@/app/components/button'
import styles from './home.module.scss'
import globals from './globals.module.scss'
import Image from 'next/image'
import frontPage from '@img/maikel-salles.png'
import Experience from '@components/resume/experience'
import Spacer from '@components/spacer/spacer'
import Education from '@components/resume/education'
import Stack from '@components/resume/stack'
import AboutComponent from '@components/about/about'


import Contact from './components/contact/page'
import Portfolio from './portfolio/page'

export const metadata: Metadata = {
  title: 'Maikel Salles - UX UI Designer | UI Developer | Accessibility Specialist',
  description: 'Hello world! This is my personal website',
}

export default function Home() {
  return (
    <>
      <section className={`${styles.featuredSection} ${globals.wrapper}`}>
        <h1>Maikel Salles</h1>
        <p>
          <strong>Product Designer | Front End Developer | Accessibility Specialist</strong><br/>
          Harmonizing design and code for elegant and inclusive experiences,
          where user needs are the cornerstone.
        </p>
        <picture className={styles.frontPic}>
            <source srcSet={frontPage.src} />
            <Image
              src={frontPage}
              alt="This is my photograph. I have a bald head, green eyes, and Caucasian ethnicity. I'm wearing a dark purple shirt paired with a navy blue blazer. I`m with a calm expression."
              width={503}
              height={539}
            />
          </picture>
      </section>
      <Portfolio />
      <section id="about">
        <AboutComponent />
      </section>
      <section id="resume" className={`${globals.wrapper} ${globals.twoCollumns} ${globals.sectionPadding}`}>
        <div className={`${globals.stickyIt}`}>
          <h2>Experience</h2>
        </div>
        <div className={globals.sectionPadding}>
          <Experience />
        </div>
      </section>
      <Spacer />
      <section className={`${globals.wrapper} ${globals.twoCollumns} ${globals.sectionPadding}`}>
        <div className={`${globals.stickyIt}`}>
          <h2>Stack</h2>
        </div>
        <div className={globals.sectionPadding}>
          <Stack />
        </div>
      </section>
      <Spacer />
      <section className={`${globals.wrapper} ${globals.twoCollumns} ${globals.sectionPadding}`}>
        <div className={`${globals.stickyIt}`}>
          <h2>Education</h2>
        </div>
        <div className={globals.sectionPadding}>
          <Education />
        </div>
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  )
}
