/* eslint-disable react/no-unescaped-entities */
"use client"
import { useForm, ValidationError } from '@formspree/react';
import styles from "./forms.module.scss"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/plain.css'
import globals from "../../globals.module.scss";
import input from "../input/input.module.scss";
import Input from "@components/input"
import Button from "@components/button"
import Textarea from "@components/textarea"
export default function ContactForm() {
    const [state, handleSubmit, reset] = useForm("xqkoolek");
    
    function handleClick(): void {
        reset()
    }

    if (state.succeeded) {
        return (
            <div className={styles.feedbackMessage}>
                <h2>Great!</h2>
                <p>
                    Can't wait to hear what you have to say. I'll make sure to get back to you real soon. Have an amazing day!<br/>
                </p>
                <p>
                    Cheers,<br/>
                    Maik
                </p>
                <Button event={handleClick} type="button" label="Back"/>
            </div>
        )
    }
    return (
        <>
            <h2>Contact me</h2>
            <form onSubmit={handleSubmit}>
                <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                />
                <Input name="name" type="text" label="Name" size={1} required/>
                <ValidationError 
                    prefix="Name" 
                    field="email"
                    errors={state.errors}
                />
                <Input name="email" type="email" label="Email" size={2} required/>
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <div className={`${input.inputContainer} ${globals.w50}`}>
                    <PhoneInput
                        country={"ca"}
                        inputProps={{
                            name: "phone",
                            required: false,
                            autoFocus: false
                        }}
                        inputStyle={{
                            background: "transparent",
                            border: "1px solid var(--foreground-alpha-70);",
                            borderRadius: "8px",
                            width: "100%",
                            paddingTop: "0.5em",
                            paddingBottom: "0.5em",
                            lineHeight: "1.30rem",
                            height: "auto"
                        }}
                        dropdownClass={styles.customDropdown}
                    />
                </div>
                <ValidationError 
                    prefix="Phone" 
                    field="phone"
                    errors={state.errors}
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <Textarea name="message" label="Leave a message" size={1} required/>
                <Button type="button" label="Send message" icon="plane" customClass="align-right"/>
            </form>
        </>
    )
}