import React from 'react'
import ConfirmBattle from '../components/ConfirmBattle'
import { getPlayersInfo } from  '../utils/githubHelpers'

const ConfirmBattleContainer = React.createClass({
	contextTypes:{
		router: React.PropTypes.object.isRequired
	},
	getInitialState() {
		return {
			isLoading: true,
			playersInfo: []
		}
	},
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
	},
	handleInitialBattle() {
		this.context.router.push({
			pathname: '/results',
			state: {
				playersInfo: this.state.playersInfo
			}
		})
	},
	render() {
		return(
			<ConfirmBattle 
				isLoading={this.state.isLoading}
				onInitiateBattle={this.handleInitialBattle} 
				playersInfo={this.state.playersInfo}
			/>
		)
	}
});

export default ConfirmBattleContainer