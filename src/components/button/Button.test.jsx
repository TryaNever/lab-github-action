/* eslint-env vitest */

import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("Le button affiche le texte 'Cliquez Ici'", () => {
  render(<Button />);
  const expectedText = screen.getByText("Cliquez Ici");
  expect(expectedText).toBeInTheDocument();
});
