import { Command } from "https://deno.land/x/cliffy@v0.24.2/command/mod.ts";
import { sleep } from "./util/sleep.ts";

await new Command()
  .name("navi")
  .action(async () => {
    console.log("start navi");
    while (true) {
      await sleep(1000);
      console.log("in loop");
    }
  })
  .parse(Deno.args);
