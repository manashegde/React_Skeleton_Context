import React from "react";
import PropTypes from "prop-types";
import { shallow, mount } from "enzyme";
import createRouterContext from "react-router-test-context";
import toJson from "enzyme-to-json";
import { Search } from "containers/Crossing/Search";
import { urls } from "HOC/withApiService";
import { resolve } from "path";

Search.contextTypes = {
  router: PropTypes.object
};

const props = {
  location: {
    state: { crossingType: "entry" }
  },
  history: { push: jest.fn() },
  apiService: {
    urls,
    post: jest.fn()
  },
  sessionContext: {
    addNotification: jest.fn()
  },
  crossingContext: {
    _setState: jest.fn()
  }
};

const setup = () => {
  const context = createRouterContext();
  const wrapper = mount(<Search {...props} />, { context });
  const instance = wrapper.instance();
  return { wrapper, instance };
};

afterEach(() => {
  props.apiService.post = jest.fn();
});

describe("Home", () => {
  it("should match snapshot", () => {
    const { wrapper } = setup();
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it("should call api to search for citizen and go to the next page", async () => {
    props.apiService.post = jest
      .fn()
      .mockReturnValueOnce(Promise.resolve(true))
      .mockReturnValueOnce(Promise.resolve(true));
    const { wrapper, instance } = setup();

    await instance.doSearchCitizen();
    await wrapper.update();
    expect(props.apiService.post).toHaveBeenCalled();
    expect(props.apiService.post.mock.calls.length).toBe(2); //first to search citizen. second to get flight info
    expect(props.history.push).toHaveBeenCalled();
    expect(props.crossingContext._setState).toHaveBeenCalled();
    expect(props.sessionContext.addNotification).not.toHaveBeenCalled();
  });
  it("should show notification on search api failure", async () => {
    props.apiService.post = jest
      .fn()
      .mockReturnValueOnce(Promise.reject(true))
      .mockReturnValueOnce(Promise.resolve(true));
    const { wrapper, instance } = setup();

    await instance.doSearchCitizen();
    wrapper.update();
    expect(props.sessionContext.addNotification).toHaveBeenCalled();
  });
});
