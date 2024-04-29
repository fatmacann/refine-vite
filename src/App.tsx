import { Refine } from "@refinedev/core";

import { dataProvider } from "./providers/data-provider";
import { ShowProduct } from "./pages/products/show";

export default function App(): JSX.Element {
  return (
    <Refine dataProvider={dataProvider}>
      <ShowProduct />
    </Refine>
  );
}