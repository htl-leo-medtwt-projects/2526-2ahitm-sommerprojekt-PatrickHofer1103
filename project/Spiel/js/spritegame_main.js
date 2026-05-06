let GAME_SCREEN = {
    surface: document.getElementById('surface'),
    surfaceScale: '80%',
    redbox: document.getElementById('redBox'),
    startButton: document.getElementById('startButton'),
    debug_output: document.getElementById('debug_output')
}

let GAME_CONFIG = {
    gameSpeed: 24,
    characterSpeed: 5
}

function startGame() {
    PLAYER.box.style.left = '350px';
    PLAYER.box.style.top = '180px';
    PLAYER.box.style.opacity = '1';
    PLAYER.spriteImg.style.right = '0px';
    gameLoop();
}
startGame();

function updateHUD(){
    GAME_SCREEN.debug_output.innerHTML = `x: ${PLAYER.box.style.left} | y: ${PLAYER.box.style.top} | animation: ${PLAYER.spriteImgNumber} | count: ${PLAYER.coinCount}`;
}

