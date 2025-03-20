import './App.css'
import {Language} from "./types.ts";
import {languages} from "./languages.ts";
import {JSX, useState} from "react";

function App() {
    /**
     * Goal: Build out the main parts of our app
     *
     * Challenge:
     * 1. Save a "currentWord" in state. Initialize as "react".
     * 2. Map over the letters of the word (you'll need to turn
     *    the string into an array of letters first) and display
     *    each one as a <span>. Capitalize the letters when
     *    displaying them.
     * 3. Style to look like the design. You can get the underline
     *    effect on the box using `border-bottom`.
     */
    const [currentWord, setCurrentWord] = useState("react")
    const letterElements: JSX.Element[] = currentWord.split("").map((letter: string, index: number) =>
        <span key={index}>{letter.toUpperCase()}</span>
    )

    const languageElements: JSX.Element[] = languages.map((language: Language) =>
        <div style={{backgroundColor: language.backgroundColor, color: language.color}} key={language.name}>
            {language.name}
        </div>
    )

    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
            </header>
            <section className="alert">
                <h2>You win!</h2>
                <p>Well done! 🎉</p>
            </section>
            <section className="chips">
                {languageElements}
            </section>
            <section className="word-input">
                {letterElements}
            </section>
        </main>
    )
}

export default App
