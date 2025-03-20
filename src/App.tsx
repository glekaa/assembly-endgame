import './App.css'

function App() {
    /**
     * Goal: Build out the main parts of our app
     *
     * Challenge: Build a status section below the header.
     * For now, you can just hard-code in the styles for
     * a winning game, and we'll make it more dynamic
     * later.
     */
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
        </main>
    )
}

export default App
