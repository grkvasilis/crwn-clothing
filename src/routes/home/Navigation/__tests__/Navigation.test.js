import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navigation from "../Navigation";
import { renderWithProviders } from "../../../../utils/test.utils";

import { signOutStart } from "../../../../store/user/userAction";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Navigation tests", () => {
  afterEach(() => {
    mockDispatch.mockClear();
  });

  test("It should render a Sign In link if there is no currentUser", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: null,
        },
      },
    });

    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
  });

  test("It should not render Sign In if there is a currentUser", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });

    expect(screen.queryByText(/sign in/i)).toBeNull();
  });

  test("It should render Sign Out if there is a currentUser", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });

    expect(screen.getByText(/sign out/i)).toBeInTheDocument();
  });

  test("It should render cart dropdown if isCartOpen is true", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: true,
          cartItems: [],
        },
      },
    });

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  });

  test("It should not render a cart dropdown if isCartOpen is false", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: false,
          cartItems: [],
        },
      },
    });

    expect(screen.queryByText(/your cart is empty/i)).toBeNull();
  });

  test("It should dispatch signOutStart action when clicking on the Sign Out link", async () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });
    const signOutButton = screen.getByText(/sign out/i); // πιο reliable
    expect(signOutButton).toBeInTheDocument();
    await userEvent.click(signOutButton);

    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(signOutStart());
  });
});
