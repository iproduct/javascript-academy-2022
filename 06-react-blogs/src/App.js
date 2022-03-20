import { useEffect, useState } from 'react';
import './App.css';
import BlogsClient from './service/blogs-api-client';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';
import Nav from './component/Nav';
import PostForm, { ADD } from './component/PostForm';
import TimedMessages, { ERROR } from './component/TimedMessages';


function App() {
  const [showPostForm, setShowPostForm] = useState(false);
  const [postEditMode, setPostEditMode] = useState(ADD);
  const [posts, setPosts] = useState([]);
  const [messages, setMessages] = useState();
  const [errors, setErrors] = useState();

  useEffect(() => BlogsClient.fetchPosts()
    .then(results => {
      setPosts(results)
      clearMessagesAndErors()
    })
    .catch(err => {
      clearMessagesAndErors();
      setErrors(err);
    })
    , [])

  function clearMessagesAndErors() {
    setMessages(undefined);
    setErrors(undefined);
  }

  function handleSubmitPost(post) {
    if (postEditMode === ADD) {
      BlogsClient.postNewPost(post)
        .then(created => {
          setPosts([...posts, created])
          setShowPostForm(false);
          clearMessagesAndErors();
          setMessages(`New Post created successfully: ${created.id}: '${created.title}'`)
        }).catch(err => {
          clearMessagesAndErors();
          setErrors(err);
        })
    }
  }
  return (
    <div className="App">
      <Nav />
      <Header actionButtonText={showPostForm ? 'Back to Posts' : 'Add New Post'}
        onActionButtonClicked={() => setShowPostForm(!showPostForm)}>
        <div>A modern responsive front-end framework based on Material Design</div>
        <header>My Blogs Demo</header>
        <span className="button-text">Add New Blog</span>
      </Header>
      <div className="container">
        <TimedMessages messages={messages} timeout={10000} key={messages} />
        <TimedMessages messages={errors} type={ERROR} timeout={10000} key={errors} />
        {showPostForm ?
          <PostForm mode={postEditMode} onSubmitPost={handleSubmitPost} /> :
          <Main posts={posts} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
