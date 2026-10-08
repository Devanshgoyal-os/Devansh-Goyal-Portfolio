import { useEffect, useState, type FormEvent } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Braces,
  Code2,
  Database,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from 'lucide-react';

const navigation = [
  ['home', 'Home'],
  ['about', 'About'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['education', 'Education'],
  ['achievements', 'Achievements'],
  ['certifications', 'Certifications'],
  ['experience', 'Experience'],
  ['contact', 'Contact'],
] as const;

const skillGroups = [
  { number: '01', title: 'Programming languages', items: ['C++', 'Python', 'Java', 'SQL', 'C'] },
  { number: '02', title: 'Data structures & algorithms', items: ['Arrays', 'Strings', 'Linked Lists', 'Stack', 'Queue', 'Trees', 'Sorting', 'Searching', 'Recursion', 'Hashing', 'Greedy Algorithms'] },
  { number: '03', title: 'Machine learning & data', items: ['Regression', 'Classification', 'Data Preprocessing', 'Exploratory Data Analysis', 'Scikit-learn', 'Random Forest', 'Data Analysis', 'Pandas', 'NumPy'] },
  { number: '04', title: 'Web & database', items: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Spring Boot', 'MySQL', 'SQL'] },
  { number: '05', title: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Kaggle'] },
  { number: '06', title: 'Core computer science', items: ['OOP', 'DBMS', 'Operating Systems', 'Computer Networks'] },
];

const achievements = [
  { value: '350+', label: 'LeetCode problems solved' },
  { value: '1480', label: 'LeetCode rating' },
  { value: '320+', label: 'CodeChef problems solved' },
  { value: '1184', label: 'CodeChef max rating' },
  { value: '1 Star', label: 'CodeChef' },
  { value: '20%', label: 'Kaggle expertise' },
  { value: '65+', label: 'GeeksforGeeks problems solved' },
  { value: '6–7', label: 'Hackathons participated in' },
];

const certifications = [
  ['CodeChef', 'Silver Batch'],
  ['Be10X', 'AI Tools and ChatGPT'],
  ['Simplilearn', 'Web Development'],
  ['IBM', 'AI Fundamentals'],
  ['Google Cloud', 'Generative AI'],
  ['NASSCOM', 'Exploratory Data Analysis'],
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const sections = navigation
      .map(([id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-24% 0px -62% 0px', threshold: [0, 0.15, 0.35, 0.65] },
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  const navigateTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (event.currentTarget.reportValidity()) setSubmitted(true);
  };

  return (
    <div className="min-h-[100dvh]">
      <header className={`site-header${scrolled ? ' scrolled' : ''}`} data-testid="site-header">
        <div className="page-wrap nav-inner">
          <a
            className="brand-mark"
            href="#home"
            onClick={(event) => { event.preventDefault(); navigateTo('home'); }}
            data-testid="link-home-brand"
            aria-label="Devansh Goyal, home"
          >
            <span className="brand-monogram" aria-hidden="true">DG</span>
            <span className="brand-name">Devansh Goyal</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            data-testid="button-mobile-menu"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
          <nav id="primary-navigation" className={`nav-links${menuOpen ? ' open' : ''}`} aria-label="Main navigation">
            {navigation.map(([id, label]) => (
              <a
                key={id}
                className={`nav-link${activeSection === id ? ' active' : ''}`}
                href={`#${id}`}
                aria-current={activeSection === id ? 'location' : undefined}
                onClick={(event) => { event.preventDefault(); navigateTo(id); }}
                data-testid={`link-nav-${id}`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="hero page-wrap" id="home" aria-labelledby="hero-title" data-testid="section-home">
          <div className="hero-grid">
            <div className="reveal">
              <div className="hero-kicker"><span className="status-dot" /> B.Tech student · Ghaziabad, India</div>
              <h1 id="hero-title">Hi, I&apos;m<br /><span>Devansh Goyal</span></h1>
              <p className="hero-subtitle">B.Tech CSE (AI &amp; ML) Student</p>
              <p className="hero-tagline">Software Development | AI/ML | Data Analytics | Problem Solving</p>
              <p className="hero-intro">
                I am a B.Tech Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning. I have a strong interest in software development, machine learning, data analytics, problem solving and building practical technology projects. I actively practice Data Structures and Algorithms and enjoy developing web, data and AI-based applications.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects" onClick={(event) => { event.preventDefault(); navigateTo('projects'); }} data-testid="button-view-projects">
                  View My Projects <ArrowRight size={15} />
                </a>
                <a className="button button-secondary" href="#contact" onClick={(event) => { event.preventDefault(); navigateTo('contact'); }} data-testid="button-contact-me">
                  Contact Me <ArrowUpRight size={15} />
                </a>
              </div>
              <div className="scroll-note">A little about my work</div>
            </div>
            <div className="hero-art" aria-label="Developer initials illustration">
              <div className="orbit" aria-hidden="true" />
              <span className="orbit-label one">build / learn</span>
              <span className="orbit-label two">AI + data</span>
              <span className="orbit-label three">problem solving</span>
              <div className="initials-card" data-testid="text-initials">
                <span>DG</span>
                <div className="initials-caption">Devansh Goyal</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad page-wrap" id="about" aria-labelledby="about-title" data-testid="section-about">
          <div className="section-head">
            <div><div className="eyebrow">01 / A little context</div><h2 className="section-title" id="about-title">About me</h2></div>
            <p>Building a strong foundation in computer science, with a focus on practical software, data and AI work.</p>
          </div>
          <div className="about-grid">
            <div className="panel about-copy">
              <p>
                I am pursuing a B.Tech in Computer Science &amp; Engineering (Artificial Intelligence &amp; Machine Learning) at ABES Engineering College, Ghaziabad. My interests span software development, artificial intelligence, machine learning, data analytics, data structures and algorithms, and full stack development.
              </p>
              <div className="interest-label">Areas of interest</div>
              <div className="chip-list">
                {['Software Development', 'Artificial Intelligence', 'Machine Learning', 'Data Analytics', 'Data Structures & Algorithms', 'Full Stack Development'].map((item) => <span className="chip" key={item}>{item}</span>)}
              </div>
            </div>
            <div className="panel education-highlight" data-testid="card-about-education">
              <div>
                <div className="small-label">Currently studying</div>
                <div className="degree-title">Computer Science &amp; Engineering</div>
                <div className="degree-sub">Artificial Intelligence &amp; Machine Learning<br />ABES Engineering College · Ghaziabad</div>
                <div className="waiver"><i aria-hidden="true" />Tuition Fee Waiver at ABES for strong academic performance</div>
              </div>
              <div className="degree-bottom">
                <span className="degree-dates">2024–2028</span>
                <span className="cgpa">CGPA: 8.4/10</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad page-wrap" id="skills" aria-labelledby="skills-title" data-testid="section-skills">
          <div className="section-head">
            <div><div className="eyebrow">02 / Technical toolkit</div><h2 className="section-title" id="skills-title">Skills</h2></div>
            <p>A growing toolkit across programming, data, machine learning and the fundamentals behind them.</p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="panel skill-card" key={group.number} data-testid={`card-skill-group-${group.number}`}>
                <div className="skill-number">{group.number} / 06</div>
                <h3>{group.title}</h3>
                <div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad page-wrap" id="projects" aria-labelledby="projects-title" data-testid="section-projects">
          <div className="section-head">
            <div><div className="eyebrow">03 / Selected work</div><h2 className="section-title" id="projects-title">Projects</h2></div>
            <p>Practical projects exploring data analysis, full-stack development and AI-based product ideas.</p>
          </div>
          <div className="projects-grid">
            <article className="panel project-card" data-testid="card-project-zomato">
              <div className="project-top"><span className="project-index">PROJECT 01</span><span className="project-mark"><BrainCircuit size={18} /></span></div>
              <h3>Zomato Data Analysis</h3>
              <p>Performed exploratory data analysis on Zomato restaurant data to identify patterns and insights related to restaurant ratings, cuisines, locations, pricing and customer preferences. Cleaned and analyzed the dataset using Python and created visualizations to communicate meaningful insights.</p>
              <div className="tech-list">{['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Data Analysis'].map((tech) => <span key={tech}>{tech}</span>)}</div>
              <ul className="project-highlights">
                {['Data cleaning', 'Exploratory Data Analysis', 'Data visualization', 'Restaurant and rating analysis', 'Business insights'].map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </article>
            <article className="panel project-card" data-testid="card-project-bankease">
              <div className="project-top"><span className="project-index">PROJECT 02</span><span className="project-mark"><Database size={18} /></span></div>
              <h3>BankEase – NextGen Net Banking</h3>
              <p>Developed a full-stack net banking application designed to provide essential digital banking services through a secure and user-friendly interface.</p>
              <div className="tech-list">{['Java', 'Spring Boot', 'Angular', 'MySQL', 'SQL', 'HTML', 'CSS', 'JavaScript'].map((tech) => <span key={tech}>{tech}</span>)}</div>
              <ul className="project-highlights">
                {['User registration and login', 'Account management', 'Fund transfer', 'Transaction management', 'Bill payment', 'Banking dashboard', 'Profile management'].map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
              <div className="architecture">
                <span><b>Frontend</b>Angular</span>
                <span><b>Backend</b>Java + Spring Boot</span>
                <span><b>Database</b>MySQL</span>
              </div>
            </article>
            <article className="panel other-work" data-testid="card-project-amcart">
              <div>
                <div className="project-index">OTHER WORK</div>
                <h3>AmCart – AI-Based E-Commerce Website</h3>
              </div>
              <div>
                <p>Developed an AI-based e-commerce website with product browsing and shopping features, including AI-based product recommendation concepts and responsive pages.</p>
                <div className="tech-list">{['HTML', 'CSS', 'JavaScript', 'Python', 'AI'].map((tech) => <span key={tech}>{tech}</span>)}</div>
              </div>
            </article>
          </div>
        </section>

        <section className="section-pad page-wrap" id="education" aria-labelledby="education-title" data-testid="section-education">
          <div className="section-head">
            <div><div className="eyebrow">04 / Academic background</div><h2 className="section-title" id="education-title">Education</h2></div>
            <p>Learning through coursework, consistent practice and strong academic performance.</p>
          </div>
          <div className="timeline">
            <article className="education-item" data-testid="card-education-btech">
              <div>
                <div className="edu-kind">Undergraduate · 2024–2028</div>
                <h3>B.Tech – Computer Science &amp; Engineering</h3>
                <p>Artificial Intelligence &amp; Machine Learning<br />ABES Engineering College · Ghaziabad, Uttar Pradesh</p>
                <p className="edu-award">Tuition Fee Waiver – Awarded for strong academic performance</p>
              </div>
              <div className="edu-result">CGPA: 8.4/10</div>
            </article>
            <article className="education-item" data-testid="card-education-xii">
              <div>
                <div className="edu-kind">Class XII · CBSE</div>
                <h3>Ch. Chhabil Dass Public School</h3>
                <p>2023–24</p>
              </div>
              <div className="edu-result">93%</div>
            </article>
            <article className="education-item" data-testid="card-education-x">
              <div>
                <div className="edu-kind">Class X · CBSE</div>
                <h3>Ch. Chhabil Dass Public School</h3>
                <p>2021–22</p>
              </div>
              <div className="edu-result">94.4%</div>
            </article>
          </div>
        </section>

        <section className="section-pad page-wrap" id="achievements" aria-labelledby="achievements-title" data-testid="section-achievements">
          <div className="section-head">
            <div><div className="eyebrow">05 / Practice &amp; participation</div><h2 className="section-title" id="achievements-title">Achievements</h2></div>
            <p>Milestones from regular problem-solving practice and participation in the wider tech community.</p>
          </div>
          <div className="achievement-grid">
            {achievements.map((item, index) => (
              <article className="panel stat-card" key={item.label} data-testid={`card-achievement-${index + 1}`}>
                <div className="stat-value">{item.value}</div>
                <div className="stat-label">{item.label}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad page-wrap" id="certifications" aria-labelledby="certifications-title" data-testid="section-certifications">
          <div className="section-head">
            <div><div className="eyebrow">06 / Continued learning</div><h2 className="section-title" id="certifications-title">Certifications</h2></div>
            <p>Course and learning credentials across programming, web development, AI and data analysis.</p>
          </div>
          <div className="cert-grid">
            {certifications.map(([issuer, title], index) => (
              <article className="panel cert-card" key={issuer} data-testid={`card-certification-${index + 1}`}>
                <span className="cert-number">{String(index + 1).padStart(2, '0')}</span>
                <div><strong>{issuer}</strong><span>{title}</span></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad page-wrap" id="experience" aria-labelledby="experience-title" data-testid="section-experience">
          <div className="section-head">
            <div><div className="eyebrow">07 / Teaching experience</div><h2 className="section-title" id="experience-title">Experience</h2></div>
            <p>Experience developed through one-to-one teaching and supporting students in their learning.</p>
          </div>
          <article className="panel experience-panel" data-testid="card-experience-tutor">
            <div>
              <div className="small-label">Independent tutoring</div>
              <h3>Private Home Tutor – Classes up to 10th</h3>
              <p>Provided one-to-one tutoring to Class 10 and below students across multiple subjects. Adapted teaching methods to individual needs and managed lesson planning, student progress and scheduling.</p>
              <div className="experience-context">ONE-TO-ONE · MULTIPLE SUBJECTS · LESSON PLANNING</div>
            </div>
            <span className="duration">2+ Years</span>
          </article>
        </section>

        <section className="section-pad page-wrap" id="contact" aria-labelledby="contact-title" data-testid="section-contact">
          <div className="section-head">
            <div><div className="eyebrow">08 / Get in touch</div><h2 className="section-title" id="contact-title">Contact</h2></div>
            <p>For opportunities, collaboration or a conversation about technology and learning.</p>
          </div>
          <div className="contact-grid">
            <div>
              <p className="contact-intro">You can reach me directly by email or phone, or connect with me on these platforms.</p>
              <div className="contact-list">
                <a className="contact-link" href="mailto:devanshgoyal4037@gmail.com" data-testid="link-contact-email">
                  <span className="contact-icon"><Mail size={16} /></span><span>devanshgoyal4037@gmail.com</span>
                </a>
                <a className="contact-link" href="tel:+918826004037" data-testid="link-contact-phone">
                  <span className="contact-icon"><Phone size={16} /></span><span>+91-8826004037</span>
                </a>
                <a className="contact-link" href="https://www.linkedin.com/in/devansh-goyal-280520338/" target="_blank" rel="noreferrer" data-testid="link-contact-linkedin">
                  <span className="contact-icon"><Layers3 size={16} /></span><span>LinkedIn <ArrowUpRight size={12} /></span>
                </a>
                <a className="contact-link" href="https://github.com/Devanshgoyal-os" target="_blank" rel="noreferrer" data-testid="link-contact-github">
                  <span className="contact-icon"><Code2 size={16} /></span><span>GitHub <ArrowUpRight size={12} /></span>
                </a>
                <a className="contact-link" href="https://kaggle.com/devanshgoyal019" target="_blank" rel="noreferrer" data-testid="link-contact-kaggle">
                  <span className="contact-icon"><Braces size={16} /></span><span>Kaggle <ArrowUpRight size={12} /></span>
                </a>
                <div className="contact-link" data-testid="text-contact-location">
                  <span className="contact-icon"><MapPin size={16} /></span><span>Ghaziabad, Uttar Pradesh, India</span>
                </div>
              </div>
            </div>
            <form className="panel contact-form" onSubmit={handleSubmit} data-testid="form-contact">
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="contact-name">Name</label>
                  <input id="contact-name" name="name" type="text" placeholder="Your name" autoComplete="name" required data-testid="input-contact-name" />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-email">Email</label>
                  <input id="contact-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required data-testid="input-contact-email" />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" placeholder="Write your message..." required data-testid="input-contact-message" />
              </div>
              <div className="submit-row">
                <button className="button button-primary" type="submit" data-testid="button-send-message">Send Message <ArrowRight size={15} /></button>
                <span className="form-note">Demo form · messages are not sent</span>
              </div>
              {submitted && <p className="form-success" role="status" aria-live="polite" data-testid="status-contact-form">Thanks for reaching out! This demo contact form is currently not connected to a backend.</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer" data-testid="site-footer">
        <div className="page-wrap">
          <div className="footer-top">
            <div>
              <div className="footer-name">Devansh Goyal</div>
              <div className="footer-title">B.Tech CSE (AI &amp; ML) Student</div>
            </div>
            <nav className="footer-socials" aria-label="Social links">
              <a href="https://www.linkedin.com/in/devansh-goyal-280520338/" target="_blank" rel="noreferrer" data-testid="link-footer-linkedin">LinkedIn <ArrowUpRight size={11} /></a>
              <a href="https://github.com/Devanshgoyal-os" target="_blank" rel="noreferrer" data-testid="link-footer-github">GitHub <ArrowUpRight size={11} /></a>
              <a href="https://kaggle.com/devanshgoyal019" target="_blank" rel="noreferrer" data-testid="link-footer-kaggle">Kaggle <ArrowUpRight size={11} /></a>
              <a href="mailto:devanshgoyal4037@gmail.com" data-testid="link-footer-email">Email <ArrowUpRight size={11} /></a>
            </nav>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Devansh Goyal. All rights reserved.</span>
            <span>Built with AI-assisted development using Replit</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
