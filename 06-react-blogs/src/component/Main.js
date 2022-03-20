import React, { Component} from 'react';
import PropTypes from 'prop-types';
import PostList from './PostList';
import { TabContainer } from './TabContainer';
import { TabPanel } from './TabPanel';
// import M from 'materialize-css/dist/js/materialize';

class Main extends Component {
    // componentDidMount() {
    //     const tabElem = document.querySelector(".tabs");
    //     console.log(">>>>", tabElem);
    //     M.Tabs.init(tabElem);
    // }
    render() {
        return (
            <div className="section">
                <div className="row">
                    <TabContainer>
                        <TabPanel id="results" title="All Blogs"> <PostList posts={this.props.posts} /></TabPanel>
                        <TabPanel id="favourites" title="Favourite Blogs">Test 2 content ...</TabPanel>
                        <TabPanel id="settings" title="Blog Settings">Blog settings here ...</TabPanel>
                    </TabContainer>
                </div>
            </div>
        )
    }
}


Main.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        imageUrl: PropTypes.string.isRequired,
        authorId: PropTypes.number.isRequired,
        active: PropTypes.bool.isRequired
    }))
}

export default Main