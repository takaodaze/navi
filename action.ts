export const mainCommandHandler = () => {
  console.log("hello takao.");

  console.log("何をしますか");
};

type Menu = "hoge" | "foo";
const menuList: Menu[] = ["hoge", "foo"];

const printMenuText = (selector: number) => {
  const maxMenuLength = menuList.reduce((prev, curr) => {
    const menuLen = curr.length;
    return Math.max(prev, menuLen);
  }, 0);

  const menuText = menuList.reduce((prev, curr, idx) => {
    const spaces = new Array(maxMenuLength - curr.length)
      .fill(0)
      .reduce((p, _) => p + " ", "");
    const surfix = idx === selector ? " <-" : "";
    const menuLine = `${curr}${spaces}${surfix}\n`;
    return prev + menuLine;
  }, "");

  return menuText;
};

Deno.test({ name: "printMenuText" }, () => {
  const text = printMenuText(1);
  console.log(text);
});
