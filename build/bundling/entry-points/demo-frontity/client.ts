import client from "@frontity/core/src/client";
import frontity__tiny_router_default from "@frontity/tiny-router/src/index";
import osw_theme_example_default from "osw-theme-example/src/index";
import frontity__wp_source_default from "@frontity/wp-source/src/index";

const packages = {
  frontity__tiny_router_default,
  osw_theme_example_default,
  frontity__wp_source_default,
};

export default client({ packages });

if (module["hot"]) {
  module["hot"].accept(
    [
      "@frontity/core/src/client",
      "@frontity/tiny-router/src/index",
      "osw-theme-example/src/index",
      "@frontity/wp-source/src/index",
    ],
    () => {
      const client = require("@frontity/core/src/client").default;
      const frontity__tiny_router_default = require("@frontity/tiny-router/src/index").default;
      const osw_theme_example_default = require("osw-theme-example/src/index").default;
      const frontity__wp_source_default = require("@frontity/wp-source/src/index").default;
      const packages = {
        frontity__tiny_router_default,
        osw_theme_example_default,
        frontity__wp_source_default,
      };
      client({ packages });
    }
  );
}