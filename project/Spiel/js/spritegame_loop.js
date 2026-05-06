function gameLoop() {
    if (KEY_EVENTS.a) {
        movePlayer((-1) * GAME_CONFIG.characterSpeed, 0, -1);
        animatePlayer();
        updateHUD();
    }
    if (KEY_EVENTS.d) {
        movePlayer(GAME_CONFIG.characterSpeed, 0, 1);
        animatePlayer();
        updateHUD();
    }
    if (KEY_EVENTS.w) {
        movePlayer(0, (-1) * GAME_CONFIG.characterSpeed, 0);
        animatePlayer();
        updateHUD();
    }
    if (KEY_EVENTS.s) {
        movePlayer(0, GAME_CONFIG.characterSpeed, 0);
        animatePlayer();
        updateHUD();
    }
    setTimeout(gameLoop, 1000 / GAME_CONFIG.gameSpeed);
}
