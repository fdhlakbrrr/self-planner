import { AppImage } from "../../src/components/ui";
import { render } from "@testing-library/react";

it("renders correctly", () => {
  const { container } = render(<AppImage name="money" />);

  expect(container).toMatchSnapshot();
});
