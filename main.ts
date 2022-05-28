import { Command } from "https://deno.land/x/cliffy@v0.24.2/command/mod.ts";
import { action } from "./action.ts";

await new Command().name("navi").action(action).parse(Deno.args);
