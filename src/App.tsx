import { Refine, WelcomePage } from "@refinedev/core";

import { dataProvider } from "./providers/data-provider";

export default function App(): JSX.Element {
  return (
    <Refine dataProvider={dataProvider}>
      <WelcomePage />
    </Refine>
  );
}