const settings = {
  "name": "demo-frontity",
  "state": {
    "frontity": {
      "url": "https://test.frontity.io",
      "title": "Demo Frontity",
      "description": "Frontity: WordPress + React + Now"
    }
  },
  "packages": [
    "@frontity/tiny-router",
    {
      "name": "osw-theme-example",
      "state": {
        "theme": {
          "menu": [
            ["Home", "/"],
            ["Nature", "/category/nature"],
            ["Japan", "/tag/japan"]
          ]
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "isWPCom": true,
          "api": "https://public-api.wordpress.com/wp/v2/sites/cazaustrefrontitydemo.travel.blog"
        }
      }
    }
  ]
};

export default settings;
