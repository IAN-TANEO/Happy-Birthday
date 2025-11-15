// --- Animation and Music Logic ---
document.addEventListener('DOMContentLoaded', () => {
    // Start all animations after a brief delay
    const initialTimeout = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(initialTimeout);
    }, 1000);

    const playAgainButton = document.querySelector('.play-again-button');
    const cakeSection = document.getElementById('cake-section');
    const music = document.getElementById('birthday-music');
    let musicPlaying = false;

    // "Back to Top" button
    if (playAgainButton) {
        playAgainButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Play music after the main animations have had time to start
    const musicTimeout = setTimeout(() => {
        if (music && !musicPlaying) {
            music.play().catch(e => console.error("Music play failed. User may need to interact with the page first.", e));
            musicPlaying = true;
        }
    }, 6000); // 6-second delay
});