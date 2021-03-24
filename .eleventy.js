const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
//const htmlmin = require("html-minifier");

module.exports = function (config) {
  config.addLayoutAlias("course", "layouts/course.njk");

  config.dir = {
    input: "src",
    output: "dist",
  };
  config.addPassthroughCopy("src/_assets");
  //config.addPassthroughCopy("css");
  config.setDataDeepMerge(true);
  config.setTemplateFormats([
    "njk",
    "md",
    "jpg",
    "png",
    "svg",
    // 'liquid',
    // 'pug',
    // 'ejs',
    // 'hbs',
    // 'mustache',
    // 'haml',
    // '11ty.js',
  ]);
  const markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true,
  };

  config.setLibrary("md", markdownIt(markdownItOptions).use(markdownItAttrs));
  return config;
};
