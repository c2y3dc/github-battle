import React, { PropTypes } from 'react'
import { transparentBg } from '../styles'
import MainContainer from '../containers/MainContainer'

//functional stateless components

function Prompt(props){
	return(
			<MainContainer>
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
			</MainContainer>
		)
}


Prompt.propTypes = {
	header: PropTypes.string.isRequired,
	onUpdateUser: PropTypes.func.isRequired,
	onSubmitUser: PropTypes.func.isRequired,
	username: PropTypes.string.isRequired
}

export default Prompt