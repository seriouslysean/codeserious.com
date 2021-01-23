module.exports = function configureEleventy(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/img');

    return {
        dir: {
            input: 'src',
            output: 'dist',
        },
    };
};
