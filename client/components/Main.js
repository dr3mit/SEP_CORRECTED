import { component } from "react";
import Campuses from "./Campus";
import Students from "./Student";

export class Main extends component {
  render() {
    return (
      <body>
        <div>
          <Campuses />
          <Students />
        </div>
      </body>
    );
  }
}
