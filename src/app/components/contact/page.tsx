/* eslint-disable react/no-unescaped-entities */
import styles from "./contact.module.scss"
import globals from "../../globals.module.scss"
import Button from "@components/button"
import ContactForm from '@components/forms/contact-form';

export default function Contact() {
    return (
        <div className={`${styles.contactContainer} ${globals.wrapper} ${globals.twoCollumnsReverse} ${globals.sectionPadding}`}>
            <section>
                <ContactForm />
            </section>
            <aside className={styles.aside}>
                <h3>Follow me</h3>
                <Button type="link" href="mailto:maikelsalles@gmail.com" title="Click to send an e-mail" icon="envelope" label="maikelsalles@gmail.com"/>
                <Button type="link" href="https://www.linkedin.com/in/maikelsalles/" title="Follow me on LinkedIn" target="_blank" icon="linkedIn" label="LinkedIn"/>
                <Button type="link" href="https://www.behance.net/maikelsalles" title="View my portfolio on Behance" target="_blank" icon="behance" label="Behance"/>
                <Button type="link" href="https://medium.com/@MaikelSalles" title="View my academic articles on Medium" target="_blank" icon="medium" label="Medium"/>
                <Button type="link" href="calto:+15878920290" title="Call me" icon="phone" label="+1 (587) 892 0290"/>
            </aside>
        </div>
    )
}