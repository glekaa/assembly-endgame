import './App.css'
import {Language} from "./types.ts";
import {languages} from "./languages.ts";
import {JSX, useState} from "react";
import {clsx} from "clsx";

function App() {
    // State values
    const [currentWord, setCurrentWord] = useState("react")
    const [guessedLetters, setGuessedLetters] = useState<string[]>([])

    // Derived values
    const wrongGuessCount = guessedLetters.filter(i => !currentWord.includes(i)).length

    // Static values
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    function addGuessedLetter(letter: string) {
        setGuessedLetters(prevLetters =>
            guessedLetters.includes(letter) ?
                prevLetters :
                [...prevLetters, letter]
        )
    }

    const letterElements: JSX.Element[] = currentWord.split("").map((letter: string, index: number) =>
        <span key={index}>{guessedLetters.includes(letter) ? letter.toUpperCase() : ""}</span>
    )

    const languageElements: JSX.Element[] = languages.map((language: Language, index: number) => {

        const className = clsx("chip", index < wrongGuessCount && "lost")

        return (
        <span
            style={{backgroundColor: language.backgroundColor, color: language.color}}
            className={className}
            key={language.name}
        >
            {language.name}
        </span>)
        }
    )

    const keyboardElements: JSX.Element[] = alphabet.split("").map((letter: string) => {
            const className: string = clsx({
                correct: currentWord.includes(letter) && guessedLetters.includes(letter),
                wrong: !currentWord.includes(letter) && guessedLetters.includes(letter),
            })

            return (
                <button
                    key={letter}
                    onClick={() => addGuessedLetter(letter)}
                    className={className}
                >
                    {letter.toUpperCase()}
                </button>
            )
        }
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
            <button className="new-game">
                New Game
            </button>
        </main>
    )
}

export default App
