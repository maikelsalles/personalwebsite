import { Metadata } from "next"
import styles from "./portfolio.module.scss"
import globals from "../globals.module.scss"
import Image from 'next/image'

import img1 from "@img/portfolio/Design_System_Engineer.jpg";
import img2 from "@img/portfolio/Head_of_Product_Design.jpg";
import img3 from "@img/portfolio/Medical_Platform.jpg";
import img4 from "@img/portfolio/Personal_Website.jpg";

export const metadata: Metadata = {
    title: "Portfolio - Maikel Salles",
    description: "An overview on my latest projects."
}

export default function Portfolio() {
    return (
        <section id="portfolio" className={`${styles.resumeContainer} ${globals.wrapper} ${globals.sectionPadding} ${globals.twoCollumns} ${globals.coloredGradient}`}>
            <div className={`${globals.stickyIt} ${styles.whiteTxt}`}>
                <h2>Portfolio</h2>
                <p>
                Explore my latest projects, where design meets functionality. From crafting intuitive Design Systems to delivering impactful UI, UX, and Product Design solutions, these works highlight my passion for innovation and user-centered design.
                </p>
            </div>
            <div className={styles.portfolioList}>
                <div className={styles.portfolioItem}>
                <a href={`${process.env.NEXT_PUBLIC_SITE_URL}/portfolio/design-system-engineer`}>
                    <h3>Design System Engineer</h3>
                    <picture>
                    <source srcSet={img1.src} />
                    <Image
                        src={img1}
                        alt="This is my photograph. I have a bald head, green eyes, and Caucasian ethnicity. I'm wearing a dark purple shirt paired with a navy blue blazer. I`m with a calm expression."
                        width={768}
                        height={420}
                    />
                    </picture>
                </a>
                </div>
                <div className={styles.portfolioItem}>
                <a href={`${process.env.NEXT_PUBLIC_SITE_URL}/portfolio/head-of-product-design`}>
                    <h3>Head of Product Design</h3>
                    <picture>
                    <source srcSet={img2.src} />
                    <Image
                        src={img2}
                        alt="This is my photograph. I have a bald head, green eyes, and Caucasian ethnicity. I'm wearing a dark purple shirt paired with a navy blue blazer. I`m with a calm expression."
                        width={768}
                        height={420}
                    />
                    </picture>
                </a>
                </div>
                <div className={styles.portfolioItem}>
                <a href={`${process.env.NEXT_PUBLIC_SITE_URL}/portfolio/ux-ui-medical-platform`}>
                    <h3>UX/UI Medical Platform</h3>
                    <picture>
                    <source srcSet={img3.src} />
                    <Image
                        src={img3}
                        alt="This is my photograph. I have a bald head, green eyes, and Caucasian ethnicity. I'm wearing a dark purple shirt paired with a navy blue blazer. I`m with a calm expression."
                        width={768}
                        height={420}
                    />
                    </picture>
                </a>
                </div>
                <div className={styles.portfolioItem}>
                <a href={`${process.env.NEXT_PUBLIC_SITE_URL}/portfolio/personal-website`}>
                    <h3>Personal Website</h3>
                    <picture>
                    <source srcSet={img4.src} />
                    <Image
                        src={img4}
                        alt="This is my photograph. I have a bald head, green eyes, and Caucasian ethnicity. I'm wearing a dark purple shirt paired with a navy blue blazer. I`m with a calm expression."
                        width={768}
                        height={420}
                    />
                    </picture>
                </a>
                </div>
            </div>
        </section>
    )
}