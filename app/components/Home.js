import React from 'react'
import {Link} from 'react-router'
import MainContainer from '../containers/MainContainer'
import {transparentBG} from '../styles'

const Home = React.createClass({
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

export default Home