function nextScreen(a, b) {
  document.getElementById("screen" + a).classList.add("hidden");
  document.getElementById("screen" + b).classList.remove("hidden");
}

// LOCK SYSTEM
function checkSecret() {
  const input = document.getElementById("secretInput").value;
  const msg = document.getElementById("lockMsg");

  const favoriteNumber = "17"; // CHANGE THIS

  if (input === favoriteNumber) {
    msg.innerText = "Unlocked 🤍";
    setTimeout(() => nextScreen(1, 2), 600);
  } else {
    msg.innerText = "Seriously?????";
     showRandomMeme();

  }
}

// FUNNY NO BUTTON
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const valMsg = document.getElementById("valMsg");

noBtn.addEventListener("touchstart", evade);
noBtn.addEventListener("mouseover", evade);

function evade() {
  const x = Math.random() * 120 - 60;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

yesBtn.addEventListener("click", () => {
  valMsg.innerText = "I knew you were mine ♾️";
  setTimeout(() => nextScreen(2, 3), 1000);
});

// PROMISE
function submitPromise() {
  const text = document.getElementById("promise").value;
  const msg = document.getElementById("promiseMsg");

  if (text.trim().length < 3) {
    msg.innerText = "Write something for me 🤍";
    return;
  }

  msg.innerHTML = `
    <strong>I promise. 💙</strong><br><br>
    <div class="promise-box">${text}</div>
    <p style="margin-top:10px;font-size:14px;">
      Save this and send it to me 🤍
    </p>
    <div class="actions">
      <button class="primary" onclick="downloadPromise()">Download</button>
      <button class="ghost" onclick="copyPromise()">Copy</button>
    </div>
    <br>
    <button class="primary" onclick="nextScreen(4,5)">Continue 🤍</button>
  `;
}


function downloadPromise() {
  const text = document.getElementById("promise").value;
  const blob = new Blob([text], { type: "text/plain" });
  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);
  link.download = "my_promise_to_you.txt";
  link.click();
}


function copyPromise() {
  const text = document.getElementById("promise").value;
  navigator.clipboard.writeText(text);
  alert("Copied 🤍 Now send it to me");
}


const audio = document.getElementById("finalAudio");

audio.addEventListener("ended", () => {
  showPage("page-goodbye");
});

