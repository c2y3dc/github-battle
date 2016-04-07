import React, { Component } from 'react'
import ConfirmBattle from '../components/ConfirmBattle'
import { getPlayersInfo } from  '../utils/githubHelpers'

class ConfirmBattleContainer extends Component{
	constructor() {
		super()
		this.state = {
			isLoading: true,
			playersInfo: []
		}
	}
	async componentDidMount() {
		const { query } = this.props.location;
		//fetch info from github then update state
		//https://egghead.io/playlists/the-this-key-word-250c37d9
		try {
			const players = await getPlayersInfo([query.playerOne, query.playerTwo])
			this.setState({
				isLoading: false,
				playersInfo: [players[0], players[1]]
			})
		} catch(error){
			console.warn("Error in ConfirmBattleContainer", error)
		}
	}
	handleInitialBattle() {
		this.context.router.push({
			pathname: '/results',
			state: {
				playersInfo: this.state.playersInfo
			}
		})
	}
	render() {
		return(
			<ConfirmBattle 
				isLoading={this.state.isLoading}
				onInitiateBattle={() => this.handleInitialBattle()} 
				playersInfo={this.state.playersInfo}
			/>
		)
	}
}

ConfirmBattleContainer.contextTypes = {
	router: React.PropTypes.object.isRequired
}

export default ConfirmBattleContainer