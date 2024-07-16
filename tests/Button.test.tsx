import { render } from "@testing-library/react";
import React from "react";
import { test, expect } from "vitest";
import Button from "../src/components/buttons/Button";

test("Button renders correctly with text", async () => {
  const { container } = render(
    <Button class="primary" text="Click me" onClick={() => {}} />
  );
  const buttonElement = container.querySelector("button");

  expect(buttonElement).not.toBeNull();
  expect(buttonElement?.textContent).toBe("Click me");
});
