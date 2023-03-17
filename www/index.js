import * as wasm from "wos";

// wasm.greet();
wasm.sum(99, 34);

const main = document.getElementById("main");

main.innerText = "hello world sum(99,+34)=" + wasm.sum(99, 34);