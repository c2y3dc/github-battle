var React = require('react');
var ReactCSSransitionGroup = require('react-addons-css-transition-group');
require('./main.css');

var Main = function(props){
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

module.exports = Main;