/* eslint-disable react/no-unescaped-entities */
import styles from "./resume.module.scss"

export default function ExperienceComponent() {
    return (
        <section className={styles.experienceItem} id="experience">
            <h3>Product Design and Design Systems Consultant</h3>
            <small>
                <span>Freelance · Remote</span>
                <time>2024–Present</time>
            </small>
            <ul>
                <li>Support designers and businesses with Product Design, UX/UI Design, Design Systems, accessibility, and workflow improvements.</li>
                <li>Translate research, user needs, and business requirements into user flows, wireframes, prototypes, user stories, acceptance criteria, and implementation guidance.</li>
                <li>Support collaboration across Design, Product, and Engineering through Figma, responsive design, reusable components, accessibility reviews, front-end implementation, and structured documentation.</li>
            </ul>
            <h3>Product Designer — Selected Freelance Project</h3>
            <small>
                <span>Sanmyaku Entertainment · Medical Management Platform · Calgary, Alberta / Remote</span>
                <time>November 2023–January 2024</time>
            </small>
            <ul>
                <li>Led interaction design for a medical management platform, translating feature needs and data analysis into user flows, prototypes, and design specifications.</li>
                <li>Collaborated with international teams, presented design rationale, coordinated usability testing, and refined solutions based on feedback and findings.</li>
            </ul>
            <h3>Design System Strategist</h3>
            <small>
                <span>DBC Consulting — Ticket Log / Edenred — Fleet Management and Payments · Brazil</span>
                <time>2022–2024</time>
            </small>
            <ul>
                <li>Led Design System strategy and execution for Angular web products and a React Native mobile application.</li>
                <li>Created Figma libraries, design tokens, reusable components, accessibility standards, semantic specifications, documentation, and responsive guidelines.</li>
                <li>Partnered with Product and Engineering to simplify complex payment and fleet-management workflows and improve collaboration between Figma and Angular libraries.</li>
                <li>Reduced design and development time by 30% through improved Design System collaboration and reusable patterns.</li>
            </ul>
            <h3>Product Design</h3>
            <small>
                <span>DBC Consulting — Ticket Log / Edenred — Fleet Management and Payments · Brazil</span>
                <time>2021–2022</time> 
            </small>
            <ul>
                <li>Proposed and helped establish a dedicated Product Design department and defined its operating model.</li>
                <li>Supported team growth from 3 to approximately 12 people, including 10 Product Designers and 2 UX Writers, through hiring, onboarding, mentoring, career development, and workload planning.</li>
                <li>Partnered with Product and Engineering through discovery, workshops, design reviews, sprint planning, release planning, and delivery checkpoints.</li>
                <li>Presented design solutions, usability findings, and simplified payment workflows to IT leaders and C-level stakeholders.</li>
            </ul>
            <h3>UI Developer and Accessibility Specialist</h3>
            <small>
                <span>DBC Consulting — Ticket Log / Edenred — Fleet Management and Payments · Brazil</span>
                <time>2019–2021</time>
            </small>
            <ul>
                <li>Led accessibility remediation across a large enterprise platform and designed accessible interfaces.</li>
                <li>Built a reusable W3C-based component library for account status, credit limits, and fleet operations.</li>
                <li>Improved semantic HTML, keyboard access, screen-reader support, and responsive design.</li>
                <li>Addressed approximately 90% of identified WCAG issues and reduced development workload by 60%.</li>
            </ul>
            <h3>Lead Product Designer and Front-End Developer</h3>
            <small>
                <span>Agenciou! - Real Estate Technology Startup · Brazil</span>
                <time>2018–2019</time>
            </small>
            <ul>
                <li>Led UX/UI design and front-end delivery for responsive web and mobile property experiences in an early-stage real estate technology startup.</li>
                <li>Created information architecture, user flows, wireframes, prototypes, high-fidelity interfaces, responsive layouts, and reusable UI patterns.</li>
                <li>Implemented products using Vue.js, HTML, CSS, and JavaScript.</li>
                <li>Reduced customer follow-up and the time required to reach a qualified lead by approximately 50%.</li>
            </ul>
            <h3>Multimedia Producer, Product Designer and Front-End Developer</h3>
            <small>
                <span>Self-employed - Professional Multimedia Digital Agency · Brazil</span>
                <time>2016–2017</time>
            </small>
            <ul>
                <li>Worked across digital design, front-end, and multimedia projects, with additional experience in audiovisual and music production.</li>
            </ul>
            <h3>UX/UI Designer and Front-End Developer</h3>
            <small>
                <span>Grupo Editorial Sinos - News Media Company · Brazil</span>
                <time>2011–2016</time>
            </small>
            <ul>
                <li>- Became the main designer for the company’s digital products while continuing Front-End implementation.</li>
                <li>- Helped transform a small external website team into an internal digital product department.</li>
                <li>- Led UX/UI work for the main news portal, media websites, promotional campaigns, and new digital brands.</li>
                <li>- Modernized products through accessibility, semantic HTML, responsive design, reusable components, stronger Front-End standards, workshops, and team collaboration.</li>
            </ul>
            <h3>Graphic and Web Designer / Front-End Developer</h3>
            <small>
                <span>Instituto Unialcance - Educational Institution · Brazil</span>
                <time>2010–2011</time>
            </small>
            <ul>
                <li>Worked with franchise clients to understand local audiences, business goals, and communication needs.</li>
                <li>Designed digital experiences, supported front-end delivery, and maintained brand consistency.</li>
            </ul>
        </section>
    )
}