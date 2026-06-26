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
            <div className={styles.titleContainer}>
                <span className={styles.breadcrumbs}><a href="/portfolio" title="Back to Portfolio" rel="nofollow noindex">Portfolio</a></span>
                <h1>Medical Platform</h1>
            </div>
            <section id="personal-website" className={styles.caseContainer}>
                <div>
                    <p>
                        As the Volunteer Lead Product Designer for an innovative medical platform at a Canadian startup, I spearheaded the design process, ensuring seamless user experiences and intuitive interfaces. Collaborating closely with cross-functional teams, I translated user needs and business requirements into compelling design solutions.
                    </p>
                    <p>
                        My role involved overseeing the end-to-end design workflow, from concept ideation to prototyping and user testing, all while upholding high standards of usability and accessibility, and leveraging my expertise in product design and deep research of the healthcare landscape.
                    </p>
                </div>                
                <div>
                    <h3>Design thinking!</h3>
                    <p>
                        I utilized design thinking to innovate, by empathizing with users, brainstorming creative solutions, and iterating rapidly based on feedback, I drove the development of user-centric features. This approach ensured that the platform effectively addressed healthcare professionals' and patients' needs,
                    </p>
                </div>
                <div className={styles.advise}>
                    <span className={`${icons.info} ${icons.icon}`}></span>
                    The details of this project are confidential, however, I can provide a brief overview.
                </div>
                <picture>
                    <source srcSet={img1.src} />
                    <Image src={img1} alt="A screen from Figma Jam with organograms and fluxes." />
                </picture>
                <div>
                    <h3>Atomic Design System</h3>
                    <p>After recognizing the scale and complexity of this medical platform, which encompasses numerous features and releases, I developed a robust design system to ensure consistency and scalability across the entire project.</p>
                </div>
                <picture>
                    <source srcSet={img2.src} />
                    <Image src={img2} alt="A print screen from Figma showing a design system." />
                </picture>
                <div>
                    <h3>Prototypes</h3>
                    <p>I utilized the latest and most advanced features of Figma to ensure that the design process was as streamlined and efficient as possible, aiming for an elegantly simple yet detail-rich outcome, meticulously crafted pixel by pixel using components.</p>
                </div>
                <picture>
                    <source srcSet={img3.src} />
                    <Image src={img3} alt="A print screen from Figma with prototypes.```" />
                </picture>
            </section>
            <Button href="/portfolio" icon="long-arrow-alt-left" label="Back to Portfolio"/>
        </article>
    )
}