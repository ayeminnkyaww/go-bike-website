function App() {
  // Simple smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  const androidAPK = "./assets/gobike.apk";

  return (
    <>
      <header className="navbar">
        <h1 className="logo">GoBike</h1>
        <nav>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section className="hero">
        <h2>Run Your Bike Business Smarter</h2>
        <p>Manage members, track income, and control operations with GoBike.</p>
        <div className="hero-buttons">
          <a href="#download" className="btn primary">
            Download APK
          </a>
          <a href="#features" className="btn secondary">
            Learn More
          </a>
        </div>
      </section>
      <section id="features" className="features">
        <h3>Why GoBike?</h3>
        <div className="feature-list">
          <div className="card">
            <h4>Owner Dashboard</h4>
            <p>Monitor earnings, bikes, and employees in real time.</p>
          </div>
          <div className="card">
            <h4>Member Management</h4>
            <p>Register, track, and manage riders easily.</p>
          </div>
          <div className="card">
            <h4>Secure &amp; Fast</h4>
            <p>Built with modern technology for reliability.</p>
          </div>
        </div>
      </section>
      <section id="download" className="download">
        <h3>Download GoBike APK</h3>
        <p>Integrate GoBike into your business or app today.</p>
        <div className="download-buttons">
          <a download href={androidAPK} className="btn primary border">
            Android APK
          </a>
          <a
            onClick={() => alert("Sorry! Unavailable for ios")}
            className="btn primary border"
          >
            iOS APK
          </a>
        </div>
      </section>
      <footer id="contact">
        <p>© 2026 GoBike. All rights reserved.</p>
        <p>Email: support@gobike.app</p>
      </footer>
    </>
  );
}

export default App;
