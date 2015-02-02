var kramed = require('kramed');
var renderer = require('kramed-markdown-renderer');

// Get nodes
function lex(content) {
    var options = Object.create(kramed.defaults);
    options.escape = false;

    return kramed.lexer(content, options);
}

// Render lexed nodes back to markdown
function render(lexed) {
    // Options to parser
    var options = Object.create(kramed.defaults);
    options.renderer = renderer();
    options.escape = false;

    if(!lexed.links) {
        lexed.links = {};
    }

    return kramed.parser(lexed, options);
}

// Lex then re-render (removing inconsistencies, etc ...)
function fmt(content) {
    return render(lex(content));
}

module.exports = fmt;
module.exports.lex = lex;
module.exports.render = render;
