import { readFile, readFileSync } from "fs"
import { readCode } from "./code.js"
import { execute, functions } from "./execution.js"
import { lexer, tokens } from "./lexer.js"
import { ast, parse } from "./parser.js"
import { codegen } from "./codegen.js"

try {
    readCode("./code.txt")
    lexer()
    parse()

    execute(ast, new Map<string, number>([
        ["a", 23],
        ["b", 17],
        ["C", 23]
    ]))

    // console.log(codegen(ast))

    // console.log(run(functions, new Map([
    //     ["a", 3]
    // ])))

    // console.log(JSON.stringify(ast, null, 4))
} catch (e) {
    console.log(e)
}

