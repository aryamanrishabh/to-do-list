import { shallow } from "enzyme";
import App from "../App";
import Navbar from "../Navbar";
import Home from "../Home";
it("shows a navbar", () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find(Navbar)).toBeTruthy();
});

it("contains a home component", () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find(Home).length).toEqual(1);
});
