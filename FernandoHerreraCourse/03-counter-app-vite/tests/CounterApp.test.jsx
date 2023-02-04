import { render, screen, fireEvent} from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Tests for <CounterApp />", () => {
  const initialValue = 10;

  test("should match with snapshot", () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test("should show the initial value of 100", () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText(100)).toBeTruthy();
  });

  test("should increase with the button +!", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText('11')).toBeTruthy();
  });
});
