import { Ask, expect } from "./deps.ts";

Deno.test("sample test", () => {
  expect(2).toBe(2);
});

Deno.test("ask", async () => {
  const ask = new Ask({
    prefix: ">",
  });

  const answers = await ask.prompt([
    {
      name: "name",
      message: "Your name:",
      type: "input",
    },
    {
      name: "age",
      message: "Your age:",
      type: "number",
      prefix: "?",
    },
  ]);

  console.log(answers); // { name: "Joe", age: 19 }
});
