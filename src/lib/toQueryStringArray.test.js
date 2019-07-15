import last from "lodash/fp/last";
import toQueryStringArray from "lib/toQueryStringArray";

describe("toQueryStringArray", () => {
  it("constructs a valid query given non-empty keywords, labels, and language", () => {
    const input = {
      keywords: "test",
      labels: ["good first issue", "help wanted"],
      language: "JavaScript"
    };
    expect(toQueryStringArray(input)).toHaveLength(4);
    expect(toQueryStringArray(input)[0]).toBe(
      'test label:"good first issue" label:"help wanted" language:JavaScript'
    );
    expect(toQueryStringArray(input)[1]).toBe(
      'test label:"good first issue" language:JavaScript'
    );
    expect(toQueryStringArray(input)[2]).toBe(
      'test label:"help wanted" language:JavaScript'
    );
    expect(last(toQueryStringArray(input))).toBe("test language:JavaScript");
  });
  it("constructs a valid query given empty labels array", () => {
    const input = {
      keywords: "example search",
      labels: [],
      language: "JavaScript"
    };
    expect(toQueryStringArray(input)).toHaveLength(1);
    expect(toQueryStringArray(input)[0]).toBe(
      "example search language:JavaScript"
    );
  });
  it("constructs a valid query given empty search and empty labels array", () => {
    const input = {
      keywords: "",
      labels: [],
      language: "JavaScript"
    };
    expect(toQueryStringArray(input)).toHaveLength(1);
    expect(toQueryStringArray(input)[0]).toBe("language:JavaScript");
  });
  it('constructs a valid query given "Any" as language', () => {
    const input = {
      keywords: "example",
      labels: ["help wanted", "good first issue"],
      language: "Any"
    };
    expect(toQueryStringArray(input)).toHaveLength(4);
    expect(toQueryStringArray(input)[0]).toBe(
      'example label:"help wanted" label:"good first issue"'
    );
  });
});
