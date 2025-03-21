import './App.css'
import {Language} from "./types.ts";
import {languages} from "./languages.ts";
import {JSX, useState} from "react";

function App() {
    /**
     * Goal: Build out the main parts of our app
     *
     * Challenge:
     * Display the keyboard ⌨️. Use <button>s for each letter
     * since it'll need to be clickable and tab-accessible.
     */
    const [currentWord, setCurrentWord] = useState("react")

    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const letterElements: JSX.Element[] = currentWord.split("").map((letter: string, index: number) =>
        <span key={index}>{letter.toUpperCase()}</span>
    )

    const languageElements: JSX.Element[] = languages.map((language: Language) =>
        <div style={{backgroundColor: language.backgroundColor, color: language.color}} key={language.name}>
            {language.name}
        </div>
    )

    const keyboardElements: JSX.Element[] = alphabet.split("").map((letter: string) =>
        <button>{letter.toUpperCase()}</button>
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
            <section className="keyboard">
                {keyboardElements}
            </section>
        </main>
    )
}

export default App
