import { useState } from 'react';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';
import Nav from './component/Nav';
import PostForm from './component/PostForm';

function App() {
  const [showPostForm, setShowPostForm] = useState(false);
  return (
    <div className="App">
      <Nav />
      <Header actionButtonText={showPostForm ? 'Back to Posts' : 'Add New Post'} 
        onActionButtonClicked={()=>setShowPostForm(!showPostForm)}>
        <div>A modern responsive front-end framework based on Material Design</div>
        <header>My Blogs Demo</header>
        <span className="button-text">Add New Blog</span>
      </Header>
      <div className="container">
        {showPostForm ? <PostForm /> : <Main />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
