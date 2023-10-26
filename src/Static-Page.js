import React from 'react';
import logo from './logo192.png';

function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="logo" src={logo} width="40px" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <div>
      <h1 className="main">Reasons I'm excited to learn React</h1>
      <ol>
        <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
        <li>I'm more likely to get a job as a developer if I know React</li>
        <li>
          React has powerful features, such as virtual DOM, reusable components, and state management,
          make it easier to build scalable and maintainable applications.
        </li>
      </ol>
    </div>
  );
}


function Footer() {
  return (
    <footer className="footer">
      <small>© 2023 HK development. All rights reserved.</small>
    </footer>
  );
}

const data = (
  <div>
    <Header />
    <MainContent />
    <Footer />
  </div>
);

export default data;
