/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next"
import styles from "../portfolio.module.scss"
import globals from "../../globals.module.scss"
import Image from 'next/image'
import Button from "@/app/components/button";

import icons from "../../icons.module.scss";

import img1 from "@img/portfolio/medical-platform-roject.jpg";
import img2 from "@img/portfolio/medical-platform-design-system.jpg";
import img3 from "@img/portfolio/medical-platform-prototypes.jpg";

export const metadata: Metadata = {
    title: "Medical Platform - Portfolio - Maikel Salles",
    description: "Read about my archivements over 10 years of experience."
}

export default function Resume() {
    return (
        <article className={`${globals.wrapper} ${globals.sectionPadding} ${styles.resumeContainer}`}>
            <header className={styles.titleContainer}>
                <p className={styles.eyebrow}>UX/UI Medical Platform</p>
                <h1>Medical Platform</h1>
                <p>Medical Management Platform</p>
                <dl className={styles.caseDetails}>
                    <div>
                        <dt>Role</dt>
                        <dd>Product Designer — Selected Freelance Project</dd>
                    </div>
                    <div>
                        <dt>Company</dt>
                        <dd>Sanmyaku Entertainment</dd>
                    </div>
                    <div>
                        <dt>Dates</dt>
                        <dd>November 2023–January 2024</dd>
                    </div>
                </dl>
            </header>
            <section className={styles.caseContainer} aria-labelledby="medical-platform-overview">
                <h2 id="medical-platform-overview">Overview</h2>
                <p>
                    As the Volunteer Lead Product Designer for an innovative medical platform at a Canadian startup, I spearheaded the design process, ensuring seamless user experiences and intuitive interfaces. Collaborating closely with cross-functional teams, I translated user needs and business requirements into compelling design solutions.
                </p>
                <p>
                    My role involved overseeing the end-to-end design workflow, from concept ideation to prototyping and user testing, all while upholding high standards of usability and accessibility, and leveraging my expertise in product design and deep research of the healthcare landscape.
                </p>
            </section>
            <section className={styles.caseContainer} aria-labelledby="design-thinking">
                <h2 id="design-thinking">Design thinking!</h2>
                <p>
                    I utilized design thinking to innovate, by empathizing with users, brainstorming creative solutions, and iterating rapidly based on feedback, I drove the development of user-centric features. This approach ensured that the platform effectively addressed healthcare professionals' and patients' needs,
                </p>
                <div className={styles.advise}>
                    <span className={`${icons.info} ${icons.icon}`}></span>
                    The details of this project are confidential, however, I can provide a brief overview.
                </div>
                <figure>
                    <picture>
                        <source srcSet={img1.src} />
                        <Image src={img1} alt="A screen from Figma Jam with organograms and fluxes." />
                    </picture>
                </figure>
            </section>
            <section className={styles.caseContainer} aria-labelledby="atomic-design-system">
                <h2 id="atomic-design-system">Atomic Design System</h2>
                <p>After recognizing the scale and complexity of this medical platform, which encompasses numerous features and releases, I developed a robust design system to ensure consistency and scalability across the entire project.</p>
                <figure>
                    <picture>
                        <source srcSet={img2.src} />
                        <Image src={img2} alt="A print screen from Figma showing a design system." />
                    </picture>
                </figure>
            </section>
            <section className={styles.caseContainer} aria-labelledby="medical-platform-prototypes">
                <h2 id="medical-platform-prototypes">Prototypes</h2>
                <p>I utilized the latest and most advanced features of Figma to ensure that the design process was as streamlined and efficient as possible, aiming for an elegantly simple yet detail-rich outcome, meticulously crafted pixel by pixel using components.</p>
                <figure>
                    <picture>
                        <source srcSet={img3.src} />
                        <Image src={img3} alt="A print screen from Figma with prototypes.```" />
                    </picture>
                </figure>
            </section>
            <footer className={styles.caseFooter}>
                <nav aria-label="Case study navigation">
                    <Button href="/portfolio" icon="long-arrow-alt-left" label="Back to Portfolio"/>
                    <Button href="/portfolio/personal-website" label="Next case study"/>
                </nav>
            </footer>
        </article>
    )
}