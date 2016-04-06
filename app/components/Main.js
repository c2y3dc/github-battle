import React from 'react'
import ReactCSSransitionGroup from 'react-addons-css-transition-group'
import './main.css'

const Main = function(props){
	return (
		<div className="main-container">
			<ReactCSSransitionGroup
				transitionName="appear"
				transitionEnterTimeout={500}
				transitionLeaveTimeout={500}>
					{React.cloneElement(props.children, {key: props.location.pathname})}
			</ReactCSSransitionGroup>
		</div>
	)
}

export default Main