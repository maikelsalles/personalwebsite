/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next"
import React from 'react'

import styles from "../portfolio.module.scss"
import globals from "../../globals.module.scss"

import Image from 'next/image'
import Button from "@/app/components/button";

import icons from "../../icons.module.scss";

import img1 from "@img/portfolio/design-system-engineer-project.jpg";
import img2 from "@img/portfolio/design-system-engineer-library-of-components.jpg";

export const metadata: Metadata = {
    title: "Design System Engineer - Portfolio - Maikel Salles",
    description: "Read about my archivements over 10 years of experience."
}

export default function Resume() {
    return (
        <article className={`${globals.wrapper} ${globals.sectionPadding} ${styles.resumeContainer}`}>
            <div className={styles.titleContainer}>
                <span className={styles.breadcrumbs}><a href="/portfolio" title="Back to Portfolio" rel="nofollow noindex">Portfolio</a></span>
                <h1>Design System</h1>
            </div>
            <section id="personal-website" className={styles.caseContainer}>
                <div>
                    <p>
                        I transitioned from Product Designer to fully focus on integrating the design system into the company's daily operations. My goal was to institutionalize its use and collaborate with the software engineering team to optimize performance and utilization. By developing processes and fostering cross-departmental alignment, we aimed to ensure the design system's seamless integration and maximize its benefits across the organization.
                    </p>
                    <p>
                        Recognizing the need for leadership to streamline internal processes and reduce excessive revisions in prototype development, so I volunteered to lead the design team. At the time, with only four designers reporting directly to product owners and minimal communication among them, I saw the opportunity to establish clearer channels of communication, standardize processes, and enhance the efficiency and quality of our design outputs.
                    </p>
                </div>
                <div>
                    <h3>Problem solving approach for legacy design</h3>
                    <p>
                        I embraced the task of building a design system to unify multiple legacy projects with old and inconsistent designs. This involved auditing existing designs, defining clear design principles, creating a comprehensive component library, establishing design tokens, documenting guidelines and best practices, implementing gradually across projects, and monitoring ongoing usage.
                    </p>
                    <p>
                        Through this systematic approach, I ensured consistency, efficiency, and scalability, harmonizing disparate designs and enhancing the overall user experience across all projects.
                    </p>
                </div>
                <div className={styles.advise}>
                    <span className={`${icons.info} ${icons.icon}`}></span>
                    The details of this project are confidential, however, I can provide a brief overview.
                </div>
                <picture>
                    <source srcSet={img1.src} />
                    <Image src={img1} alt="A print screen from Azure DevOps showing a kanban board with tasks." />
                </picture>
                <div>
                    <h3>Team work and collaboration</h3>
                    <p>I organized workshops to empower the IT and design teams to actively maintain and update the design system, providing hands-on training and guidance. This ensured that both teams were equipped with the skills and resources needed to sustain the system's relevance and effectiveness over time.</p>
                </div>
                <div>
                    <h3>Library of components</h3>
                    <p>I developed the components in an Angular 17 library and documented them using Storybook 8. Additionally, I updated a playground for developers to conduct testing and development with the legacy and new components to measure the impact and compatibility on development within legacy platforms. All these efforts were guided by best development practices and standards, with a continued commitment to accessibility. This approach ensured not only the consistency and efficiency of the system but also its user-friendliness and accessibility for all users.</p>
                </div>
                <picture>
                    <source srcSet={img2.src} />
                    <Image src={img2} alt="The image is half with Storybook showcasing some components and the other half is the VsCode showing code." />
                </picture>
            </section>
            <Button href="/portfolio" icon="long-arrow-alt-left" label="Back to Portfolio"/>
        </article>
    )
}