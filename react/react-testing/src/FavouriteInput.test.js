import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import FavouriteInput from "./FavouriteInput";

describe("Favourite Input", () => {
    it("calls onChange correct number of times", async () => {
        const onChangeMock = jest.fn();
        const user = userEvent.setup();

        render(<FavouriteInput onChange={onChangeMock} />);
        const input = screen.getByRole("textbox");

        await user.type(input, "Lion");

        expect(onChangeMock).toHaveBeenCalledTimes(4);
    });

    it("calls onChange with correct argument(s) on each input", async () => {
        const onChangeMock = jest.fn();
        const user = userEvent.setup();

        render(<FavouriteInput onChange={onChangeMock} />);
        const input = screen.getByRole("textbox");

        await user.type(input, "Ox");

        expect(onChangeMock).toHaveBeenNthCalledWith(1, "O");
        expect(onChangeMock).toHaveBeenNthCalledWith(2, "Ox");
    });

    it("input has correct values", async () => {
        const onChangeMock = jest.fn();
        const user = userEvent.setup();

        render(<FavouriteInput onChange={onChangeMock} />);
        const input = screen.getByRole("textbox");

        await user.type(input, "Whale");

        expect(input).toHaveValue("Whale");
    });
});
