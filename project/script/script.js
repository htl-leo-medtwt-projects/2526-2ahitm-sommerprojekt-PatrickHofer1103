let Music = new Audio('../audio/Lied1.mp3');
function playMusic() {
    Music.play();
    Music.volume = 0.5;
    Music.loop = true;
}

window.onload = function() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
    playMusic();
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

function GenerateRules(){
  document.getElementById("Rules").innerHTML =`
    <div id="RulesButtons">
          <a class="RulesButton" href="../index.html">Back</a>
      </div>

      <div id="RulesBox">
          <div id="RulesHeading">
              <h1>Rules</h1>
          </div>
          <div id="RulesContent">
              <div id="RulesText">
                  <h2>How to play</h2>
                  <p>Use W, A, S, D to move your character. Press the Spacebar to interact with objects.</p>
                  <h2>Quests</h2>
                  <p>Run to the door to enter the arena.</p>
                  <p>Walk through the arena and find the artefact to win the game.</p>
              </div>
              <div id="RulesImage">
                  <img src="../img/animation/Alchemist_0.webp" alt="">
              </div>
          </div>

      </div>
    `;
}
