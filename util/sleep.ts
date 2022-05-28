import { expect } from "../deps.ts";

export const sleep = (ms: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};

Deno.test("sleep", async () => {
  const d = new Date();
  await sleep(1000);
  const d2 = new Date();

  expect(d2.getTime() - d.getTime()).toBeGreaterThanOrEqual(1000);
});
