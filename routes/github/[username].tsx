/** @jsx  */
import { HeadProps } from "$fresh/runtime.ts"
import { Handlers, PageProps } from "$fresh/server.ts"
import { NodeWithTypeArguments, PropertySignature } from "https://deno.land/x/ts_morph@17.0.1/ts_morph.js";
import Countdown from "../../islands/Countdown.tsx";

interface User {
    login: string;
    name: string;
    avatar_url: string;
}

export const handler: Handlers<User | null> ={
    async GET(_, _ctx) {
        const { username } = _ctx.params;
        const resp = await fetch(`https://api.github.com/users/${username}`);
        if( resp.status === 404 ){
            return _ctx.render(null);
        }
        const user = await resp.json();
        console.log(user);
        return _ctx.render(user);
    }
};

export default function Page({data}: PageProps<User | null>) {
    if( !data ){
        return <h1>User not found!</h1>;
    }

    return(
        <div>
            <img src={data.avatar_url} width={64} height={64} />
            <h1>{data.name}</h1>
            <p>{data.login}</p>
            <p>{Countdown({"target": new Date().toString()})}</p>
        </div>
    );
}



