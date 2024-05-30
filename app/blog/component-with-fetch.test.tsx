import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { DataClientSide } from "./[slug]/components/data-client";

test("Pages Router", async () => {
    render(<DataClientSide />);
    expect(await screen.findByText(/Maverick/)).toBeDefined();
});
