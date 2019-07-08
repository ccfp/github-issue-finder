import toQueryStringArray from "./toQueryStringArray";

describe("toQueryString", () => {
  it("constructs a valid query given non-empty keywords, labels, and language", () => {
    const input = {
      keywords: "test",
      labels: ["good first issue", "help wanted"],
      language: "JavaScript"
    };
    expect(toQueryStringArray(input)[0]).toBe(
      'test label:"good first issue" label:"help wanted" language:JavaScript'
    );
  });
});
