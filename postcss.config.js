module.exports = {
  plugins: [
    require("postcss-import"),
    require("autoprefixer")({
      "browserslist": [
        "> 1%",
        "last 2 versions"
      ]
    })
  ]
};
