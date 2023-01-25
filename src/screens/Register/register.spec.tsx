import { fireEvent, render, waitFor } from "@testing-library/react-native";
import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components/native";
import { Register } from ".";
import theme from "../../global/styles/theme";

jest.mock("@react-navigation/native", () => {
  return {
    useNavigation: jest.fn(),
  };
});

const Providers: React.FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe("Register Screen", () => {
  it("should be open category modal when user click on button", async () => {
    const { getByTestId } = render(<Register />, {
      wrapper: Providers,
    });

    const categoryModal = getByTestId("modal-category");
    const buttonCategory = getByTestId("button-category");
    fireEvent.press(buttonCategory);
    
    await waitFor(() => {
      expect(categoryModal.props.visible).toBeTruthy();
    });
  });
});
