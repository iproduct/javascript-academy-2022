import React from 'react';

export const TabContainer = ({ children }) => {
    const tabs = React.Children.toArray(children).filter(child => child.type.name === 'TabPanel')
    console.log(tabs)
    return (
        <div className="row">
            <div className="col s12">
                <ul className="tabs">
                    {tabs.map(tab => (
                        <li key={tab.props.id} className="tab col s3"><a href={'#' + tab.props.id}>{tab.props.title}</a></li>
                    ))}
                </ul>
            </div>
            {children}
        </div>
    )
}
