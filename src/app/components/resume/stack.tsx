import styles from "./stack.module.scss"
import parentStyles from "../../resume/resume.module.scss"

const stack = {
    title: "Stack",
    cats: [
        {
            title: "Design and Prototyping",
            items: [
                { name: "Figma" },
                { name: "Product Design" },
                { name: "UX/UI Design" },
                { name: "Human-Centered Design" },
                { name: "Wireframing and Prototyping" },
                { name: "Responsive Product Design" },
            ]
        },
        {
            title: "Product and Delivery",
            items: [
                { name: "Jira" },
                { name: "Azure DevOps" },
                { name: "Agile Delivery" },
                { name: "User Stories and Acceptance Criteria" },
                { name: "Design-to-Development Handoff" },
            ]
        },
        {
            title: "Analytics and Testing",
            items: [
                { name: "Google Analytics" },
                { name: "Hotjar" },
                { name: "Usability Testing" },
            ]
        },
        {
            title: "Design Systems",
            items: [
                { name: "Design Tokens" },
                { name: "Reusable Component Libraries" },
                { name: "Storybook Collaboration" },
                { name: "Angular Collaboration" },
                { name: "React Native Collaboration" },
            ]
        },
        {
            title: "Front-End",
            items: [
                { name: "HTML" },
                { name: "CSS" },
                { name: "JavaScript" },
                { name: "Vue.js" },
                { name: "Semantic Front-End Development" },
            ]
        },
        {
            title: "Standards",
            items: [
                { name: "WCAG" },
                { name: "W3C-based Component Development" },
                { name: "Semantic HTML" },
            ]
        }
    ]
};

export default function Stack() {
    return (
        <section className={styles.skillsContainer} id="stack">
            {stack.cats.map((cat) => (
                <div key={cat.title}>
                    <h3>{cat.title}</h3>
                    <ul className={parentStyles.inline}>
                        {cat.items.map((item) => (
                            <li key={item.name}
                                role="contentinfo"
                                aria-label={`${item.name}`}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    )
}