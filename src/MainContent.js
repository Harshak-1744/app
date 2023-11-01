import React from 'react';
import Bounce from 'react-reveal/Bounce';

function MainContent() {
    return (
      <div>
        <h1 className="main">
          <Bounce bottom>Reasons I'm excited to learn React</Bounce>
        </h1>
        <ul className='main--ul'>
          <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
          <li>I'm more likely to get a job as a developer if I know React</li>
          <li>
            React has powerful features, such as virtual DOM, reusable components, and state management,
            making it easier to build scalable and maintainable applications.
          </li>
        </ul>
      </div>
    );
}

export default MainContent;
