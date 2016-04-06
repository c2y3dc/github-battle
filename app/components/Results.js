import React, { PropTypes } from 'react'
import { space } from '../styles'
import UserDetails from './UserDetails'
import UserDetailsWrapper from './UserDetailsWrapper'
import { Link } from 'react-router'
import MainContainer from '../containers/MainContainer'
import Loading from './Loading'

function StartOver(){
	return (
    <div className="col-sm-12" style={space}>
      <Link to='/playerOne'>
        <button type="button" className="btn btn-lg btn-danger">Start Over</button>
      </Link>
    </div>
	)
}

function Tie(props){
  return(
    <MainContainer>
			<h1>It's a tie!</h1>
      <StartOver />
    </MainContainer>
  )
}

function Results(props) {
  if(props.isLoading === true){
    return (
      <Loading text='One Moment' speed={100}/>
    )
  }

  if(props.scores[0] === props.scores[1]){
    return (
        <Tie scores={props.scores} playersInfo={props.playersInfo}/>
		)
	}

  const winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  const losingIndex = winningIndex === 0 ? 1 : 0;
  return (
  	<MainContainer>
  		<h1>Results: </h1>
  		<div className='col-sm-8 col-sm-offset2'>
  			<UserDetailsWrapper header='Winner'>
  				<UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
  			</UserDetailsWrapper>
  			<UserDetailsWrapper header='Loser'>
  				<UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
  			</UserDetailsWrapper>
  		</div>
  		<div className="col-sm-12" style={space}>
        <StartOver />
  		</div>
  	</MainContainer>
  );
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired,
};

export default Results
