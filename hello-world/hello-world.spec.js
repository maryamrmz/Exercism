import hello from "./hello-world";

describe("Hello World", () => {
    const greeter = new hello();
    test("Say Hi!", () => {
        expect(greeter.hello()).toEqual("Hello, World!");
    });
});

