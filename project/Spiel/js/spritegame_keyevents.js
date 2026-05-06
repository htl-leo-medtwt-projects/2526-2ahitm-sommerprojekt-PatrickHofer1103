let KEY_EVENTS = {
    a: false,
    d: false,
    w: false,
    s: false
}
document.onkeydown = keyListenerDown;
document.onkeyup = keyListenerUp;

function keyListenerDown(e) {
    if (e.key === "a") {
        KEY_EVENTS.a = true;
    }
    if (e.key === "w") {
        KEY_EVENTS.w = true;
    }
    if (e.key === "d") {
        KEY_EVENTS.d = true;
    }
    if (e.key === "s") {
        KEY_EVENTS.s = true;
    }
}
function keyListenerUp(e) {
    if (e.key === "a") {
        KEY_EVENTS.a = false;
    }
    if (e.key === "w") {
        KEY_EVENTS.w = false;
    }
    if (e.key === "d") {
        KEY_EVENTS.d = false;
    }
    if (e.key === "s") {
        KEY_EVENTS.s = false;
    }
}

