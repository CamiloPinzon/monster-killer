const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 21;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

const attackMonster = (mode) => {
	let maxDamage = mode === "strong-attack" ? STRONG_ATTACK_VALUE : ATTACK_VALUE;

	const damage = dealMonsterDamage(maxDamage);
	currentMonsterHealth -= damage;

	endRound();
};

const endRound = () => {
	let initialPlayerHealth = currentPlayerHealth;

	if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
		alert("You won!");
	} else {
		const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
		currentPlayerHealth -= playerDamage;
	}

	if (currentPlayerHealth <= 0 && hasBonusLife) {
		hasBonusLife = false;
		removeBonusLife();
		currentPlayerHealth = initialPlayerHealth;
		setPlayerHealth(currentPlayerHealth);
		alert("You would be dead, but the bonus life saved you!");
		return;
	}

	if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
		alert("You lost!");
	} else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
		alert("It's a draw!");
	}
};

const healPlayer = () => {
	let healValue =
		currentPlayerHealth >= chosenMaxLife - HEAL_VALUE
			? chosenMaxLife - currentPlayerHealth
			: HEAL_VALUE;
	increasePlayerHealth(healValue);
	currentPlayerHealth += healValue;
	endRound();
};

attackBtn.addEventListener("click", () => attackMonster("attack"));
strongAttackBtn.addEventListener("click", () => attackMonster("strong-attack"));
healBtn.addEventListener("click", healPlayer);
