function greet(name) {
  return `Hello, ${name}!`;
}

document.getElementById("greeting").textContent = greet("Anosha Zahid");

module.exports = { greet };
