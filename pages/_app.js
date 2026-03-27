import '../public/css/style.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <header>
        <h1><a href="/" style={{ color: 'white', textDecoration: 'none' }}>0CMS Next.js</a></h1>
        <nav>
          <a href="/">Home</a>
          <a href="/about" style={{ marginLeft: '1rem' }}>About</a>
          <a href="/contact" style={{ marginLeft: '1rem' }}>Contact</a>
        </nav>
      </header>
      <main className="container">
        <Component {...pageProps} />
      </main>
      <footer>
        <p>&copy; 2026 0CMS Next.js Example. Built with Next.js.</p>
      </footer>
      <script dangerouslySetInnerHTML={{ __html: `
        document.addEventListener('click', (e) => {
          if (e.target.classList.contains('accordion-header')) {
            e.target.parentElement.classList.toggle('active');
          }
        });
      ` }} />
    </>
  )
}
