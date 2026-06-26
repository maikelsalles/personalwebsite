/* eslint-disable react/no-unescaped-entities */
import styles from "./resume.module.scss"

export default function EducationComponent() {
    return (
        <section id="education">
            <div>
                <h3>Post Graduation Strategic Design Management Specialization</h3>
                <p>
                    <small>
                        <span>Uniritter Canoas - RS, Brazil</span>
                        <time>September 2022 - September 2023</time>
                    </small>
                </p>
            </div>
            <div>
                <h3>Graduation IT Management</h3>
                <p>
                    <small>
                        <span>Uniritter Canoas - RS, Brazil</span>
                        <time>August 2019 - August 2022</time>
                    </small>
                    <ul>
                        <li>Elected to Class Ambassador for Students Class in 2019 and 2020.</li>
                        <li>Elected to lead most of the group projects.</li>
                        <li>Awarded honor for the highest grade in the class.</li>
                    </ul>
                </p>
            </div>
            <div>
                <h3>Product Management</h3>
                <p><small>PM3 - May 2022</small></p>
            </div>
            <div>
                <h3>Scrum Foundation Professional Certificate (SFPC)</h3>
                <p><small>CertiProf - Jun 2020</small></p>
            </div>
        </section>
    )
}