// IDs retrieved
let newNetwork = document.getElementById("new");
let repo = document.getElementById("repository");
let tag = document.getElementById("tag");
let container = document.getElementById("container");
let image = document.getElementById("image");

let button = document.getElementById("btn");
let result = document.getElementById("result");

button.addEventListener("click", () => {
  // New network port changd
  newResponse1.textContent = `${newNetwork.value}:${newNetwork.value}`;

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
