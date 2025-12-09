const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 12;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

const attackHandler = () => {
	const damage = dealMonsterDamage(ATTACK_VALUE);
	currentMonsterHealth -= damage;

	if (currentMonsterHealth <= 0) {
		setTimeout(() => {
			alert("You won!");
		}, 500);
	} else {
		setTimeout(() => {
			const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
			currentPlayerHealth -= playerDamage;
		}, 500);
	}

	if (currentPlayerHealth <= 0) {
		alert("You lost!");
	}
};

attackBtn.addEventListener("click", attackHandler);
