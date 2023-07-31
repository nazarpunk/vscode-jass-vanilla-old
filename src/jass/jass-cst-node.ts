import {CstNode} from 'chevrotain'
import JassRule from './jass-rule'
import {IToken} from '@chevrotain/types'

export default interface JassCstNode extends CstNode {
    // node
    [JassRule.end]?: CstNode[],
    [JassRule.type_declare]?: CstNode[],
    [JassRule.function_head]?: CstNode[],
    [JassRule.native_declare]?: CstNode[],
    [JassRule.function_declare]?: CstNode[],
    [JassRule.globals_declare]?: CstNode[],
    [JassRule.variable_declare]?: CstNode[],
    [JassRule.function_args]?: CstNode[],
    [JassRule.function_returns]?: CstNode[],
    [JassRule.function_locals]?: CstNode[],
    [JassRule.function_call]?: CstNode[],
    [JassRule.statement]?: CstNode[],
    [JassRule.typedname]?: CstNode[],
    [JassRule.expression]?: CstNode[],
    [JassRule.if_statement]?: CstNode[],
    [JassRule.set_statement]?: CstNode[],
    [JassRule.call_statement]?: CstNode[],
    [JassRule.loop_statement]?: CstNode[],
    [JassRule.exitwhen_statement]?: CstNode[],
    [JassRule.return_statement]?: CstNode[],
    [JassRule.else_statement]?: CstNode[],
    [JassRule.elseif_statement]?: CstNode[],
    [JassRule.arrayaccess]?: CstNode[],
    [JassRule.multiplication]?: CstNode[],
    [JassRule.primary]?: CstNode[],
    [JassRule.addition]?: CstNode[],
    // token
    [JassRule.endfunction]?: IToken[],
    [JassRule.globals]?: IToken[],
    [JassRule.endglobals]?: IToken[],
    [JassRule.identifier]?: IToken[],
    [JassRule.type]?: IToken[],
    [JassRule.extends]?: IToken[],
    [JassRule.constant]?: IToken[],
    [JassRule.native]?: IToken[],
    [JassRule.takes]?: IToken[],
    [JassRule.returns]?: IToken[],
    [JassRule.function]?: IToken[],
    [JassRule.comment]?: IToken[],
    [JassRule.stringliteral]?: IToken[],
    [JassRule.array]?: IToken[],
    [JassRule.lparen]?: IToken[],
    [JassRule.rparen]?: IToken[],
    [JassRule.comma]?: IToken[],
    [JassRule.nothing]?: IToken[],
    [JassRule.assign]?: IToken[],
    [JassRule.local]?: IToken[],
    [JassRule.debug]?: IToken[],
    [JassRule.call]?: IToken[],
    [JassRule.set]?: IToken[],
    [JassRule.loop]?: IToken[],
    [JassRule.endloop]?: IToken[],
    [JassRule.exitwhen]?: IToken[],
    [JassRule.return]?: IToken[],
    [JassRule.if]?: IToken[],
    [JassRule.then]?: IToken[],
    [JassRule.else]?: IToken[],
    [JassRule.endif]?: IToken[],
    [JassRule.elseif]?: IToken[],
    [JassRule.not]?: IToken[],
    [JassRule.sub]?: IToken[],
    [JassRule.integer]?: IToken[],
    [JassRule.real]?: IToken[],
    [JassRule.idliteral]?: IToken[],
    [JassRule.add]?: IToken[],
    [JassRule.mult]?: IToken[],
    [JassRule.div]?: IToken[],
    [JassRule.lsquareparen]?: IToken[],
    [JassRule.rsquareparen]?: IToken[],
    [JassRule.and]?: IToken[],
    [JassRule.or]?: IToken[],
    [JassRule.equals]?: IToken[],
    [JassRule.notequals]?: IToken[],
    [JassRule.lessorequal]?: IToken[],
    [JassRule.great]?: IToken[],
    [JassRule.greatorequal]?: IToken[],
}
