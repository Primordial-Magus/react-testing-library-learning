import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("checked flow", () => {
    render(<App/>);
    
    // find elements
    const buttonElement = screen.getByRole("button", { name : /blue/i});
    const checkboxElement = screen.getByRole("checkbox", {
        name : /disable button/i
    });
    

    // check init conditions
    expect(buttonElement).toBeEnabled();
    expect(checkboxElement).toBeEnabled();

    // check checkbox to disable button
    fireEvent.click(checkboxElement);
    expect(buttonElement).toBeDisabled();

    // check checkbox again to re-enable button
    fireEvent.click(checkboxElement);
    expect(buttonElement).toBeEnabled();

});

