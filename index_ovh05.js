// IDs retrieved
let key = document.getElementById("key");
let ipv4 = document.getElementById("ipv4");
let container = document.getElementById("container");
let repo = document.getElementById("repository");
let tag = document.getElementById("tag");
let network = document.getElementById("network");
let networkVM = document.getElementById("networkVM");
let domain = document.getElementById("domain");
let button = document.getElementById("btn");

button.addEventListener("click", () => {
  // Key changed
  keyResponse1.textContent = key.value;
  keyResponse2.textContent = key.value;
  keyResponse3.textContent = key.value;

  // IPv4 changed
  ipv4Response1.textContent = ipv4.value;
  ipv4Response2.textContent = ipv4.value;
  ipv4Response3.textContent = ipv4.value;

  // Container changed
  containerResponse1.textContent = container.value;

  // REPOSITORY value changed
  repoResponse1.textContent = repo.value;
  repoResponse2.textContent = repo.value;
  repoResponse3.textContent = repo.value;
  repoResponse4.textContent = repo.value;
  repoResponse5.textContent = repo.value;
  repoResponse6.textContent = repo.value;
  repoResponse7.textContent = repo.value;

  // TAG value changed
  tagResponse1.textContent = tag.value;
  tagResponse2.textContent = tag.value;

  // Local network port changed
  networkResponse1.textContent = network.value;

  // VM network port changed
  networkVMResponse1.textContent = networkVM.value;

  // Domain changed
  domainResponse1.textContent = domain.value;
  domainResponse2.textContent = domain.value;
  domainResponse3.textContent = domain.value;
  domainResponse4.textContent = domain.value;
  domainResponse5.textContent = domain.value;
  domainResponse6.textContent = domain.value;
  domainResponse7.textContent = domain.value;
  domainResponse8.textContent = domain.value;
  domainResponse9.textContent = domain.value;
  domainResponse10.textContent = domain.value;
});
