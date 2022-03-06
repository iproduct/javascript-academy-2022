import React, { useEffect, useState } from 'react';
import BlogsClient from '../service/blogs-api-client';
import PropTypes from 'prop-types';

const Main = props => {
    const [blogs, setBlogs] = useState([]);
    const [messages, setMessages] = useState();
    const [errors, setErrors] = useState();
    function clearMessagesAndErors() {
        setMessages(undefined);
        setErrors(undefined);
    }
    useEffect(() => {
        BlogsClient.fetchPosts()
            .then(results => {
                setBlogs(results)
                clearMessagesAndErors()
            })
            .catch(err => {
                setErrors(err)
            });
    }, [])
    return (
        <div className="container">
            <div className="section">
                <div className="row">
                    <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center light-blue-text"><i className="material-icons">flash_on</i></h2>
                            <h5 className="center">Speeds up development</h5>

                            <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                        </div>
                    </div>

                    <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center light-blue-text"><i className="material-icons">group</i></h2>
                            <h5 className="center">User Experience Focused</h5>

                            <p className="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
                        </div>
                    </div>

                    <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center light-blue-text"><i className="material-icons">settings</i></h2>
                            <h5 className="center">Easy to work with</h5>

                            <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

Main.propTypes = {}

export default Main