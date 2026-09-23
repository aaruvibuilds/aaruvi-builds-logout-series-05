const windowEl = document.querySelector("#window");
const logout = document.querySelector("#logout");
const again = document.querySelector("#again");
const securityState = document.querySelector(".security-state");

let state = "active";
let lockTimer = null;
let wakeTimer = null;

const setState = (next) => {
  state = next;
  windowEl.dataset.state = next;
  windowEl.classList.toggle("sequence", next === "leaving");
  windowEl.classList.toggle("off", next === "signed-out");

  logout.disabled = next !== "active";
  again.disabled = next !== "signed-out";

  if (securityState) {
    securityState.innerHTML =
      next === "signed-out"
        ? "<i></i> SESSION LOCKED"
        : "<i></i> SECURE SESSION";
  }
};

logout.addEventListener("click", () => {
  if (state !== "active") return;

  clearTimeout(lockTimer);
  clearTimeout(wakeTimer);
  setState("leaving");

  lockTimer = setTimeout(() => {
    if (state === "leaving") setState("signed-out");
  }, 1950);
});

again.addEventListener("click", () => {
  if (state !== "signed-out") return;

  clearTimeout(lockTimer);
  clearTimeout(wakeTimer);

  windowEl.classList.remove("off");
  state = "waking";
  windowEl.dataset.state = "waking";
  again.disabled = true;

  wakeTimer = setTimeout(() => {
    setState("active");
  }, 620);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state === "signed-out") {
    again.click();
  }
});
