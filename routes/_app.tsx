import { type PageProps } from "$fresh/server.ts";
import { Provider } from "@/islands/State.tsx"

export default function App({ Component }: PageProps) {
  return (
    <Provider>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Hexercise</title>
          <link rel="stylesheet" href="/styles.css" />
        </head>
        <body class="bg-gradient-to-b from-emerald-300 from-60% to-emerald-700 bg-fixed">
          <Component />
        </body>
      </html>
    </Provider>
  );
}
