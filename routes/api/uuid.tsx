//import { Server } from "https://deno.land/std@0.178.0/http/server.ts";
import { HandlerContext } from "$fresh/server.ts"
import { Handler } from "https://raw.githubusercontent.com/denoland/fresh/main/src/server/types.ts";
//import { ReturnTypedNode } from "https://deno.land/x/ts_morph@17.0.1/ts_morph.js";

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
    const uuid = crypto.randomUUID();
    return new Response(
        JSON.stringify(uuid),{
            headers:{"Content-type": "application/json"}
    });
};
