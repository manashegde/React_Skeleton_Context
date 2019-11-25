import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Crossing from "containers/Crossing";

const props = {
  match: { url: "" }
};
describe("Crossing", () => {
  it("should match snapshot", () => {
    const tree = toJson(shallow(<Crossing {...props} />));
    expect(tree).toMatchSnapshot();
  });
});
