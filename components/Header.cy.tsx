import { mount } from "cypress/react";
import Header from "./Header.jsx";

describe("<Header>", () => {
  it("mounts", () => {
    mount(<Header />);
  });
});
