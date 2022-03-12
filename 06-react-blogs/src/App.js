import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';
import Nav from './component/Nav';
import { TabContainer } from './component/TabContainer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header>
        <div>A modern responsive front-end framework based on Material Design</div>
        <header>My Blogs Demo</header>
        <span className="button-text">Add New Blog</span>
      </Header>
      <TabContainer />
      {/* <Main /> */}
      <Footer />
    </div>
  );
}

export default App;
