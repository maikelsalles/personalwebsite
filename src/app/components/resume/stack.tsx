import styles from "./stack.module.scss"
import parentStyles from "../../resume/resume.module.scss"

const stack = {
    title: "Stack",
    cats: [
        {
            title: "Full-stack Designer",
            items: [
                { name: "Design System", range: 70 },
                { name: "UI UX Design", range: 100 },
                { name: "Product Design", range: 70 },
                { name: "Customer Needs Assessment", range: 90 },
                { name: "Design Thinking", range: 50 },
                { name: "Figma", range: 50 },
                { name: "Adobe Suite", range: 50 },
            ]
        },
        {
            title: "Front-end Developer",
            items: [
                { name: "Html 5", range: 100 },
                { name: "CSS3", range: 100 },
                { name: "JavaScript", range: 80 },
                { name: "TypeScript", range: 70 },
                { name: "Angular", range: 70 },
                { name: "React", range: 60 },
                { name: "NextJs", range: 60 },
                { name: "VueJs", range: 50 },
                { name: "WordPress", range: 90 },
                { name: "W3C, WCAG Standards", range: 100 },
                { name: "GIT", range: 80 },
                { name: "Azure DevOps", range: 50 },
                { name: "API Integration", range: 60 },
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