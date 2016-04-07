import axios from 'axios'

const id = "YOUR_CLIENT_ID";
const sec = "YOUR_SECRET_ID";
const param = `?client_id=${id}&client_secret=${sec}`;

function getUserInfo(username = 'c2y3dc'){
	return axios.get(`https://api.github.com/users/${username + param}`);
}

function getRepos(username = 'c2y3dc'){
	//fetch username's repos
	return axios.get(`https://api.github.com/users/${username}/repos${param}&per_page=100`);
}

function getTotalStars(repos){
	//calculate all the stars that the user has
	return repos.data.reduce((prev, current) => prev + current.stargazers_count, 0)
}

function getPlayersData(player) {
	// get repos
	// get totalStars
	// return object with that data
	return getRepos(player.login)
		.then(getTotalStars)
		.then((totalStars) => (
			{
				followers: player.followers,
				totalStars
			}
		))
}

function calculateScores(players) {
	// return an array after doing some fancy algorithms to determine a winner
	return [
		players[0].followers * 3 + players[0].totalStars,
		players[1].followers * 3 + players[1].totalStars
	]
}

export function getPlayersInfo(players){
	//fetch some data from Github
	return axios.all(players.map((username) => getUserInfo(username)))
		.then((info) => info.map((user) => user.data))
		.catch((err) => console.warn("Error in getPlayersInfo", err))
}

export function battle(players){
	const playerOneData = getPlayersData(players[0]);
	const playerTwoData = getPlayersData(players[1]);

	return axios.all([playerOneData, playerTwoData])
		.then(calculateScores)
		.catch((err) => console.warn("Error in battle function", err))
}