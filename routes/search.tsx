// routes/search.tsx

// Page
import { HeadProps } from "$fresh/runtime.ts"
// Handler
import { Handlers, PageProps } from "$fresh/server.ts"
import { JSX } from "preact/jsx-runtime";
const NAMES = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"];

interface   Data{
    results: string[];
    query: string;
}

export const handler: Handlers<Data> ={
    GET(_req,_ctx){
        const url = new URL(_req.url);
        const query = url.searchParams.get('q') || '';
        const results = NAMES.filter((name) => name.includes(query));
        return _ctx.render({results, query});
    }
};

export default function Page({data}: PageProps<Data>){
    const {results, query} = data;

    return(
        <div className="container bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img src="/logo.svg" class="w-16 h-16"
                alt="the fresh logo: a sliced lemon dripping with juice" />
            <div className="flex items-left mb-5 bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <form>
                <input type='text' name='q' value={query} className="px-2 py-1 border(gray-100 2)" />
                <button type='submit' className="px-2 py-1 border(gray-100 2) hover:bg-gray-200">Search</button>
            </form>
            </div>
            <ul className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                {results.map((name)=> <li key={name}>{name}</li>)}
            </ul>
        </div>
    );
}
