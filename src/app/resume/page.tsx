import { Metadata } from "next"
import styles from "./resume.module.scss"
import globals from "../globals.module.scss"
import Experience from "@components/resume/experience"
import Education from "@components/resume/education"
import Stack from "@components/resume/stack"

export const metadata: Metadata = {
    title: "Resume - Maikel Salles",
    description: "Senior Front-End Designer and Product Designer with 15+ years of experience in Product Design, Design Systems, accessibility, and front-end implementation."
}

export default function Resume() {
    return (
        <article className={`${styles.resumeContainer} ${globals.wrapper}`}>
            <div className={styles.titleContainer}>
                <h1>Resume</h1>
            </div>
            <Experience />
            <Education />
            <Stack />
        </article>
    )
}