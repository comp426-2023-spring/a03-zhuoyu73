if (process.argv.length == 1){
	export function rps(){
		const choices = ['rock', 'scissors', 'paper'];
		const random_index = Math.floor(Math.random()*choices.length);
		const random_choice = choices[random_index];
		console.log(`
			player: '${random_choice}'
		`)
	}
} else {
	export function rps(user_choice){
		if (user_choice == '-r' || user_choice == '--rules'){
			console.log(`
				Rules for Rock Paper Scissors:
				 - Scissors CUTS Paper
				 - Paper COVERS Rock
				 - Rock CRUSHES Scissors
				 `)
			process.exit(0);
		} else if (user_choice == '-h' || user_choice == '--help'){
			console.log(`
				Usage: node-rps [SHOT]
				Play Rock Paper Scissors (RPS)
					-h, --help      display this help message and exit
					-r, --rules     display the rules and exit
				Examples:
					node-rps        Return JSON with single player RPS result.
					e.g. {"player":"rock"}
					node-rps rock   Return JSON with results for RPS played against a simulated opponent.
					e.g {"player":"rock","opponent":"scissors","result":"win"}
					`)
			process.exit(0);
		} else if (user_choice == 'rock' || user_choice =='scissors' || user_choice == 'paper'){
			const choices = ['rock', 'scissors', 'paper'];
			const random_index = Math.floor(Math.random()*choices.length);
			const random_choice = choices[random_index];
			if (user_choice == random_choice){
				console.log(`
					player: '${user_choice}', 
					opponent: '${random_choice}',
					result: 'draw'
					`)
			} else if {
				(user_choice == 'rock' && random_choice == 'scissors') ||
				(user_choice == 'paper' && random_choice == 'rock') ||
				(user_choice == 'scissors' && random_choice == 'paper')
				console.log(`
					player: '${user_choice}', 
					opponent: '${random_choice}',
					result: 'win'
					`)
			} else {
				console.log(`
					player: '${user_choice}', 
					opponent: '${random_choice}',
					result: 'lose'
					`)
			}
		} else {
			console.error(`${user_choice} is out of range`);
		}
		

	}
}

export function rpsls(){

}

