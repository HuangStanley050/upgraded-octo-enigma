function multiDimensionalUnique(arr) {
  const uniques = [];
  const itemsFound = {};
  for (let i = 0, l = arr.length; i < l; i++) {
    let stringified = JSON.stringify(arr[i]);
    if (itemsFound[stringified]) {
      continue;
    }
    uniques.push(arr[i]);
    itemsFound[stringified] = true;
  }
  return uniques;
}

function generatePixelArray(width, height) {
  const arr = [];
  const resolution = width * height;
  for (let i = 0; i < resolution; i++) {
    if (!arr[i]) arr[i] = [];
    for (let j = 0; j < 4; j++) {
      arr[i][j - 1] = Math.floor(Math.random() * 255) + 0;
      arr[i][j] = 255;
    }
  }

  return arr;
}

function draw(array) {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const imageData = ctx.createImageData(256, 128);

  for (let i = 0; i < array.length; i++) {
    imageData.data[i + 0] = array[i + 0];
    imageData.data[i + 1] = array[i + 1];
    imageData.data[i + 2] = array[i + 2];
    imageData.data[i + 3] = 255;
  }

  ctx.putImageData(imageData, 0, 0);
  ctx.putImageData(imageData, 0, 0);
  ctx.font = "72px arial";
  ctx.fillStyle = "white";
  ctx.fillText("EGH", 55, 85);
}
let result = generatePixelArray(256, 128);
let unique = multiDimensionalUnique(result);
let flatResult = unique.flat();

draw(flatResult);
