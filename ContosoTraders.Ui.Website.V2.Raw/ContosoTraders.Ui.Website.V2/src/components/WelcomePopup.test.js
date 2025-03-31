import { render, screen, fireEvent } from "@testing-library/react";
import WelcomePopup from "./WelcomePopup";

describe("WelcomePopup Component", () => {
  test("renders the WelcomePopup modal with correct content", () => {
    render(<WelcomePopup />);

    // Check if the modal is displayed
    const modalElement = screen.getByRole("dialog");
    expect(modalElement).toBeInTheDocument();

    // Check for the heading "WELCOME"
    const headingElement = screen.getByText(/WELCOME/i);
    expect(headingElement).toBeInTheDocument();

    // Check for the "Get Started" button
    const buttonElement = screen.getByRole("button", { name: /Get Started/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test("closes the modal when the 'Get Started' button is clicked", () => {
    render(<WelcomePopup />);

    // Click the "Get Started" button
    const buttonElement = screen.getByRole("button", { name: /Get Started/i });
    fireEvent.click(buttonElement);

    // Ensure the modal is no longer displayed
    const modalElement = screen.queryByRole("dialog");
    expect(modalElement).not.toBeInTheDocument();
  });

  test("does not render the modal if showModal is false", () => {
    render(<WelcomePopup initialShowModal={false} />); // Pass initialShowModal as false

    // Ensure the modal is not rendered
    const modalElement = screen.queryByRole("dialog");
    expect(modalElement).toBeNull();
  });
});

// This component displays information about the company.
function AboutUs() {
  return (
    <div className="container">
      <div className="about-us">
        <h1 className="text-center" aria-label="About Us Section">About Us</h1>
        ...
      </div>
    </div>
  );
}