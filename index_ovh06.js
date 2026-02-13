// IDs retrieved
let repo = document.getElementById("repository");
let tag = document.getElementById("tag");
let containerID = document.getElementById("containerID");
let containerName = document.getElementById("containerName");
let network = document.getElementById("network");
let networkVM = document.getElementById("networkVM");
let key = document.getElementById("key");
let ipv4 = document.getElementById("ipv4");
let images = document.getElementById("images");
let prevContainerID = document.getElementById("prevContainerID");
let prevContainerName = document.getElementById("prevContainerName");
let prevRepo = document.getElementById("prevRepository");
let prevTag = document.getElementById("prevTag");

let button = document.getElementById("btn");

button.addEventListener("click", () => {
  // REPOSITORY value changed
  repoResp1.textContent = repo.value;
  repoResp2.textContent = repo.value;
  repoResp3.textContent = repo.value;
  repoResp4.textContent = repo.value;
  repoResp5.textContent = repo.value;
  repoResp6.textContent = repo.value;

  // TAG value changed
  tagResp1.textContent = tag.value;
  tagResp2.textContent = tag.value;

  // CONTAINER ID changed
  containerIDResp1.textContent = containerID.value;

  // CONTAINER NAME changed
  containerNameResp1.textContent = containerName.value;
  containerNameResp2.textContent = containerName.value;
  containerNameResp3.textContent = containerName.value;
  containerNameResp4.textContent = containerName.value;
  containerNameResp5.textContent = containerName.value;

  // NETWORK LOCAL changed
  networkResp1.textContent = network.value;

  // NETWORK VM changed
  networkVMResp1.textContent = networkVM.value;
  networkVMResp2.textContent = networkVM.value;

  // KEY changed
  keyResp1.textContent = key.value;
  keyResp2.textContent = key.value;

  // IPv4 changed
  ipv4Resp1.textContent = ipv4.value;
  ipv4Resp2.textContent = ipv4.value;

  // IMAGE changed
  imagesResp1.textContent = images.value;
  imagesResp2.textContent = images.value;

  // PREVIOUS CONTAINER ID changed
  prevContainerIDResp1.textContent = prevContainerID.value;
  prevContainerIDResp2.textContent = prevContainerID.value;

  // PREVIOUS CONTAINER NAME changed
  prevContainerNameResp1.textContent = prevContainerName.value;

  // PREVIOUS REPOSITORY value changed
  prevRepoResp1.textContent = prevRepo.value;

  // PREVIOUS TAG value changed
  prevTagResp1.textContent = prevTag.value;
});
