const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 21;
const HEAL_VALUE = 20;

const LOG_EVENT_MONSTER_ATTACK = "Monster Attack";
const LOG_EVENT_ATTACK = "Attack";
const LOG_EVENT_STRONG_ATTACK = "Strong Attack";
const LOG_EVENT_PLAYER_HEAL = "Player Heal";
const LOG_EVENT_BONUS_LIFE = "Bonus Life";
const LOG_EVENT_GAME_OVER = "Game Over";

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
let logEntries = [];

adjustHealthBars(chosenMaxLife);

const attackMonster = (mode) => {
	let maxDamage = mode === "strong-attack" ? STRONG_ATTACK_VALUE : ATTACK_VALUE;
	let event =
		mode === "strong-attack" ? LOG_EVENT_STRONG_ATTACK : LOG_EVENT_ATTACK;

	const damage = dealMonsterDamage(maxDamage);
	currentMonsterHealth -= damage;

	addLogEntry(event, currentPlayerHealth, currentMonsterHealth, damage);
	endRound();
};

const endRound = () => {
	let initialPlayerHealth = currentPlayerHealth;

	if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
		alert("You won!");
		reset();
	} else {
		const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
		currentPlayerHealth -= playerDamage;
		addLogEntry(
			LOG_EVENT_MONSTER_ATTACK,
			currentPlayerHealth,
			currentMonsterHealth,
			playerDamage
		);
	}

	if (currentPlayerHealth <= 0 && hasBonusLife) {
		hasBonusLife = false;
		removeBonusLife();
		currentPlayerHealth = initialPlayerHealth;
		setPlayerHealth(currentPlayerHealth);
		alert("You would be dead, but the bonus life saved you!");
		addLogEntry(
			LOG_EVENT_BONUS_LIFE,
			currentPlayerHealth,
			currentMonsterHealth
		);
		return;
	}

	if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
		alert("You lost!");
	} else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
		alert("It's a draw!");
	}

	if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) reset();
};

const healPlayer = () => {
	let healValue =
		currentPlayerHealth >= chosenMaxLife - HEAL_VALUE
			? chosenMaxLife - currentPlayerHealth
			: HEAL_VALUE;
	increasePlayerHealth(healValue);
	currentPlayerHealth += healValue;
	addLogEntry(
		LOG_EVENT_PLAYER_HEAL,
		currentPlayerHealth,
		currentMonsterHealth,
		undefined,
		healValue
	);
	endRound();
};

const reset = () => {
	addLogEntry(LOG_EVENT_GAME_OVER, currentPlayerHealth, currentMonsterHealth);
	currentMonsterHealth = chosenMaxLife;
	currentPlayerHealth = chosenMaxLife;
	hasBonusLife = true;
	resetGame(chosenMaxLife);
	resetBonusLife();
};

const addLogEntry = (
	event,
	playerHealth,
	monsterHealth,
	damage = "--",
	healed = "--"
) => {
	let logEntry = {
		event: event,
		playerHealth: playerHealth,
		monsterHealth: monsterHealth,
		damage: damage,
		healed: healed,
	};
	logEntries.push(logEntry);
};

const showLog = () => {
	console.log(logEntries);
};

attackBtn.addEventListener("click", () => attackMonster("attack"));
strongAttackBtn.addEventListener("click", () => attackMonster("strong-attack"));
healBtn.addEventListener("click", healPlayer);
logBtn.addEventListener("click", showLog);
