/* eslint-disable react/no-unescaped-entities */
import styles from "./resume.module.scss"

export default function EducationComponent() {
    return (
        <section id="education">
            <div>
                <h3>Strategic Design Management Specialization</h3>
                <p>
                    <small>
                        <span>Uniritter · Brazil</span>
                        <time>2022–2024</time>
                    </small>
                </p>
            </div>
            <div>
                <h3>Bachelor&apos;s Degree in Information Technology Management</h3>
                <p>
                    <small>
                        <span>Uniritter · Brazil</span>
                        <time>2019–2022</time>
                    </small>
                </p>
            </div>
            <div>
                <h3>Product Management</h3>
                <p><small>PM3 · 2022</small></p>
            </div>
            <div>
                <h3>Google AI Professional Certificate</h3>
                <p><small>Coursera · 2026</small></p>
            </div>
            <div>
                <h3>Scrum Foundation</h3>
                <p><small>CertiProf · 2020</small></p>
            </div>
        </section>
    )
}