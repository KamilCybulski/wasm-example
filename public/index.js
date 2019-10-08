const onNumbersWasmLoaded = (wasm) => {
  console.log('Double of 876 is: ', wasm.instance.exports.getDouble(876));
}

WebAssembly
  .instantiateStreaming(fetch('numbers.wasm'))
  .then(onNumbersWasmLoaded);
