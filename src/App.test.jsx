import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

describe("<App />", () => {
  test("renders", async () => {
    render(<App />);

    expect(await screen.findByText(/text/i)).toBeInTheDocument();
  });
});
