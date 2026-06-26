/* eslint-disable react/no-unescaped-entities */
import styles from './about.module.scss'
import globals from '../../globals.module.scss'
import Image from 'next/image'
import FotoH from '@img/maikel-salles-h.jpg'
import FotoW from '@img/maikel-salles-w.jpg'

export default function AboutComponent() {
  return (
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
        <blockquote>
          A skilled Designer and Developer with experience in the enterprise industry, I'm a Brazilian living in Calgary AB, since August 2023, and currently seeking new challenging opportunities in the Canadian tech industry.
        </blockquote>
        <p>
          Hy there,
        </p>
        <p>
          I strive to motivate and push myself and my peers forward to achieve common goals. A strong team is essential to success, and it's my personal goal to contribute and cultivate a collaborative and positive work environment where everyone feels valued and motivated.
        </p>
        <p>
          With strong critical thinking, I'm used to working in agile environments within multidisciplinary teams, with lots of collaboration!
        </p>
        <p>
          As an accessibility specialist, I understand the importance of inclusive design, so I always work hard to ensure the company's internal communication and products are accessible to everyone. I'm an expert at creating responsive designs for different devices and screen sizes.
        </p>
        <p>
          I'm confident that my skills and experience make me a great asset to any team, and I'm always looking for new opportunities to learn, grow, and exchange knowledge.
        </p>  
      </div>
    </article>
  )
}
