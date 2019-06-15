import { Package } from "frontity/types";
import Router from "@frontity/router";
import Source from "@frontity/source";

interface MarsTheme extends Package {
  name: "osw-theme-example";
  roots: {
    theme: React.ReactType;
  };
  state?: {
    router?: Router["state"]["router"];
    source?: Source["state"]["source"];
    theme: {
      menu: [string, string][];
      featured: {
        showOnList: boolean;
        showOnPost: boolean;
      };
    };
  };
  actions: {
    router?: Router["actions"]["router"];
    source?: Source["actions"]["source"];
  };
}

export default MarsTheme;
