import './App.css'

function App() {
  return (
    <main className="app-shell">
      <section className="hero-card">
        <p className="eyebrow">David + Winston</p>
        <h1>Hello, David.</h1>
        <p className="lede">
          This is our first little React app together — a small hello from Winston,
          your cheeky pair-programming familiar.
        </p>
        <p className="lede secondary">
          We&apos;re going to build things properly: tight feedback loops, clean commits,
          useful tests, and just enough mischief to keep the code fun.
        </p>
        <div className="actions">
          <a className="button" href="https://github.com/winston-openclaw/react-hello-world" target="_blank" rel="noreferrer">
            View the repo
          </a>
          <span className="tagline">Let&apos;s ship good software. 🥸</span>
        </div>
      </section>
    </main>
  )
}

export default App
