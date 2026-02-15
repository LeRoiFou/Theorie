// IDs retrieved
let direct = document.getElementById("directory");
let ipv4 = document.getElementById("ipv4");
let button = document.getElementById("btn");

button.addEventListener("click", () => {
  // DIRECTORY value changed
  directoryResponse1.textContent = direct.value;
  directoryResponse2.textContent = direct.value;
  directoryResponse3.textContent = direct.value;
  directoryResponse4.textContent = direct.value;
  directoryResponse5.textContent = direct.value;
  directoryResponse6.textContent = direct.value;
  directoryResponse7.textContent = direct.value;

  // IPv4 changed
  ipv4Response1.textContent = ipv4.value;
});
