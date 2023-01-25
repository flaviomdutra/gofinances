import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();

import { act, renderHook } from "@testing-library/react-hooks";
import { AuthProvider, useAuth } from "./auth";
import { mocked } from "ts-jest/utils";
import { startAsync } from "expo-auth-session";

jest.mock("expo-auth-session");

describe("Auth Hook", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("should be able to sign in with Google account existing", async () => {
    const googleMocked = mocked(startAsync as any);
    googleMocked.mockReturnValueOnce({
      type: "success",
      params: {
        access_token: "any_token",
      },
    });

    fetchMock.mockResponseOnce(
      JSON.stringify({
        id: "any_id",
        email: "rodrigo.goncalves@rocketseat.team",
        name: "Rodrigo",
        photo: "any_photo.png",
      })
    );

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    await act(() => result.current.signInWithGoogle());

    expect(result.current.user.email).toBe("rodrigo.goncalves@rocketseat.team");
  });
});
