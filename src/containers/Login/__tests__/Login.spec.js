import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { Login } from "containers/Login";
import { urls } from "HOC/withApiService";

const props = {
  apiService: {
    post: jest.fn(() =>
      Promise.resolve({
        jwtToken: "abs",
        firstName: "first",
        lastName: "last",
        roles: ["admin"]
      })
    ),
    urls
  },
  sessionContext: {
    setAuth: jest.fn(),
    addNotification: jest.fn()
  }
};

const setup = () => {
  const wrapper = mount(<Login {...props} />);
  const instance = wrapper.instance();
  return {
    wrapper,
    instance
  };
};

describe("Login", () => {
  it("should match snapshot", () => {
    const tree = toJson(mount(<Login />));
    expect(tree).toMatchSnapshot();
  });

  it("should call apiService POST to login with username and password successfully", async () => {
    const { wrapper, instance } = setup();

    const usernameField = wrapper.find('[data-test="login-username-field"]');
    const passwordField = wrapper.find('[data-test="login-password-field"]');

    usernameField.simulate("change", { target: { value: "user" } });
    passwordField.simulate("change", { target: { value: "pass" } });

    await instance.login();
    expect(props.apiService.post).toHaveBeenCalled();
    expect(props.apiService.post).toHaveBeenCalledWith({
      url: props.apiService.urls.login,
      data: {
        username: "user",
        password: "pass"
      }
    });
    expect(props.sessionContext.setAuth).toHaveBeenCalled();
    expect(props.sessionContext.addNotification).not.toHaveBeenCalled();
  });

  it("should show a notification if there was an error signing in", async () => {
    props.apiService.post = jest.fn(() => Promise.reject("failed to login"));
    const { wrapper, instance } = setup();
    await instance.login();
    expect(props.sessionContext.addNotification).toHaveBeenCalled();
  });
});
