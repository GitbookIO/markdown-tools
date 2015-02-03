# markdown-tools
A small CLI interface to kramed with lots of useful markdown tools (like go's "go fmt", lexing, rendering ...)

## Install

```
npm install -g markdown-tools
```

### Commands

```
❯ markdown-tools --help

  Usage: markdown-tools [options] [command]


  Commands:

    fmt <file>     Like "go fmt" but for markdown. Removes inconsistencies in your markdown code
    lex <file>     Outputs the lex tree as JSON
    render <file>  Render's your markdown to html

  Options:

    -h, --help     output usage information
    -V, --version  output the version number

```
