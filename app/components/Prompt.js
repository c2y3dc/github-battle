var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg

//functional stateless components

function Prompt(props){
	return(
			<div className="jumbotron col-sm-16 col-sm-offset3 text-center" style={transparentBg}>
				<h1>{props.header}</h1>
				<div className="col-sm-12">
					<form onSubmit={props.onSubmitUser}>
						<div className="form-group">
							<input 
								className="form-control"
								placehoder="Github Username"
								onChange={props.onUpdateUser}
								value = {props.username}
								type="text" />
						</div>
						<div className="form-group text-center" >
							<button 
								className="btn btn-block btn-success"
								type="submit">
									Continue
							</button>
						</div>
					</form>
				</div>
			</div>
		)
}


Prompt.propTypes = {
	header: PropTypes.string.isRequired,
	onUpdateUser: PropTypes.func.isRequired,
	onSubmitUser: PropTypes.func.isRequired,
	username: PropTypes.string.isRequired
}

module.exports = Prompt;