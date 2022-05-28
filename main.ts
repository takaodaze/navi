import { Command } from "https://deno.land/x/cliffy@v0.24.2/command/mod.ts";
import { mainCommandHandler } from "./action.ts";

await new Command().name("navi").action(mainCommandHandler).parse(Deno.args);
