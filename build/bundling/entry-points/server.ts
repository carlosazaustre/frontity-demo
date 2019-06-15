import server from "@frontity/core/src/server";
import frontity__tiny_router_default from "@frontity/tiny-router/src/index";
import osw_theme_example_default from "osw-theme-example/src/index";
import frontity__wp_source_default from "@frontity/wp-source/src/index";

const packages = {
  frontity__tiny_router_default,
  osw_theme_example_default,
  frontity__wp_source_default,
};

export default server({ packages });

