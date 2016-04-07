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

async function getPlayersData(player) {
	// get repos
	// get totalStars
	// return object with that data
	try {const repos = await getRepos(player.login)
		const totalStars = await getTotalStars(repos)
		return { followers: player.followers, totalStars}
	} catch(error){
		console.warn("Error in getPlayersData", error)
	}
}

function calculateScores(players) {
	// return an array after doing some fancy algorithms to determine a winner
	return [
		players[0].followers * 3 + players[0].totalStars,
		players[1].followers * 3 + players[1].totalStars
	]
}

export async function getPlayersInfo(players){
	//fetch some data from Github
	try {
		const info = await Promise.all(players.map((username) => getUserInfo(username)))
		return info.map((user) => user.data)
	}	catch(error) {
		console.warn("Error in getPlayersInfo", error)
	}
}

export async function battle(players){
	const playerOneData = getPlayersData(players[0]);
	const playerTwoData = getPlayersData(players[1]);
	try {	
		const data = await Promise.all([playerOneData, playerTwoData])
		return calculateScores(data)
	} catch(error){
		console.warn("Error in battle function", err)
	}
}