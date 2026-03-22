// the mascii 2.0 grammar

lexer grammar MasciiLexer;
OPEN_SCOPED:        F_OPEN_SCOPED;
CLOSE_SCOPED:       F_CLOSE_SCOPED ;
OPEN_UNSCOPED:      F_OPEN_UNSCOPED ;
CLOSE_UNSCOPED:     F_CLOSE_UNSCOPED ; 
ACCIDENTAL:         DBL_FLAT | DBL_SHARP | (NATURAL? SHARP) |  (NATURAL? FLAT) | NATURAL ;
STAFF_SEPARATOR:    F_STAFF_SEP ;
AMPLIFIERS:         AMPLIFIER+;
AMPLIFIER:          '!' ; //amplifies magnitude of octave shift
ABS_PITCH_RANGE:    [0-9]; //for scientific pitch, eg 4C
REL_PITCH:          REL_PITCH_DOWN | REL_PITCH_UP;
REL_PITCH_UP:       [a-g] ;
REL_PITCH_DOWN:     [A-G] ;
REPEAT_ELEMENT:     [Xx] ;
REST:               F_REST ;
DBL_SHARP:          SHARP SHARP ;
DBL_FLAT:           FLAT FLAT ;
SHARP:              '#' ;
FLAT:               '@';
NATURAL:            '=' ;
DOTTED:             F_DOTTED ;
MULTI_DOTTED:       F_DOTTED F_DOTTED+ ;
TIE:                F_TIE ;
NOTE_END_ALL:       '*';
COMMENT:            F_COMMENT -> skip; 
//WS:               [ \t]+ -> skip ; // skip spaces, tabs
NEWLINE:            SPACE? F_NEWLINE SPACE?;
SPACE:              F_SPACE;
OPEN_META:          '{' -> pushMode(METAINFO_MODE);
OPEN_LYRICS:        STARTING_QUOTE -> pushMode(LYRICS_MODE);

fragment
F_STAFF_SEP:        '|';

fragment
F_REST:             '%';

fragment
F_DOTTED:           '.';

fragment
F_TIE:              '_';

fragment
DBL_QUOTE:          '"';

fragment
STARTING_QUOTE:     DBL_QUOTE F_SPACE?;

fragment
ENDING_QUOTE:       F_SPACE? DBL_QUOTE;

fragment
F_NOT_NEWLINE:      ~[\r\n]+ ;

fragment
F_NEWLINE:          [\r]?[\n] ;

fragment
F_SPACE:            [ \t]+ ; 

fragment
F_SEMICOLON:        ';';

fragment
F_COMMENT:          '--' F_NOT_NEWLINE? F_NEWLINE?; 

F_OPEN_SCOPED:        '(' ;
F_CLOSE_SCOPED:       ')' ;
F_OPEN_UNSCOPED:      '['; 
F_CLOSE_UNSCOPED:     ']' ; 


mode METAINFO_MODE;
CLOSE_META:         '}' -> popMode;
HEADER_NAME_VAL_SEP:         M_SPACE? ':' M_SPACE? ;
HEADER_ENTITY:      [a-zA-Z_\-0-9/#@+]+;
HEADER_VAL_SEP:     M_SPACE? ',' M_SPACE? ;
M_COMMENT:          F_COMMENT -> skip; 
M_NEWLINE:          SPACE? F_NEWLINE SPACE?;
M_INLINE_SEP:       SPACE? F_SEMICOLON SPACE?;
M_SPACE:            F_SPACE -> skip; 
OPEN_QUOTE:         STARTING_QUOTE -> skip, pushMode(QUOTE_MODE);


mode LYRICS_MODE;
CLOSE_LYRICS:           ENDING_QUOTE -> popMode;
IMPLICIT_CLOSE_LYRICS:  L_NEWLINE -> popMode;
LYRICS:                 QUOTED_TEXT ;
L_NEWLINE:              F_SPACE? F_NEWLINE F_SPACE?;

mode QUOTE_MODE;
CLOSE_QUOTE:           ENDING_QUOTE -> skip, popMode;
QUOTED_TEXT:           ~[\r\n"]+ ;