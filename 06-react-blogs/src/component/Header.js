import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ children, actionButtonText, onActionButtonClicked }) => {
  const childrenArray = React.Children.toArray(children);
  console.log(childrenArray);
  return (
    <div className="section no-pad-bot" id="index-banner">
      <div className="container">
        <h1 className="header center orange-text">{childrenArray.find(reactElem => reactElem.type === "header")}</h1>
        <div className="row center">
          <h5 className="header col s12 light">{childrenArray.find(reactElem => reactElem.type === "div")}</h5>
        </div>
        <div className="row center">
          <button id="download-button" className="btn-large waves-effect waves-light orange" onClick={() => onActionButtonClicked()}>
            {actionButtonText}
          </button>
        </div>
      </div>
    </div>

  )
}

Header.propTypes = {
  actionButtonText: PropTypes.string.isRequired,
  onActionButtonClicked: PropTypes.func.isRequired
}

export default Header