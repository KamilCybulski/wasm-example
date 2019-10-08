window.addEventListener('DOMContentLoaded', () => {

  let wasmMemory

  const getStringFromC = (offset, length) => {
    const strBuffer = new Uint8Array(wasmMemory.buffer, offset, length);
    const text = new TextDecoder().decode(strBuffer);
    console.log(text);
  }

  const imports = {
    env: {
      getStringFromC,
    }
  }

  const onStringsWasmLoaded = wasm => {
    wasmMemory = wasm.instance.exports.memory;
    wasm.instance.exports.sayHello();
  }

  WebAssembly
    .instantiateStreaming(fetch('strings.wasm'), imports)
    .then(onStringsWasmLoaded);
});
