module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    pathPrefix: "/faq-website/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "layouts"
    }
  };
};
