var kramed = require('kramed');

// Takes markdown and returns html
function render(content) {
    return kramed(content);
}

module.exports = render;
