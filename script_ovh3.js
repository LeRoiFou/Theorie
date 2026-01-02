// IDs retrieved
let key = document.getElementById("key");
let ipv4 = document.getElementById("ipv4");
let repo = document.getElementById("repository");
let tag = document.getElementById("tag");
let network = document.getElementById("network");

let button = document.getElementById("btn");
let result = document.getElementById("result");

button.addEventListener("click", () => {
  // Private key changed
  keyResponse1.textContent = key.value;
  keyResponse2.textContent = key.value;
  keyResponse3.textContent = key.value;
  keyResponse4.textContent = key.value;

  // IPv4 changed
  ipv4Response1.textContent = ipv4.value;
  ipv4Response2.textContent = ipv4.value;
  ipv4Response3.textContent = ipv4.value;
  ipv4Response4.textContent = ipv4.value;

  // Repository value changed
  repoResponse1.textContent = repo.value;
  repoResponse2.textContent = repo.value;
  repoResponse3.textContent = repo.value;
  repoResponse4.textContent = repo.value;
  repoResponse5.textContent = repo.value;
  repoResponse6.textContent = repo.value;
  repoResponse7.textContent = repo.value;
  repoResponse8.textContent = repo.value;
  repoResponse9.textContent = repo.value;
  repoResponse10.textContent = repo.value;
  repoResponse11.textContent = repo.value;

  // TAG value changed
  tagResponse1.textContent = tag.value;
  tagResponse2.textContent = tag.value;
  tagResponse3.textContent = tag.value;

  // Network port changed
  networkResponse1.textContent = `${network.value}:${network.value}`;
  networkResponse2.textContent = `${network.value}:${network.value}`;
  networkResponse3.textContent = `${network.value}:${network.value}`;
});
