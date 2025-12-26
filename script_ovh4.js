// IDs retrieved
let key = document.getElementById("key");
let ipv4 = document.getElementById("ipv4");
let network = document.getElementById("network");
let repo = document.getElementById("repository");
let tag = document.getElementById("tag");
let container = document.getElementById("container");
let image = document.getElementById("image");

let button = document.getElementById("btn");
let result = document.getElementById("result");

button.addEventListener("click", () => {
  // Private key changed
  keyResponse1.textContent = key.value;

  // IPv4 changed
  ipv4Response1.textContent = ipv4.value;

  // Network port changed
  networkResponse1.textContent = `${network.value}:${network.value}`;
  networkResponse2.textContent = `${network.value}:${network.value}`;

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

  // CONTAINER ID value changed
  contResponse.textContent = container.value;

  // Previous image value changed
  imageResponse.textContent = image.value;
});
