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

test("multiDimensionalUnique should return a two dimensional array with unique sub arrays", () => {});
