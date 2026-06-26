import { Metadata } from "next"
import styles from "./resume.module.scss"
import globals from "../globals.module.scss"
import Experience from "@components/resume/experience"
import Education from "@components/resume/education"
import Stack from "@components/resume/stack"

export const metadata: Metadata = {
    title: "Resume - Maikel Salles",
    description: "Read about my archivements over 10 years of experience."
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