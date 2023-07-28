const enum JassRule {
    // rules
    jass = 'jass',
    root = 'root',
    type_declare = 'type_declare',
    globals_declare = 'globals_declare',
    variable_declare = 'variable_declare',
    native_declare = 'native_declare',
    function_declare = 'function_declare',
    function_locals = 'function_locals',
    function_returns = 'function_returns',
    function_args = 'function_args',
    function_call = 'function_call',
    return_statement = 'return_statement',
    if_statement = 'if_statement',
    else_statement = 'else_statement',
    elseif_statement = 'elseif_statement',
    addition = 'addition',
    arrayaccess = 'arrayaccess',
    call_statement = 'call_statement',
    exitwhen_statement = 'exitwhen_statement',
    expression = 'expression',
    typedname = 'typedname',
    loop_statement = 'loop_statement',
    multiplication = 'multiplication',
    primary = 'primary',
    set_statement = 'set_statement',
    statement = 'statement',
    end = 'end',
    // tokens
    whitespace = 'whitespace',
    comment = 'comment',
    // keyword
    and = 'and',
    array = 'array',
    call = 'call',
    constant = 'constant',
    debug = 'debug',
    else = 'else',
    elseif = 'elseif',
    endfunction = 'endfunction',
    endglobals = 'endglobals',
    endif = 'endif',
    endloop = 'endloop',
    exitwhen = 'exitwhen',
    extends = 'extends',
    function = 'function',
    globals = 'globals',
    if = 'if',
    local = 'local',
    loop = 'loop',
    native = 'native',
    not = 'not',
    nothing = 'nothing',
    or = 'or',
    returns = 'returns',
    return = 'return',
    set = 'set',
    takes = 'takes',
    then = 'then',
    type = 'type',
    // someone
    comma = 'comma',
    equals = 'equals',
    assign = 'assign',
    notequals = 'notequals',
    lessorequal = 'lessorequal',
    less = 'less',
    greatorequal = 'greatorequal',
    great = 'great',
    add = 'add',
    sub = 'sub',
    mult = 'mult',
    div = 'div',
    lparen = 'lparen',
    rparen = 'rparen',
    lsquareparen = 'lsquareparen',
    rsquareparen = 'rsquareparen',
    real = 'real',
    integer = 'integer',
    linebreak = 'linebreak',
    idliteral = 'idliteral',
    stringliteral = 'stringliteral',
    identifier = 'identifier',
}

export default JassRule;