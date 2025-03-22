import './App.css'
import {Language} from "./types.ts";
import {languages} from "./languages.ts";
import {JSX, useState} from "react";
import {clsx} from "clsx";

/**
 * Goal: Add in the incorrect guesses mechanism to the game
 *
 * Challenge:
 * 1. Create a variable `isGameOver` which evaluates to `true`
 *    if the user has guessed incorrectly 8 times. Consider how
 *    we might make this more dynamic if we were ever to add or
 *    remove languages from the languages array.
 * 2. Conditionally render the New Game button only if the game
 *    is over.
 */

function App() {
    // State values
    const [currentWord, setCurrentWord] = useState("react")
    const [guessedLetters, setGuessedLetters] = useState<string[]>([])

    // Derived values
    const wrongGuessCount = guessedLetters.filter(i => !currentWord.includes(i)).length
    const isGameWon = currentWord.split("").every(i => guessedLetters.includes(i))
    const isGameOver = wrongGuessCount >= languages.length - 1

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
            {isGameOver &&
                <button className="new-game">
                    New Game
                </button>
            }
        </main>
    )
}

export default App
