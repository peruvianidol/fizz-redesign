// requre Luxon for date conversion
const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  // Set directories to pass through to the _site folder
  eleventyConfig.addPassthroughCopy("_src/assets/images/");
  eleventyConfig.addPassthroughCopy("_src/assets/meta/");
  eleventyConfig.addPassthroughCopy("_src/assets/icons/");
  eleventyConfig.addPassthroughCopy("_src/assets/js/");

  // Watch scss folder for changes
  eleventyConfig.addWatchTarget("./_src/assets/scss/site.scss");
  eleventyConfig.addWatchTarget("./_src/assets/scss/fizz.scss");

  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight);

  // Filters
  eleventyConfig.addFilter("squash", require("./_src/_filters/squash.js") );

  // open a browser window on --watch
  // eleventyConfig.setBrowserSyncConfig({
  //   open: true,
  // });

  // shortcode for inserting the current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // display an icon
  eleventyConfig.addShortcode("icon", function(name, classes) {
    return `<svg class="${classes}" role="img" aria-hidden="true" width="24" height="24">
      <use xlink:href="#icon-${name}"></use>
    </svg>`
  });

  // Show a code sample
  eleventyConfig.addPairedShortcode("codeSample", function(content) {
    return `
  <details class="fizz-details">
    <summary><span>HTML</span></summary>
    ${content}
  </details>`
  });

  // add anchor links to heading text
  eleventyConfig.addPairedShortcode("anchor", function(content) {
    return `
    <h2 class="fizz-heading-2">
    <a id="${eleventyConfig.getFilter('slug')(content)}" href="#${eleventyConfig.getFilter('slug')(content)}" class="fizz-anchor" aria-hidden="true">
    ${content}
    </a>
    </h2>`
  });

  // convert date to [Month DD, YYYY], set timezone to UTC to ensure date is not off by one
  // https://moment.github.io/luxon/docs/class/src/datetime.js~DateTime.html
  // https://www.11ty.dev/docs/dates/#dates-off-by-one-day 
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toLocaleString(DateTime.DATE_FULL);
  });

  return {
    htmlTemplateEngine: 'njk',
    // set the input and output directories
    dir: {
      input: '_src',
      output: '_site'
    }
  };

};