# Monster Killer Game

A turn-based battle game built with vanilla JavaScript where you fight against a monster. This is a starting project for learning JavaScript fundamentals.

## 🎮 Game Overview

Monster Killer is an interactive browser-based game where players engage in combat with a monster. The game features health bars, attack mechanics, and various combat actions.

## ✨ Features

- **Health System**: Visual health bars for both player and monster
- **Attack Mechanics**: Deal damage to the monster with regular attacks
- **Strong Attack**: Deal more damage (up to 17) at the cost of higher monster counterattack
- **Heal**: Restore player health during battle (up to 20 HP)
- **Monster Counterattack**: The monster fights back after each player action
- **Bonus Life System**: Player starts with 1 bonus life that activates automatically when health reaches 0
- **Game Over Detection**: Win/lose/draw conditions based on health

## ✨ Battle Log System

- **Event Tracking**: The logging system tracks all game events (attacks, heals, bonus life, game over) and stores them in an array
- **Show Log Button**: Click the "SHOW LOG" button to view all battle events in the browser console
- **Log Entries**: Each log entry contains event type, player health, monster health, damage dealt, and healing amount

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, but recommended)

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser

### Running Locally

You can run the project in several ways:

**Option 1: Direct File Opening**
- Simply double-click `index.html` or open it directly in your browser

**Option 2: Using a Local Server (Recommended)**
- Using Python:
  ```bash
  python -m http.server 8000
  ```
- Using Node.js (http-server):
  ```bash
  npx http-server
  ```
- Using VS Code Live Server extension
- Then navigate to `http://localhost:8000` (or the port shown)

## 📁 Project Structure

```
control-03-monster-killer-starting-project/
│
├── index.html              # Main HTML file
├── assets/
│   ├── scripts/
│   │   ├── app.js          # Main game logic
│   │   └── vendor.js       # DOM manipulation utilities
│   └── styles/
│       └── app.css         # Game styling
└── README.md               # This file
```

## 🎮 How to Play

1. **Start the Game**: Open `index.html` in your browser
2. **Attack**: Click the "ATTACK" button to deal regular damage (up to 10) to the monster
3. **Strong Attack**: Click the "STRONG ATTACK" button to deal more damage (up to 17), but the monster will counterattack harder
4. **Heal**: Click the "HEAL" button to restore your health (up to 20 HP), but the monster will still attack you
5. **Monitor Health**: Watch both health bars to track your progress
6. **Bonus Life**: If your health reaches 0, your bonus life will automatically activate and restore you
7. **View Battle Log**: Click "SHOW LOG" to see all battle events in the browser console
8. **Win Condition**: Reduce the monster's health to 0 while keeping yours above 0
9. **Lose Condition**: If your health reaches 0 (after bonus life is used), you lose
10. **Draw Condition**: If both player and monster reach 0 health simultaneously, it's a draw

## 🔧 Game Mechanics

### Attack System
- **Regular Attack**: Deals random damage up to `ATTACK_VALUE` (10)
- **Strong Attack**: Deals random damage up to `STRONG_ATTACK_VALUE` (17)
- **Monster Attack**: Deals random damage up to `MONSTER_ATTACK_VALUE` (21)
- **Turn Order**: Player performs an action (attack/heal), then monster counterattacks

### Health System
- Both player and monster start with 100 health points
- Health is displayed using HTML5 progress bars
- Health decreases when damage is dealt
- Health increases when player uses heal ability

### Heal System
- **Heal Value**: Restores up to `HEAL_VALUE` (20) health points
- **Smart Healing**: Cannot heal beyond maximum health (100)
- **Monster Response**: Monster still attacks after healing

### Bonus Life System
- Player starts with 1 bonus life
- Automatically activates when player health reaches 0
- Restores player to their health before the fatal blow
- Can only be used once per game
- Visual indicator removed from UI after use

## 💻 Technical Details

### Technologies Used
- **HTML5**: Structure and semantic elements
- **CSS3**: Styling and visual effects
- **Vanilla JavaScript**: Game logic and DOM manipulation

### Key JavaScript Concepts Demonstrated
- DOM manipulation
- Event listeners
- Functions and arrow functions
- Variables and constants
- Conditional statements
- Function parameters and mode handling
- State management (health tracking, bonus life flag)

## 🎨 Customization

You can customize the game by modifying these constants in `app.js`:
- `ATTACK_VALUE`: Maximum damage for regular attack (default: 10)
- `STRONG_ATTACK_VALUE`: Maximum damage for strong attack (default: 17)
- `MONSTER_ATTACK_VALUE`: Maximum damage monster can deal (default: 21)
- `HEAL_VALUE`: Maximum health restored by heal ability (default: 20)
- `chosenMaxLife`: Starting health for both player and monster (default: 100)

## 📝 Development Notes

All core features are implemented! The game includes:
- Complete battle mechanics (attack, strong attack, heal)
- Health system with visual indicators
- Bonus life system
- Battle log tracking (viewable via console)
- Game over detection (win/lose/draw)

The battle log is fully functional and can be viewed by clicking the "SHOW LOG" button, which displays all events in the browser console.

## 🤝 Contributing

This appears to be a learning project. Feel free to:
- Implement the missing features
- Add new game mechanics
- Improve the UI/UX
- Add sound effects or animations

## 📄 License

This project is part of a JavaScript course and is intended for educational purposes.

## 🎓 Learning Objectives

This project helps practice:
- JavaScript fundamentals
- DOM manipulation
- Event handling
- Game logic implementation
- State management

---

**Enjoy battling monsters! 🐉⚔️**

