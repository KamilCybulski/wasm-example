
const appendText = (stringPointer, stringSize) => {
  const target = document.getElementById('target');
  const newItem = document.createElement('li');
  const text = UTF8ToString(stringPointer, stringSize);
  newItem.innerText = text;
  target.appendChild(newItem);
}

Module.onRuntimeInitialized = () => {
  ccall('addItemsToList');
}