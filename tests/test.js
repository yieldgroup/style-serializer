import { cssStringToObject, cssObjectToString } from "../src/index";
import { exportAllDeclaration } from "@babel/types";

describe("Converting css strings into objects", () => {
  test("handles single properties", () => {
    const inputCss = "border: 1px solid red";
    expect(cssStringToObject(inputCss)).toEqual({
      border: "1px solid red"
    });
  });

  test("handles hyphenated properties", () => {
    const inputCss = "border-top: 1px solid red; width: 100px;";
    expect(cssStringToObject(inputCss)).toEqual({
      borderTop: "1px solid red",
      width: "100px"
    });
  });

  test("uses camel case for hyphenated properties, by default", () => {
    const inputCss = "border-top: 1px solid red; width: 100px;";
    expect(cssStringToObject(inputCss)).toEqual({
      borderTop: "1px solid red",
      width: "100px"
    });
  });

  test("uses hyphenated strings for hyphenated properties if explicitly configured to do so", () => {
    const inputCss = "border-top: 1px solid red; width: 100px;";
    expect(cssStringToObject(inputCss, { useCamelCase: false })).toEqual({
      "border-top": "1px solid red",
      width: "100px"
    });
  });

  test("handles extraneous whitespace", () => {
    const inputCss = " border-top:   1px solid red      ;width:100px;";
    expect(cssStringToObject(inputCss)).toEqual({
      borderTop: "1px solid red",
      width: "100px"
    });
  });

  test("handles missing final semi-colon", () => {
    const inputCss = "border-top: 1px solid red; width: 100px";
    expect(cssStringToObject(inputCss)).toEqual({
      borderTop: "1px solid red",
      width: "100px"
    });
  });

  test("handles colons in property values", () => {
    const inputCss =
      "background-image: url('http://cool.cool/cool.jpg'); border: 1px";
    expect(cssStringToObject(inputCss)).toEqual({
      backgroundImage: "url('http://cool.cool/cool.jpg')",
      border: "1px"
    });
  });
});

describe("Converting css objects into strings", () => {
  test("Handles single properties", () => {
    const inputObject = {
      border: "1px solid red"
    };
    expect(cssObjectToString(inputObject)).toEqual("border: 1px solid red;");
  });

  test("Handles multiple properties", () => {
    const inputObject = {
      border: "1px solid red",
      width: "100px"
    };
    expect(cssObjectToString(inputObject)).toEqual(
      "border: 1px solid red; width: 100px;"
    );
  });

  test("Hyphenates camel case properties", () => {
    const inputObject = {
      borderTop: "1px solid red"
    };
    expect(cssObjectToString(inputObject)).toEqual(
      "border-top: 1px solid red;"
    );
  });
});
