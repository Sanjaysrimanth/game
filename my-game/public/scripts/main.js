// main.js
document.addEventListener('DOMContentLoaded', () => {
    const characterForm = document.getElementById('character-form');
    const statusPanel = document.getElementById('status-panel');
    const gameWorld = document.getElementById('game-world');

    let playerCharacter;

    characterForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(characterForm);
        const name = formData.get('name');
        const gender = formData.get('gender');
        const classType = formData.get('class');

        playerCharacter = new Character(name, gender, classType);
        updateStatusPanel();
        startGame();
    });

    function updateStatusPanel() {
        if (playerCharacter) {
            statusPanel.innerHTML = `
                <h2>Status Panel</h2>
                <p>Name: ${playerCharacter.name}</p>
                <p>Gender: ${playerCharacter.gender}</p>
                <p>Class: ${playerCharacter.classType}</p>
                <p>Stats: ${JSON.stringify(playerCharacter.stats)}</p>
                <p>Skills: ${playerCharacter.skills.join(', ')}</p>
            `;
        }
    }

    function startGame() {
        gameWorld.innerHTML = '<h2>Welcome to the Game World!</h2>';
        // Initialize game world, spawn monsters, etc.
        Game.init();
    }
});