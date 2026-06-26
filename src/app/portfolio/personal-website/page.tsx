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
            <div className={styles.titleContainer}>
                <span className={styles.breadcrumbs}><a href="/portfolio" title="Back to Portfolio" rel="nofollow noindex">Portfolio</a></span>
                <h1>Personal website</h1>
            </div>
            <section id="personal-website" className={styles.caseContainer}>
                <div>
                    <p>
                        After deciding to move to Canada, I realized it was the perfect time to finally develop my own personal website and portfolio. With this life change came the opportunity to fully dedicate myself to building a platform that represents my professional and creative journey.
                    </p>
                    <p>
                        I wanted to show all my skills, including DevOps, DesignOps, and interaction design, to create a seamless and visually captivating experience. Additionally, I'm committed to continuous improvement, ensuring that my website evolves with the latest trends and technologies. My website is not just a space to showcase my work, but also a way to share my passion for technology and connect with a new community.
                    </p>
                    <p>
                        I'm excited to share my journey and demonstrate how my comprehensive skill set can contribute to future projects in this new chapter of my life in Canada.
                    </p>
                </div>
                <div className={styles.titleSection}>
                    <div>
                        <h3>I planned and documented all the process</h3>
                        <p>
                        I decided to use GitHub for my project board and repository. It’s free and an awesome tool.
                        </p>
                    </div>
                    <Button type="link" href="https://github.com/users/maikelsalles/projects/1" icon="external-link-alt" target="blank" label="GitHub Project"/>
                </div>
                <picture>
                    <source srcSet={img1.src} />
                    <Image src={img1} alt="A print screen from GitHub project kanban board within lots of tasks." />
                </picture>
                <div className={styles.titleSection}>
                    <div>
                        <h3>Design System, just for fun...</h3>
                        <p>Are there something more satisfying than starting a design system from scratch, even when the project is to small to justify to do it? #MyProjectMyRules</p>
                    </div>
                    <Button type="link" href="https://www.figma.com/file/sO4RwR8UsUSSsYPdBZY8XD/Portfolio-Maikel-Salles-team-library?type=design&node-id=0-1&mode=design" icon="external-link-alt" target="blank" label="Figma Design System"/>
                </div>
                <picture>
                    <source srcSet={img2.src} />
                    <Image src={img2} alt="An image from Figma showing a design system with components." />
                </picture>
                <div className={styles.titleSection}>
                    <div>
                        <h3>Prototypes</h3>
                        <p>I wanted an elegantly simple yet rich in detail, meticulously crafted pixel by pixel through the use of components.</p>
                    </div>
                    <Button type="link" href="https://www.figma.com/file/sO4RwR8UsUSSsYPdBZY8XD/Portfolio-Maikel-Salles-team-library?type=design&node-id=511-944&mode=design" icon="external-link-alt" target="blank" label="Figma Prototypes"/>
                </div>
                <picture>
                    <source srcSet={img3.src} />
                    <Image src={img3} alt="Image from Figma showing prototype with screens." />
                </picture>
                <div className={styles.titleSection}>
                    <div>
                        <h3>GitHub repository</h3>
                        <p>I chose GitHub for its robust project management tools, such as issues, milestones, and project boards, which enable efficient task organization, progress tracking, and team collaboration.</p>
                    </div>
                    <Button type="link" href="https://github.com/maikelsalles/personalwebsite" icon="external-link-alt" target="blank" label="GitHub Repository"/>
                </div>
                <picture>
                    <source srcSet={img4.src} />
                    <Image src={img4} alt="The repository on GitHub shows the files from the project." />
                </picture>
            </section>
            <Button href="/portfolio" icon="long-arrow-alt-left" label="Back to Portfolio"/>
        </article>
    )
}