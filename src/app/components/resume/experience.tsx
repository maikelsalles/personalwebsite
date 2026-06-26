/* eslint-disable react/no-unescaped-entities */
import styles from "./resume.module.scss"

export default function ExperienceComponent() {
    return (
        <section className={styles.experienceItem} id="experience">
            <h3>Design System Engineer</h3>
            <small>
                <span>DBC Company - Consulting for Edenred - Porto Alegre/RS</span>
                <time>July 2022 - November 2024</time>
            </small>
            <ul>
                <li>Ahead of Design System project, lead the development in Figma and Angular Library of components, defining standards, guidelines and documentation within IT Engineers and Design department.</li>
                <li>Colaborated reducing costs and time by 30% both IT and Design departments and enhanced overall quality of digital products as design by introducing a Design System initiative.</li>
                <li>Served as a bridged between Design and Development allways fostering accessibility and best practices.</li>
                <li>Led the efforts to uphold legacy designs by analyzing new brand standards alongside existing legacy code, ensuring seamless integration and consistency across platforms.</li>
            </ul>
            <h3>Head of Product Design</h3>
            <small>
                <span>DBC Company - Consulting for Edenred - Porto Alegre/RS</span>
                <time>October 2021 - July 2022</time>
            </small>
            <ul>
                <li>Provided technical guidance for the team with workshops, fostering positivity and a collaborative environment.</li>
                <li>Tailored design processes for multiple projects and deadlines, optimizing the ability to conduct assertive user needs assessments, empowering our team to excel in their performance in a fast-paced environment.</li>
                <li>Assisted actively in the development of personas, user stories, prototypes, customer journeys and tests.</li>
                <li>Incorporated accessibility principles into task and requirement documentation between IT department and Design deliveries, ensuring clarity for all teams and minimizing rework and misunderstandings, working collaboratively with Product Owners and Product Managers.</li>
                <li>Created an automated test implementation process, ensuring adherence to deadlines and delivery timelines.</li>
            </ul>
            <h3>UI Developer - Accessibility Specialist</h3>
            <small>
                <span>DBC Company - Consulting for Edenred - Porto Alegre/RS</span>
                <time>May 2019 - October 2021</time>
            </small>
            <ul>
                <li>Implemented WCAG guidelines to improve accessibility on the Sou Log Platform, resulting in a remarkable 90% enhancement. This initiative prevented the company from incurring a significant regulatory fee of 3M.</li>
                <li>Created accessible and W3C Standard library of components to save time by 60% on front-end development.</li>
                <li>Developed high-performance, pixel-perfect features in the Angular framework and contributed proactively for an agile environment within multidisciplinary teams.</li>
                <li>Achieved proficiency in NGXS/NgRx for data and state, RxJS for reactive programming, and modern styling tools like SASS/SCSS, Flexbox, Animations, continuous integration, and automated testing tools.</li>
                <li>Worked with the latest technologies for optimal quality and standards, on a B2B platform within the financial sector.</li>
            </ul>
            <h3>Product Designer & UI Developer</h3>
            <small>
                <span>Agenciou! StartUp - Porto Alegre/RS</span>
                <time>October 2018 - April 2019</time>
            </small>
            <ul>
                <li>Enhanced the user experience on Real State Agency by crafting intuitive web and mobile screens, resulting in a notable 50% reduction in customer inquiries and interactions. Achieved through the meticulous application of design thinking and agile methodologies.</li>
                <li>Established foundational elements including style guides, page templates, icon sets, and a custom CSS framework.</li>
                <li>Developed Institutional website, web platform and Dashboards on Vue.js framework, ensuring seamless implementation of design concepts and accessibility.</li>
            </ul>
        </section>
    )
}