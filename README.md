# Monster Killer Game

A turn-based battle game built with vanilla JavaScript where you fight against a monster. This is a starting project for learning JavaScript fundamentals.

## 🎮 Game Overview

Monster Killer is an interactive browser-based game where players engage in combat with a monster. The game features health bars, attack mechanics, and various combat actions.

## ✨ Features

- **Health System**: Visual health bars for both player and monster
- **Attack Mechanics**: Deal damage to the monster
- **Monster Counterattack**: The monster fights back after each attack
- **Bonus Life**: Player starts with 1 bonus life
- **Game Over Detection**: Win/lose conditions based on health

## 🎯 Planned Features

The following features are available in the UI but not yet fully implemented:
- **Strong Attack**: Deal more damage at the cost of higher risk
- **Heal**: Restore player health during battle
- **Battle Log**: View the history of all actions taken during the game

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
2. **Attack**: Click the "ATTACK" button to deal damage to the monster
3. **Monitor Health**: Watch both health bars to track your progress
4. **Win Condition**: Reduce the monster's health to 0 to win
5. **Lose Condition**: If your health reaches 0, you lose

## 🔧 Game Mechanics

### Attack System
- **Player Attack**: Deals random damage up to `ATTACK_VALUE` (10)
- **Monster Attack**: Deals random damage up to `MONSTER_ATTACK_VALUE` (12)
- **Turn Order**: Player attacks first, then monster counterattacks

### Health System
- Both player and monster start with 100 health points
- Health is displayed using HTML5 progress bars
- Health decreases when damage is dealt

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
- setTimeout for delayed actions

## 🎨 Customization

You can customize the game by modifying these constants in `app.js`:
- `ATTACK_VALUE`: Maximum damage player can deal (default: 10)
- `MONSTER_ATTACK_VALUE`: Maximum damage monster can deal (default: 12)
- `chosenMaxLife`: Starting health for both player and monster (default: 100)

## 📝 Development Notes

This is a starting project, meaning some features are scaffolded but not yet implemented. The following buttons exist in the UI but need functionality:
- Strong Attack button
- Heal button
- Show Log button

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

