import { Container } from "../../src/components/ui";
import { render } from "@testing-library/react";

it("should be render normally", () => {
  const container = render(<Container>Test container</Container>);

  expect(container).toMatchSnapshot();
});
