/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next"
import styles from "../portfolio.module.scss"
import globals from "../../globals.module.scss"
import Button from "@/app/components/button";

export const metadata: Metadata = {
    title: "Designing the Design Organization",
    description: "A new cross-functional design operating model, clearer ownership across teams, stronger accessibility and research practices, a shared Design System foundation, and an estimated 30% reduction in design and development time."
}

export default function Resume() {
    return (
        <article className={`${globals.wrapper} ${globals.sectionPadding} ${styles.resumeContainer}`}>
            <div className={styles.titleContainer}>
                <span className={styles.breadcrumbs}><a href="/portfolio" title="Back to Portfolio" rel="nofollow noindex">Portfolio</a></span>
                <h1>Designing the Design Organization</h1>
            </div>
            <section id="head-of-product-design" className={`${styles.caseContainer} ${styles.longFormCaseStudy}`}>
                <h2>Building a Product Design Operating Model</h2>
                <h2>At a Glance</h2>
                <p><strong>Role:</strong> Head of Product Design</p>
                <p><strong>Context:</strong> Enterprise fleet-management and payment products</p>
                <p><strong>Focus:</strong> Service Design, Design Operations, accessibility, team development, and Design Systems</p>
                <p><strong>Team growth:</strong> From 3 Product Designers to 10 Product Designers and 2 UX Writers</p>
                <p><strong>Key outcomes:</strong> A new cross-functional design operating model, clearer ownership across teams, stronger accessibility and research practices, a shared Design System foundation, and an estimated 30% reduction in design and development time.</p>

                <h2>Overview</h2>
                <p>Ticket Log by Edenred operated several fleet-management and payment products built by different teams, using different technologies and different ways of working.</p>
                <p>Design was usually involved late in the process, after Product and Engineering had already defined the problem and selected a solution. Designers were expected to create interfaces without enough context, research, or influence over the final product.</p>
                <p>I was promoted to Head of Product Design to create a formal design function and establish a better way for Design, Product, Engineering, Business, Support, Legal, Compliance, clients, and users to work together.</p>
                <p>This case was not about redesigning one feature. It was about redesigning the service used to identify, design, build, validate, and improve every product experience.</p>

                <h2>My Role</h2>
                <p>As Head of Product Design, I led the definition and adoption of a new Product Design operating model.</p>
                <p>The goal was to give designers clearer guidance and a stronger role in understanding user needs, defining problems, shaping solutions, validating implementation, and measuring results.</p>
                <p>I remained directly involved in research, workshops, workflow design, documentation, accessibility, prototyping, testing, and delivery. I also supported hiring, onboarding, mentoring, workload planning, team development, and the early stages of the Design System.</p>
                <p>Beyond creating a process, I helped change how the company understood Design and established a longer-term vision for more consistent, accessible, scalable, and future-ready product delivery.</p>

                <h2>The Challenge</h2>
                <p>The company initially had three Product Designers working independently across different products.</p>
                <p>There was no shared design process, central source of truth, structured design backlog, consolidated UI library, or clear definition of Design responsibilities.</p>
                <p>The existing workflow usually followed this sequence:</p>
                <ol>
                    <li>Business or Customer Support raised a request.</li>
                    <li>Product discussed possible solutions with Engineering.</li>
                    <li>The main decisions and delivery dates were defined.</li>
                    <li>Design received a request to create the screens.</li>
                </ol>
                <p>Design was treated as a production step rather than a partner in identifying the right problem and defining the right solution.</p>
                <p>This created several problems:</p>
                <ul>
                    <li>Designers had limited context and little influence over decisions.</li>
                    <li>Research and testing were often skipped because deadlines had already been defined.</li>
                    <li>Designers worked independently and had few opportunities to exchange knowledge.</li>
                    <li>Similar products had inconsistent interfaces and user experiences.</li>
                    <li>Accessibility requirements were not consistently considered.</li>
                    <li>Developers recreated similar components across products.</li>
                    <li>Prototypes and final implementations often did not match.</li>
                    <li>Rework increased development time and cost.</li>
                    <li>Roles and responsibilities were unclear.</li>
                    <li>Product decisions were based more on internal assumptions than user evidence.</li>
                    <li>Designers had little visibility into the impact of their work.</li>
                </ul>
                <p>The products also presented user-facing problems, including complex payment journeys, fragmented login experiences, inconsistent data fields, different interaction patterns across platforms, and accessibility barriers affecting internal and external users.</p>
                <p>These barriers were especially important in operational and Customer Support systems, where several employees with disabilities used the products daily.</p>

                <h2>Understanding the Service</h2>
                <p>I treated the design process itself as a service.</p>
                <p>The people using or participating in this service included:</p>
                <ul>
                    <li>Product Designers</li>
                    <li>Product Managers and Product Owners</li>
                    <li>Engineers working across several product teams</li>
                    <li>Business specialists</li>
                    <li>Customer Support teams</li>
                    <li>Legal and Compliance</li>
                    <li>Executives</li>
                    <li>International brand stakeholders</li>
                    <li>Clients and other external stakeholders</li>
                    <li>Truck drivers</li>
                    <li>Fleet managers</li>
                    <li>Business owners</li>
                    <li>Employees with disabilities using internal systems</li>
                </ul>
                <p>To understand the current state, I interviewed designers and Product stakeholders, spoke with Engineering and Support teams, reviewed customer-support tickets, examined analytics and data consistency, observed existing workflows, and gathered feedback from users in different roles.</p>
                <p>Customer Support was especially valuable because it provided direct evidence of recurring user problems. Its employees also helped identify accessibility barriers and operational issues that were not always visible to the product teams.</p>
                <p>This research helped us understand both the user-facing experience and the internal teams, processes, systems, and decisions behind each interaction.</p>

                <h2>The Service Design Approach</h2>
                <p>I mapped how product work entered the organization, how decisions were made, when Design became involved, how information moved between teams, and where context was lost.</p>
                <p>The new approach moved Design closer to the beginning of the service.</p>
                <p>Instead of receiving a request for a completed solution, designers became involved when a demand first entered Product. They could help define the problem, identify affected users, select the appropriate research methods, shape the solution, review the implementation, and measure the results after release.</p>
                <p>We created a flexible process based on the size, urgency, risk, and expected impact of each initiative. Not every project required the same amount of research or documentation.</p>
                <p>Depending on the work, the process could include:</p>
                <ol>
                    <li>Problem framing and initial discovery</li>
                    <li>Stakeholder mapping</li>
                    <li>User and stakeholder research</li>
                    <li>Current-state journey mapping</li>
                    <li>Process mapping and service blueprinting</li>
                    <li>Co-design workshops</li>
                    <li>Future-state journeys and user flows</li>
                    <li>Prototyping</li>
                    <li>Usability testing</li>
                    <li>Accessibility review</li>
                    <li>Delivery planning</li>
                    <li>Measurement plans, analytics, and behaviour tracking</li>
                </ol>
                <p>We documented this approach in a <strong>Product Design Playbook</strong>.</p>
                <p>The playbook explained how the team worked, when each method should be used, which stakeholders should participate, and how the process should adapt to different types of work.</p>
                <p>It also became an onboarding resource, helping new designers understand the team structure, responsibilities, standards, tools, and delivery expectations.</p>

                <h2>The New Design Operating Model</h2>
                <p>For each significant initiative, we defined accountable representatives from:</p>
                <ul>
                    <li>Product</li>
                    <li>Design</li>
                    <li>Engineering</li>
                    <li>Business</li>
                    <li>Legal or Compliance, when required</li>
                    <li>External stakeholders, such as clients or users, when relevant</li>
                </ul>
                <p>Designers were no longer treated as subordinate to Product Owners within the workflow.</p>
                <p>Product, Design, and Engineering became partners with different responsibilities. Designers were expected to present their own work, explain the evidence behind their decisions, and defend usability and accessibility needs.</p>
                <p>External stakeholders could also participate throughout the process. In some projects, clients joined the initial conversations, reviewed early prototypes, participated in testing, and received access to completed features before publication so they could validate the experience.</p>
                <p>Each epic was reviewed by the relevant functions. Its stories and tasks could include design, engineering, research, accessibility, content, compliance, testing, and final validation.</p>
                <p>This created better alignment and traceability from the original problem through implementation and release.</p>

                <h2>Connected Workflows and Documentation</h2>
                <p>We introduced a dedicated Design Kanban in Azure DevOps and connected it with the existing Product, Business, and Engineering workflows.</p>
                <p>The structure included:</p>
                <ul>
                    <li>A Design Kanban for Product Designers</li>
                    <li>Product Kanbans for Product Managers and Product Owners</li>
                    <li>Separate Engineering Kanbans for different technical teams</li>
                    <li>Higher-level Product and Business views for broader planning</li>
                </ul>
                <p>These Kanbans communicated with each other so work could move between teams while preserving its context, ownership, and history.</p>
                <p>We also introduced automations that assigned or transferred tasks based on workflow stages, responsibilities, and predefined rules.</p>
                <p>Product requests included structured fields so designers received enough context before starting the work. We improved the naming and organization of epics, user stories, tasks, requirements, and acceptance criteria.</p>
                <p>This made information easier to understand, search, measure, reuse, and automate. It also created a stronger foundation for future AI-assisted workflows.</p>
                <p>The goal was not documentation for its own sake. We tested and adjusted the process as teams began using it.</p>
                <p>For example, we initially tried to document too much design detail inside Azure DevOps. This created additional work without enough value, so detailed visual documentation remained in Figma while Azure DevOps contained the information required for planning, ownership, delivery, and traceability.</p>
                <p>The operating model was treated like a product: it was tested, reviewed, and continuously improved.</p>

                <h2>Accessibility and Inclusion</h2>
                <p>Accessibility became part of the process rather than a final review.</p>
                <p>Design requirements included accessibility expectations, and designers could explain why keyboard support, semantic structure, screen-reader compatibility, focus management, contrast, and other requirements were necessary.</p>
                <p>Some developers initially questioned the value of these requirements. I addressed this through workshops, practical examples, closer collaboration, and clearer documentation.</p>
                <p>Employees with disabilities, especially those working in Customer Support, were included in conversations about internal tools and operational workflows.</p>
                <p>I also treated clear and consistent documentation as a form of organizational accessibility. Standard language and predictable task structures made information easier for everyone to understand and reduced dependence on individual writing styles.</p>

                <h2>Building Capability and Changing Culture</h2>
                <p>The transformation required more than creating a workflow. It required changing how the organization understood Design.</p>
                <p>I presented the proposed structure, resource needs, priorities, Design System direction, and short-, medium-, and long-term goals to senior leaders and C-level stakeholders.</p>
                <p>The short-term focus was solving immediate communication and delivery problems.</p>
                <p>The medium-term focus included:</p>
                <ul>
                    <li>Revisiting existing features</li>
                    <li>Reducing design-related defects</li>
                    <li>Improving usability and accessibility</li>
                    <li>Introducing stronger research and measurement practices</li>
                    <li>Expanding the Design team</li>
                    <li>Adding UX Writing capability</li>
                </ul>
                <p>The longer-term direction included:</p>
                <ul>
                    <li>A scalable Design System</li>
                    <li>Stronger governance</li>
                    <li>Better use of automation</li>
                    <li>More consistent international adoption</li>
                    <li>Better preparation for AI-assisted workflows</li>
                </ul>
                <p>The team grew from three Product Designers to approximately twelve people:</p>
                <ul>
                    <li>10 Product Designers</li>
                    <li>2 UX Writers</li>
                </ul>
                <p>The UX Writers were introduced later to revisit existing features, improve terminology and content, and support medium-term product improvements.</p>
                <p>I supported hiring, onboarding, mentoring, workload planning, identification of individual strengths, and the development of potential design leads.</p>
                <p>Regular workshops created a space for designers to exchange knowledge. These sessions were also opened to developers and other stakeholders, helping Product Design practices spread beyond the Design team.</p>

                <h2>Creating the Design System Foundation</h2>
                <p>As the process became more structured, Engineering began to see clearer evidence behind design decisions and more opportunities to reuse components.</p>
                <p>This created the foundation for a shared UI kit and later a formal Design System.</p>
                <p>The team began consolidating:</p>
                <ul>
                    <li>Shared components</li>
                    <li>Interaction patterns</li>
                    <li>Visual standards</li>
                    <li>Accessibility requirements</li>
                    <li>Data-field conventions</li>
                    <li>Design tokens</li>
                    <li>Documentation</li>
                    <li>Design-to-code practices</li>
                </ul>
                <p>We also introduced Storybook as a component playground.</p>
                <p>Before this, designers could define component behaviour in Figma but would often see the real interaction only after development was completed.</p>
                <p>Storybook allowed designers and engineers to review components earlier, test states and behaviours, discuss implementation details, and identify differences before the components were used across products.</p>
                <p>This reduced uncertainty and created a stronger connection between the Figma libraries and the implemented components.</p>

                <h2>Challenges</h2>
                <p>The main challenge was not creating the process. It was maintaining adoption.</p>
                <p>Product Managers and Product Owners had to change a familiar workflow and involve Design earlier. Designers also had to accept greater responsibility for presenting evidence, explaining decisions, and participating throughout delivery.</p>
                <p>Engineering teams used different technologies and had different levels of support for accessibility, component reuse, and modern front-end standards.</p>
                <p>The transformation required continuous facilitation, conflict resolution, clarification of responsibilities, workshops, and adjustments based on feedback.</p>
                <p>Instead of treating the first workflow as final, we monitored its use and removed steps that created effort without enough value.</p>

                <h2>Outcomes</h2>
                <p>The transformation changed both how products were designed and how teams worked together.</p>

                <h3>Organizational Impact</h3>
                <ul>
                    <li>Design became involved from problem definition through delivery and measurement.</li>
                    <li>Designers gained greater ownership and could present the evidence behind their decisions.</li>
                    <li>Product, Design, Engineering, Business, Compliance, clients, and other stakeholders had clearer responsibilities.</li>
                    <li>The Design team grew from three Product Designers to 10 Product Designers and two UX Writers.</li>
                    <li>Workshops, mentoring, and the Product Design Playbook created a more consistent design culture.</li>
                    <li>Designers gained better visibility into the purpose and expected impact of their work.</li>
                    <li>The company developed a clearer long-term vision for Design, accessibility, automation, and scalable product delivery.</li>
                </ul>

                <h3>Delivery and Operational Impact</h3>
                <ul>
                    <li>Connected Kanban workflows improved traceability across Product, Design, Business, and Engineering.</li>
                    <li>Structured requests and requirements reduced missing context and communication problems.</li>
                    <li>Research, journey mapping, prototyping, accessibility reviews, and usability testing became part of regular product work.</li>
                    <li>Designers could review implementation and follow product performance after release.</li>
                    <li>Design and development time was reduced by approximately 30%.</li>
                    <li>Better documentation and standardized task structures created a foundation for automation and future AI-assisted workflows.</li>
                    <li>Existing Azure DevOps capabilities were used more effectively to manage responsibilities, task movement, and delivery history.</li>
                </ul>

                <h3>Product Quality and User Experience</h3>
                <ul>
                    <li>Visual and interaction consistency improved across products.</li>
                    <li>Accessibility became a defined requirement rather than a final review.</li>
                    <li>Support issues related to previously identified product problems decreased.</li>
                    <li>Analytics, Hotjar, user feedback, and feature tracking became part of the product process.</li>
                    <li>Research and testing helped teams balance business needs with real user needs.</li>
                    <li>Better validation reduced differences between prototypes and final implementations.</li>
                    <li>The organization gained stronger evidence for future product decisions and improvements.</li>
                </ul>

                <h3>Design System and Broader Influence</h3>
                <ul>
                    <li>A shared and documented UI kit was consolidated.</li>
                    <li>The formal Design System initiative began.</li>
                    <li>Storybook improved component validation and collaboration between Design and Engineering.</li>
                    <li>Designers could review implemented component states and behaviours earlier.</li>
                    <li>Component reuse and clearer standards reduced unnecessary duplication.</li>
                    <li>Related teams in the United States and France began consulting the team about its process, testing approach, and Design System.</li>
                    <li>Some international teams began considering the methods and system foundations for their own products.</li>
                </ul>

                <h2>What I Learned</h2>
                <p>The most important lesson was that a design process cannot simply be imposed.</p>
                <p>It must fit the organization, the size and risk of the work, the delivery environment, and the people expected to use it.</p>
                <p>A successful design function needs enough structure to create clarity, traceability, accessibility, and quality, but it must remain flexible enough to support fast delivery.</p>
                <p>This transformation worked because the process itself was treated as a service that could be researched, mapped, prototyped, tested, measured, and continuously improved.</p>
            </section>
            <Button href="/portfolio" icon="long-arrow-alt-left" label="Back to Portfolio"/>
        </article>
    )
}