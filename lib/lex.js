var kramed = require('kramed');

function lex(content) {
    var options = Object.create(kramed.defaults);
    options.escape = false;

    return kramed.lexer(content, options);
}

module.exports = lex;
