import { assert } from "chai";
import { updateMovement } from "../src/models/bodyModel";
const unWrapperbleBody = {
  //Required for all game objects
  id: "test1",
  position: { x: 0, y: 0 },
  fill: "blue",
  active: true,
  kill: false,
  wrapperble: false,
  point: 0,
  stepSize: 10,
  lives: 1,
};

describe("update movement test", () => {
  it("move left", () => {
    const expected = {
      ...unWrapperbleBody, position: { x: 0, y: 0 }
    };
    const actual = updateMovement(unWrapperbleBody, { x: -1, y: 0 });
    assert.deepEqual(actual, expected);
  });


  it("move right", () => {
    const expected = {
      ...unWrapperbleBody, position: { x: 10, y: 0 }
    };
    const actual = updateMovement(unWrapperbleBody, { x: 1, y: 0 });
    assert.deepEqual(actual, expected);
  }
  );

  it("move up", () => {
    const expected = {
      ...unWrapperbleBody, position: { x: 0, y: 0 }
    };
    const actual = updateMovement(unWrapperbleBody, { x: 0, y: -1 });
    assert.deepEqual(actual, expected);
  }
  );

  it("move down", () => {
    const expected = {
      ...unWrapperbleBody, position: { x: 0, y: 10 }
    };
    const actual = updateMovement(unWrapperbleBody, { x: 0, y: 1 });
    assert.deepEqual(actual, expected);
  })
});
