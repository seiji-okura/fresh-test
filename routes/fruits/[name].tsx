// routes/fruits/[name].tsx

import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  const {name} = props.params;
  return (
    <main>
      <p>Fresh {props.params.name}</p>
    </main>
  );
}
