/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next"
import styles from "../portfolio.module.scss"
import globals from "../../globals.module.scss"
import Image from 'next/image'
import Button from "@/app/components/button";

import img1 from "@img/portfolio/personal-website-project.png";
import img2 from "@img/portfolio/personal-website-design-system.jpg";
import img3 from "@img/portfolio/personal-website-prototypes.png";
import img4 from "@img/portfolio/personal-website-repository.jpg";

export const metadata: Metadata = {
    title: "Personal website - Portfolio - Maikel Salles",
    description: "Read about my archivements over 10 years of experience."
}

export default function Resume() {
    return (
        <article className={`${globals.wrapper} ${globals.sectionPadding} ${styles.resumeContainer}`}>
            <header className={styles.titleContainer}>
                <p className={styles.eyebrow}>Personal Website</p>
                <h1>Personal website</h1>
                <p>Personal website and portfolio</p>
                <dl className={styles.caseDetails}>
                    <div>
                        <dt>Focus</dt>
                        <dd>DevOps, DesignOps, and interaction design</dd>
                    </div>
                    <div>
                        <dt>Platform</dt>
                        <dd>GitHub</dd>
                    </div>
                </dl>
            </header>
            <section className={styles.caseContainer} aria-labelledby="personal-website-overview">
                <h2 id="personal-website-overview">Overview</h2>
                <p>
                    After deciding to move to Canada, I realized it was the perfect time to finally develop my own personal website and portfolio. With this life change came the opportunity to fully dedicate myself to building a platform that represents my professional and creative journey.
                </p>
                <p>
                    I wanted to show all my skills, including DevOps, DesignOps, and interaction design, to create a seamless and visually captivating experience. Additionally, I'm committed to continuous improvement, ensuring that my website evolves with the latest trends and technologies. My website is not just a space to showcase my work, but also a way to share my passion for technology and connect with a new community.
                </p>
                <p>
                    I'm excited to share my journey and demonstrate how my comprehensive skill set can contribute to future projects in this new chapter of my life in Canada.
                </p>
            </section>
            <section className={`${styles.caseContainer} ${styles.titleSection}`} aria-labelledby="planning-documentation">
                <div>
                    <h2 id="planning-documentation">I planned and documented all the process</h2>
                    <p>
                    I decided to use GitHub for my project board and repository. It’s free and an awesome tool.
                    </p>
                </div>
                <div className={styles.sectionAction}>
                    <Button type="link" href="https://github.com/users/maikelsalles/projects/1" icon="external-link-alt" target="blank" label="GitHub Project"/>
                </div>
                <figure>
                    <picture>
                        <source srcSet={img1.src} />
                        <Image src={img1} alt="A print screen from GitHub project kanban board within lots of tasks." />
                    </picture>
                </figure>
            </section>
            <section className={`${styles.caseContainer} ${styles.titleSection}`} aria-labelledby="personal-design-system">
                <div>
                    <h2 id="personal-design-system">Design System, just for fun...</h2>
                    <p>Are there something more satisfying than starting a design system from scratch, even when the project is to small to justify to do it? #MyProjectMyRules</p>
                </div>
                <div className={styles.sectionAction}>
                    <Button type="link" href="https://www.figma.com/file/sO4RwR8UsUSSsYPdBZY8XD/Portfolio-Maikel-Salles-team-library?type=design&node-id=0-1&mode=design" icon="external-link-alt" target="blank" label="Figma Design System"/>
                </div>
                <figure>
                    <picture>
                        <source srcSet={img2.src} />
                        <Image src={img2} alt="An image from Figma showing a design system with components." />
                    </picture>
                </figure>
            </section>
            <section className={`${styles.caseContainer} ${styles.titleSection}`} aria-labelledby="personal-website-prototypes">
                <div>
                    <h2 id="personal-website-prototypes">Prototypes</h2>
                    <p>I wanted an elegantly simple yet rich in detail, meticulously crafted pixel by pixel through the use of components.</p>
                </div>
                <div className={styles.sectionAction}>
                    <Button type="link" href="https://www.figma.com/file/sO4RwR8UsUSSsYPdBZY8XD/Portfolio-Maikel-Salles-team-library?type=design&node-id=511-944&mode=design" icon="external-link-alt" target="blank" label="Figma Prototypes"/>
                </div>
                <figure>
                    <picture>
                        <source srcSet={img3.src} />
                        <Image src={img3} alt="Image from Figma showing prototype with screens." />
                    </picture>
                </figure>
            </section>
            <section className={`${styles.caseContainer} ${styles.titleSection}`} aria-labelledby="github-repository">
                <div>
                    <h2 id="github-repository">GitHub repository</h2>
                    <p>I chose GitHub for its robust project management tools, such as issues, milestones, and project boards, which enable efficient task organization, progress tracking, and team collaboration.</p>
                </div>
                <div className={styles.sectionAction}>
                    <Button type="link" href="https://github.com/maikelsalles/personalwebsite" icon="external-link-alt" target="blank" label="GitHub Repository"/>
                </div>
                <figure>
                    <picture>
                        <source srcSet={img4.src} />
                        <Image src={img4} alt="The repository on GitHub shows the files from the project." />
                    </picture>
                </figure>
            </section>
            <footer className={styles.caseFooter}>
                <nav aria-label="Case study navigation">
                    <Button href="/portfolio" icon="long-arrow-alt-left" label="Back to Portfolio"/>
                    <Button href="/portfolio/design-system-engineer" label="Next case study"/>
                </nav>
            </footer>
        </article>
    )
}