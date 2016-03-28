var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('../containers/MainContainer');

var Home = React.createClass({
	render: function(){
		return (
			<MainContainer>
				<h1>Github Battle</h1>
				<p className='lead'>Some fancy motto</p>
				<Link to='/playerOne'>
					<button type='button' className='btn btn-lg btn-success'>Get Started</button>
				</Link>
			</MainContainer>
		)
	}
});

// var Home = function(props) {
// 	return (
// 		<div> Hello from Home!</div>
// 	)
// }

module.exports = Home;