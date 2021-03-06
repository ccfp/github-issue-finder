import last from "lodash/fp/last";
import toSearchStringArray from "lib/toSearchStringArray";

describe("toSearchStringArray", () => {
  it("constructs a valid query given non-empty keywords, labels, and language", () => {
    const input = {
      keywords: "test",
      labels: ["good first issue", "help wanted"],
      language: "JavaScript"
    };
    expect(toSearchStringArray(input)).toHaveLength(4);
    expect(toSearchStringArray(input)[0]).toBe(
      'test label:"good first issue" label:"help wanted" language:JavaScript'
    );
    expect(toSearchStringArray(input)[1]).toBe(
      'test label:"good first issue" language:JavaScript'
    );
    expect(toSearchStringArray(input)[2]).toBe(
      'test label:"help wanted" language:JavaScript'
    );
    expect(last(toSearchStringArray(input))).toBe("test language:JavaScript");
  });
  it("constructs a valid query given empty labels array", () => {
    const input = {
      keywords: "example search",
      labels: [],
      language: "JavaScript"
    };
    expect(toSearchStringArray(input)).toHaveLength(1);
    expect(toSearchStringArray(input)[0]).toBe(
      "example search language:JavaScript"
    );
  });
  it("constructs a valid query given empty search and empty labels array", () => {
    const input = {
      keywords: "",
      labels: [],
      language: "JavaScript"
    };
    expect(toSearchStringArray(input)).toHaveLength(1);
    expect(toSearchStringArray(input)[0]).toBe("language:JavaScript");
  });
  it('constructs a valid query given "Any" as language', () => {
    const input = {
      keywords: "example",
      labels: ["help wanted", "good first issue"],
      language: "Any"
    };
    expect(toSearchStringArray(input)).toHaveLength(4);
    expect(toSearchStringArray(input)[0]).toBe(
      'example label:"help wanted" label:"good first issue"'
    );
  });
});
