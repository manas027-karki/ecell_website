import React from 'react';
import '../styles/about.css';
import { FaUsers, FaBullseye, FaTrophy, FaCalendarAlt, FaCalendar } from 'react-icons/fa';

const SectionCard = ({ icon: Icon, title, children, alt, imageUrl, size }) => (
  <section className={`about-card ${alt ? 'alt' : ''} ${size ? `size-${size}` : ''}`}>
    <div className="card-top">
      <div className="card-icon"><Icon /></div>
      <h2 className="card-title">{title}</h2>
    </div>
    <hr className="card-divider" />
    <div className="card-body">
      <div className="card-content">{children}</div>
      <div className="card-image">
        <img src={imageUrl} alt={`${title} illustration`} />
      </div>
    </div>
  </section>
);

const About = () => {
  const placeholder = (w = 400, h = 220, text = 'Image') =>
    `https://via.placeholder.com/${w}x${h}.png?text=${encodeURIComponent(text)}`;

  return (
    <div className="about-page">
      <header className="about-hero">
        <h1>About ECELL MSIT</h1>
        <p className="hero-sub">Fostering innovation and entrepreneurship on campus.</p>
      </header>

      <div className="about-grid">
        <SectionCard icon={FaUsers} title="Who Are We" size="large" imageUrl={placeholder(420,240,'Who+We+Are')}>
          <p>
            At E-Cell MSIT, we believe in fostering innovation and entrepreneurship among our students.
            Our incubation program provides a platform for young entrepreneurs to turn their ideas into
            successful startups. We are dedicated to nurturing the entrepreneurial spirit by offering
            guidance, resources, and networking opportunities to help transform ideas into impactful businesses.
          </p>
        </SectionCard>

        <SectionCard icon={FaBullseye} title="Our Mission" alt size="medium" imageUrl={placeholder(420,240,'Our+Mission')}>
          <p>
            Our mission is to create a vibrant ecosystem that supports the growth of innovative startups.
            We provide resources, mentorship, and funding opportunities to help our startups succeed. By
            fostering collaboration between aspiring entrepreneurs, industry leaders, and investors, we aim
            to empower the next generation of innovators to turn their ideas into impactful businesses.
          </p>
        </SectionCard>

        <SectionCard icon={FaTrophy} title="Our Achievements" size="small" imageUrl={placeholder(420,240,'Achievements')}>
          <ul>
            <li>Mr. Simarneet Singh's startup, Jagudau, selected for Shark Tank 2025.</li>
            <li>Mr. Manav Solanki's startup, Crowdfuez, awarded by the President of India.</li>
            <li>Successful organization of Ideathon in association with NASSCOM.</li>
            <li>Over 50 startups incubated and funded in the last year.</li>
          </ul>
        </SectionCard>

        <SectionCard icon={FaCalendar} title="Events" alt size="medium" imageUrl={placeholder(420,240,'Events')}>
          <p>
            We organize various events throughout the year to promote entrepreneurship and innovation. Some key events include:
          </p>
          <ul>
            <li>Annual Startup Fest</li>
            <li>Monthly Workshops on Business Development</li>
            <li>Networking Events with Industry Leaders</li>
            <li>Pitch Competitions for Startups</li>
          </ul>
        </SectionCard>

        <SectionCard icon={FaCalendarAlt} title="Establishment" size="large" imageUrl={placeholder(420,240,'Establishment')}>
          <p>
            E-Cell MSIT was established in 2020 with the vision to create a supportive environment for budding entrepreneurs.
            Since our inception, we have been committed to empowering students to explore their entrepreneurial potential and make a difference in the world.
          </p>
        </SectionCard>
      </div>
    </div>
  );
};

export default About;
