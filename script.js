document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById('game-container');

    fetch('games.json')
        .then(response => response.json())
        .then(games => {
            games.forEach(game => {
                // Create the card
                const card = document.createElement('div');
                card.className = 'game-card';

                // Add content
                card.innerHTML = `
                    <img src="${game.thumbnail}" alt="${game.title}">
                    <div class="card-content">
                        <h3>${game.title}</h3>
                        <p>${game.description}</p>
                        <a href="${game.folder}" class="play-btn">Play Now</a>
                    </div>
                `;

                // Add to page
                gameContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading games:', error));
});
