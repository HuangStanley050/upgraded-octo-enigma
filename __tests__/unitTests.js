import { multiDimensionalUnique, generatePixelArray } from "../src/script";

test("generatePixelArray function should return a two dimensional array which fits the requirement", () => {
  const pixelArray = generatePixelArray(2, 2);
  // array contains "red", "green", "blue" and "alpha"
  // red, green and blue are within 0..255 range
  // alpha is always 255
  pixelArray.forEach((pixel) => {
    expect(pixel[0]).toBeGreaterThanOrEqual(0);
    expect(pixel[0]).toBeLessThan(256);
    expect(pixel[1]).toBeGreaterThanOrEqual(0);
    expect(pixel[1]).toBeLessThan(256);
    expect(pixel[2]).toBeGreaterThanOrEqual(0);
    expect(pixel[2]).toBeLessThan(256);

    expect(pixel[3]).toBe(255);
  });
});

test("generatePixelArray function should return a set number of elements base on the width and height arguments passed", () => {
  const pixelArray = generatePixelArray(12, 12);
  const totalElements = 12 * 12;
  expect(pixelArray.length).toBe(totalElements);
});

test("multiDimensionalUnique function should return a two dimensional array with unique sub arrays", () => {
  const duplicateArray = [
    [1, 2],
    [0, 1, 3],
    [1, 2],
  ];
  const expectedResult = [
    [1, 2],
    [0, 1, 3],
  ];
  const result = multiDimensionalUnique(duplicateArray);
  expect(result).toStrictEqual(expectedResult);
});
