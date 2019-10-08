window.addEventListener('DOMContentLoaded', () => {

  // const displayNumber = (n) => {
  //   document.getElementById('target').innerText = `The number is: ${n}`;
  // };

  // const onNumbersWasmLoaded = (wasm) => {
  //   wasm.instance.exports.displayNumberDouble(876);
  // };

  // const imports = {
  //   env: {
  //     displayNumber,
  //   },
  // };
  
  // WebAssembly
  //   .instantiateStreaming(fetch('numbers.wasm'), imports)
  //   .then(onNumbersWasmLoaded);

  const onStringsWasmLoaded = wasm => {
    console.log(wasm.instance.exports.sayHello());
  }

  WebAssembly
    .instantiateStreaming(fetch('strings.wasm'))
    .then(onStringsWasmLoaded);
});
