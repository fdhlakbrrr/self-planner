import { Text } from "../../src/components/ui";
import { render } from "@testing-library/react";

it("Should be render normally", () => {
  const container = render(<Text variant="BODY">test</Text>);

  expect(container).toMatchSnapshot();
});
it("Should be render normally", () => {
  const container = render(<Text variant="TITLE">test</Text>);

  expect(container).toMatchSnapshot();
});
it("Should be render normally", () => {
  const container = render(<Text variant="SUBTITLE">test</Text>);

  expect(container).toMatchSnapshot();
});
it("Should be render normally", () => {
  const container = render(<Text variant="BRAND">test</Text>);

  expect(container).toMatchSnapshot();
});
