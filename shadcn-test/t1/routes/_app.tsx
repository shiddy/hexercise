import Nav from "../islands/Nav.tsx";
import Footer from "../islands/Footer.tsx";
import { type PageProps } from "$fresh/server.ts";
import { Provider } from "../islands/state.tsx"

export default function App({ Component }: PageProps) {
  return (
    <Provider >
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Hexercise</title>
          <link rel="stylesheet" href="/styles.css" />
        </head>
        <body>
          <div className="flex flex-col h-screen bg-gradient-to-b from-emerald-300 from-60% to-emerald-700 h-screen">
            <Nav />
              <Component />
            <Footer />
          </div>
        </body>
      </html>
    </Provider>
  );
}
