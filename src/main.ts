import { readFile, readFileSync } from "fs"
import { readCode } from "./code.js"
import { execute } from "./execution.js"
import { lexer, tokens } from "./lexer.js"
import { ast, parse } from "./parser.js"

try {
    readCode("./code.txt")
    lexer()
    parse()

    execute(ast, new Map<string, number>([
        ["b", 2],
        ["c", 3],
        ["d", 3.14]
    ]))

    // console.log(JSON.stringify(ast, null, 4))
} catch (e) {
    console.log(e)
}