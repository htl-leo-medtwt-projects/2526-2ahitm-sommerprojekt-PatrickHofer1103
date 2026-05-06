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

function settings() {
  document.getElementById("settings").style.display = "flex";
  document.getElementById("settings").innerHTML =`
    <div id="SettingsContent">
      <div id="CloseSettings" onclick="settingsSchließen()">x</div>
      <div id="SettingsHeader">
        <h2>Settings</h2>
      </div>
      <div id="SettingsBody">
        <div class="SettingsGroup">
          <p>Audio Settings</p>
        </div>
        <button class="SettingsButton">Stumm</button>
        <button class="SettingsButton">Laut</button>
        <a class="SettingsButton" href="../index.html">Back</a>
      </div>
    </div>
  `;
  gsap.fromTo("#settings", {
    opacity: 0,
    scale: 0.5
  }, {
    opacity: 1,
    scale: 1,
    duration: 0.5
  });
}

function settingsSchließen() {
  document.getElementById("settings").innerHTML =``;
  document.getElementById("settings").style.display = "none";
}

