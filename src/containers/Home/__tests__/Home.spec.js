import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Home from "containers/Home";

describe("Home", () => {
  it("should match snapshot", () => {
    const tree = toJson(shallow(<Home />));
    expect(tree).toMatchSnapshot();
  });
});
