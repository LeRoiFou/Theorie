// IDs retrieved
let key = document.getElementById("key");
let ipv4 = document.getElementById("ipv4");
let domain = document.getElementById("domain");
let directory = document.getElementById("directory");
let htmlFile = document.getElementById("htmlFile");
let cssFile = document.getElementById("cssFile");

let button = document.getElementById("btn");

button.addEventListener("click", () => {
  // Private key changed
  keyResponse1.textContent = key.value;
  keyResponse2.textContent = key.value;
  keyResponse3.textContent = key.value;

  // IPv4 changed
  ipv4Response1.textContent = ipv4.value;
  ipv4Response2.textContent = ipv4.value;
  ipv4Response3.textContent = ipv4.value;
  ipv4Response4.textContent = ipv4.value;
  ipv4Response5.textContent = ipv4.value;
  ipv4Response6.textContent = ipv4.value;
  ipv4Response7.textContent = ipv4.value;

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
  domainResponse11.textContent = domain.value;
  domainResponse12.textContent = domain.value;

  // Directory changed
  directoryResponse1.textContent = directory.value;
  directoryResponse2.textContent = directory.value;

  // HTML file changed
  htmlFileResponse1.textContent = htmlFile.value;
  htmlFileResponse2.textContent = htmlFile.value;
  htmlFileResponse3.textContent = htmlFile.value;
  htmlFileResponse4.textContent = htmlFile.value;

  // CSS file changed
  cssFileResponse1.textContent = cssFile.value;
  cssFileResponse2.textContent = cssFile.value;
  cssFileResponse3.textContent = cssFile.value;
  cssFileResponse4.textContent = cssFile.value;
});
