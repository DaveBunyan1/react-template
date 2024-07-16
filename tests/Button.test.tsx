import { render } from "@testing-library/react";
import React from "react";
import { test, expect } from "vitest";
import Button from "../src/components/buttons/Button";

test("Button renders correctly with text", () => {
  const { container } = render(
    <Button class="primary" text="Click me" onClick={() => {}} />
  );
  const buttonElement = container.querySelector("button");

  expect(buttonElement).not.toBeNull();
  expect(buttonElement?.textContent).toBe("Click me");
});

test("Button calls onClick when clicked", () => {
  let clicked = false;
  const { container } = render(
    <Button class="primary" text="Click me" onClick={() => (clicked = true)} />
  );
  const buttonElement = container.querySelector("button");

  expect(clicked).toBe(false);
  buttonElement?.click();
  expect(clicked).toBe(true);
});

test("Button is disabled when disabled prop is true", () => {
  const { container } = render(
    <Button class="primary" text="Click me" onClick={() => {}} disabled />
  );
  const buttonElement = container.querySelector("button");

  expect(buttonElement).not.toBeNull();
  expect(buttonElement?.disabled).toBe(true);
});

test("Button is not disabled when disabled prop is false", () => {
  let clicked = false;
  const { container } = render(
    <Button
      class="primary"
      text="Click me"
      onClick={() => (clicked = true)}
      disabled={false}
    />
  );
  const buttonElement = container.querySelector("button");

  expect(buttonElement).not.toBeNull();
  expect(buttonElement?.disabled).toBe(false);
  expect(clicked).toBe(false);
  buttonElement?.click();
  expect(clicked).toBe(true);
});
