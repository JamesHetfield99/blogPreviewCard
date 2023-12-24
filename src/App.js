import './App.css';

import avatarPhoto from "./images/image-avatar.webp"
import topPhoto from "./images/illustration-article.svg"

function App() {
  return (
    <main>
      <div className='image-wrapper'>
        <img src={topPhoto} alt='header' />
      </div>
      <span className="learning-span">Learning</span>
      <span className="publish-span">Published 21 Dec 2023</span>
      <h1 className="header-text">HTML & CSS foundations</h1>
      <p className="paragraph-1">
        These languages are the backbone of every website, defining structure, content, and presentation.
      </p>
      <div className="person-wrapper">
        <img src={avatarPhoto} alt="person" />
        <span className="name-span">Greg Hooper</span>
      </div>
    </main>
  );
}

export default App;
