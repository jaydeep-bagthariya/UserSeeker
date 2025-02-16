import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/header";

describe("Header Component", () => {
  test("renders Home and History links", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/History/i)).toBeInTheDocument();
  });

  test("Home link should be active by default", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Header />
      </MemoryRouter>
    );

    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toHaveClass("text-blue-600 font-semibold");
  });

  test("History link should be active when navigating", () => {
    render(
      <MemoryRouter initialEntries={["/history"]}>
        <Header />
      </MemoryRouter>
    );

    const historyLink = screen.getByText(/History/i);
    expect(historyLink).toHaveClass("text-blue-600 font-semibold");
  });

  test("Home link should not be active when navigating to History", () => {
    render(
      <MemoryRouter initialEntries={["/history"]}>
        <Header />
      </MemoryRouter>
    );

    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).not.toHaveClass("text-blue-600 font-semibold");
  });

  test("History link should not be active by default", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Header />
      </MemoryRouter>
    );

    const historyLink = screen.getByText(/History/i);
    expect(historyLink).not.toHaveClass("text-blue-600 font-semibold");
  });
});
