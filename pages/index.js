import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head><title>Home | 0CMS Next.js</title></Head>
      <h2>Welcome to 0CMS Next.js</h2>
      <p>This is the homepage of the 0CMS Next.js example — built with React and static export.</p>
      <h2>Featured Services</h2>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem'}}>
        <div className="card">
          <img src="https://placehold.co/600x400" alt="Fast" style={{width:'100%',borderRadius:'4px'}}/>
          <h3>Fast</h3>
          <p>Next.js static export is lightning fast.</p>
        </div>
        <div className="card">
          <img src="https://placehold.co/600x400" alt="Flexible" style={{width:'100%',borderRadius:'4px'}}/>
          <h3>Flexible</h3>
          <p>React-powered with full static output support.</p>
        </div>
      </div>
      <h2>FAQ</h2>
      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-header">What is Next.js?</div>
          <div className="accordion-content">A React framework for production with SSR and SSG.</div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header">Does it support static export?</div>
          <div className="accordion-content">Yes, with <code>output: &apos;export&apos;</code> in next.config.js.</div>
        </div>
      </div>
    </>
  )
}
