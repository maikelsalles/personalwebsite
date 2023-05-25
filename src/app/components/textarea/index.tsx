import globals from "../../globals.module.scss"
import styles from "./textarea.module.scss"

type Textarea = {
  label: string;
  customClass?: string;
  value?: string;
  required?: boolean;
  placeholder?: string;
  size: number;
};

export default function Textarea({ label, customClass, placeholder, value, size, required }: Textarea) {
    const customClassValue = customClass ? globals[customClass] : '';
    return (
        <div className={`${styles.textareaContainer} ${size === 2 ? globals.w50 : globals.w100}`}>
            <label>
                <span>{label}</span>
                <textarea
                    placeholder={placeholder}
                    className={`${styles.input} ${customClassValue}`}
                    required={required}
                >
                    {value}
                </textarea>
            </label>
        </div>
    );
}