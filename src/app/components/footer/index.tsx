import globals from "../../globals.module.scss"
import styles from "./footer.module.scss"

export default function Footer() {
    return (
      <footer className={`${styles.footer} ${globals.wrapper}`}>
        <div className="articlesList">
          <h4>Articles</h4>
          <ul>
            <li>
              <a href="https://medium.com/@MaikelSalles/loyalty-transmedia-strategies-and-digital-marketing-7e652cdddabf" target="blank">Loyalty: Transmedia Strategies and Digital Marketing</a>
            </li>
            <li>
              <a href="https://medium.com/@MaikelSalles/telemedicine-in-remote-guidance-during-the-pandemic-21d4a4fc677d" target="blank">Telemedicine in remote guidance during the pandemic</a>
            </li>
            <li>
              <a href="https://medium.com/@MaikelSalles/gamification-as-an-engagement-strategy-cdaf952a6e9" target="blank">Gamification as an engagement strategy</a>
            </li>
            <li>
              <a href="https://medium.com/@MaikelSalles/playing-with-fear-to-conquer-security-ebe796f4268e" target="blank">Playing with fear, to conquer security</a>
            </li>
            <li><a href="https://medium.com/@MaikelSalles" target="_blank">More...</a></li>
          </ul>
        </div>
        <small>
              <a href="https://github.com/users/maikelsalles/projects/1" target="_blank" title="Project repository">Planned</a>, <a href="https://www.figma.com/file/sO4RwR8UsUSSsYPdBZY8XD/Portfolio-Maikel-Salles-team-library?type=design&node-id=511%3A944&mode=design&t=fi917vyAy3CT37IY-1" target="_blank" title="Project repository">Designed</a> and <a href="https://github.com/maikelsalles/personalwebsite" target="_blank" title="Project repository">Coded</a>.
        </small>
      </footer>
    )
}