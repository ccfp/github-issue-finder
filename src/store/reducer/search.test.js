import searchReducer from "store/reducer/search";
import { ADD_SELECTED_LABEL } from "store/constants";

describe("searchReducer", () => {
  it("will add a normalized label", () => {
    const action = {
      type: ADD_SELECTED_LABEL,
      payload: "foo"
    };
    expect(searchReducer(undefined, action).selectedLabels).toEqual(
      expect.arrayContaining(["foo"])
    );
  });
});

// @TODO: Add snapshot testing for reducers
