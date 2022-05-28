export const inputLine = () => {
  const buf = new Uint8Array(1024);
  Deno.stdin.readSync(buf);
  const text = new TextDecoder().decode(buf).trim();
  return text;
};

Deno.test({ name: "inputLine" }, () => {
  console.log("please input text for test");
  const buf = inputLine();

  console.log("\n↓↓↓ buffered text ↓↓↓");
  console.log(buf);
});
