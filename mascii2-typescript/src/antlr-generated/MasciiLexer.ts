// Generated from MasciiLexer.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class MasciiLexer extends Lexer {
	public static readonly OPEN_SCOPED = 1;
	public static readonly CLOSE_SCOPED = 2;
	public static readonly OPEN_UNSCOPED = 3;
	public static readonly CLOSE_UNSCOPED = 4;
	public static readonly ACCIDENTAL = 5;
	public static readonly STAFF_SEPARATOR = 6;
	public static readonly AMPLIFIERS = 7;
	public static readonly AMPLIFIER = 8;
	public static readonly ABS_PITCH_RANGE = 9;
	public static readonly REL_PITCH = 10;
	public static readonly REL_PITCH_UP = 11;
	public static readonly REL_PITCH_DOWN = 12;
	public static readonly REPEAT_ELEMENT = 13;
	public static readonly REST = 14;
	public static readonly DBL_SHARP = 15;
	public static readonly DBL_FLAT = 16;
	public static readonly SHARP = 17;
	public static readonly FLAT = 18;
	public static readonly NATURAL = 19;
	public static readonly DOTTED = 20;
	public static readonly MULTI_DOTTED = 21;
	public static readonly TIE = 22;
	public static readonly NOTE_END_ALL = 23;
	public static readonly COMMENT = 24;
	public static readonly NEWLINE = 25;
	public static readonly SPACE = 26;
	public static readonly OPEN_META = 27;
	public static readonly OPEN_LYRICS = 28;
	public static readonly F_OPEN_SCOPED = 29;
	public static readonly F_CLOSE_SCOPED = 30;
	public static readonly F_OPEN_UNSCOPED = 31;
	public static readonly F_CLOSE_UNSCOPED = 32;
	public static readonly CLOSE_META = 33;
	public static readonly HEADER_NAME_VAL_SEP = 34;
	public static readonly HEADER_ENTITY = 35;
	public static readonly HEADER_VAL_SEP = 36;
	public static readonly M_COMMENT = 37;
	public static readonly M_NEWLINE = 38;
	public static readonly M_INLINE_SEP = 39;
	public static readonly M_SPACE = 40;
	public static readonly OPEN_QUOTE = 41;
	public static readonly CLOSE_LYRICS = 42;
	public static readonly IMPLICIT_CLOSE_LYRICS = 43;
	public static readonly LYRICS = 44;
	public static readonly L_NEWLINE = 45;
	public static readonly CLOSE_QUOTE = 46;
	public static readonly QUOTED_TEXT = 47;
	public static readonly EOF = Token.EOF;
	public static readonly METAINFO_MODE = 1;
	public static readonly LYRICS_MODE = 2;
	public static readonly QUOTE_MODE = 3;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'!'", null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'#'", 
                                                            "'@'", "'='", 
                                                            null, null, 
                                                            null, "'*'", 
                                                            null, null, 
                                                            null, "'{'", 
                                                            null, "'('", 
                                                            "')'", "'['", 
                                                            "']'", "'}'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "OPEN_SCOPED", 
                                                             "CLOSE_SCOPED", 
                                                             "OPEN_UNSCOPED", 
                                                             "CLOSE_UNSCOPED", 
                                                             "ACCIDENTAL", 
                                                             "STAFF_SEPARATOR", 
                                                             "AMPLIFIERS", 
                                                             "AMPLIFIER", 
                                                             "ABS_PITCH_RANGE", 
                                                             "REL_PITCH", 
                                                             "REL_PITCH_UP", 
                                                             "REL_PITCH_DOWN", 
                                                             "REPEAT_ELEMENT", 
                                                             "REST", "DBL_SHARP", 
                                                             "DBL_FLAT", 
                                                             "SHARP", "FLAT", 
                                                             "NATURAL", 
                                                             "DOTTED", "MULTI_DOTTED", 
                                                             "TIE", "NOTE_END_ALL", 
                                                             "COMMENT", 
                                                             "NEWLINE", 
                                                             "SPACE", "OPEN_META", 
                                                             "OPEN_LYRICS", 
                                                             "F_OPEN_SCOPED", 
                                                             "F_CLOSE_SCOPED", 
                                                             "F_OPEN_UNSCOPED", 
                                                             "F_CLOSE_UNSCOPED", 
                                                             "CLOSE_META", 
                                                             "HEADER_NAME_VAL_SEP", 
                                                             "HEADER_ENTITY", 
                                                             "HEADER_VAL_SEP", 
                                                             "M_COMMENT", 
                                                             "M_NEWLINE", 
                                                             "M_INLINE_SEP", 
                                                             "M_SPACE", 
                                                             "OPEN_QUOTE", 
                                                             "CLOSE_LYRICS", 
                                                             "IMPLICIT_CLOSE_LYRICS", 
                                                             "LYRICS", "L_NEWLINE", 
                                                             "CLOSE_QUOTE", 
                                                             "QUOTED_TEXT" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", "METAINFO_MODE", 
                                                "LYRICS_MODE", "QUOTE_MODE", ];

	public static readonly ruleNames: string[] = [
		"OPEN_SCOPED", "CLOSE_SCOPED", "OPEN_UNSCOPED", "CLOSE_UNSCOPED", "ACCIDENTAL", 
		"STAFF_SEPARATOR", "AMPLIFIERS", "AMPLIFIER", "ABS_PITCH_RANGE", "REL_PITCH", 
		"REL_PITCH_UP", "REL_PITCH_DOWN", "REPEAT_ELEMENT", "REST", "DBL_SHARP", 
		"DBL_FLAT", "SHARP", "FLAT", "NATURAL", "DOTTED", "MULTI_DOTTED", "TIE", 
		"NOTE_END_ALL", "COMMENT", "NEWLINE", "SPACE", "OPEN_META", "OPEN_LYRICS", 
		"F_STAFF_SEP", "F_REST", "F_DOTTED", "F_TIE", "DBL_QUOTE", "STARTING_QUOTE", 
		"ENDING_QUOTE", "F_NOT_NEWLINE", "F_NEWLINE", "F_SPACE", "F_SEMICOLON", 
		"F_COMMENT", "F_OPEN_SCOPED", "F_CLOSE_SCOPED", "F_OPEN_UNSCOPED", "F_CLOSE_UNSCOPED", 
		"CLOSE_META", "HEADER_NAME_VAL_SEP", "HEADER_ENTITY", "HEADER_VAL_SEP", 
		"M_COMMENT", "M_NEWLINE", "M_INLINE_SEP", "M_SPACE", "OPEN_QUOTE", "CLOSE_LYRICS", 
		"IMPLICIT_CLOSE_LYRICS", "LYRICS", "L_NEWLINE", "CLOSE_QUOTE", "QUOTED_TEXT",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, MasciiLexer._ATN, MasciiLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "MasciiLexer.g4"; }

	public get literalNames(): (string | null)[] { return MasciiLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return MasciiLexer.symbolicNames; }
	public get ruleNames(): string[] { return MasciiLexer.ruleNames; }

	public get serializedATN(): number[] { return MasciiLexer._serializedATN; }

	public get channelNames(): string[] { return MasciiLexer.channelNames; }

	public get modeNames(): string[] { return MasciiLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,47,341,6,-1,6,-1,
	6,-1,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,
	7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,
	7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,
	22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,
	2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,
	37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,
	7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,
	51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,
	1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,4,3,4,134,8,4,1,4,1,4,3,4,138,
	8,4,1,4,1,4,3,4,142,8,4,1,5,1,5,1,6,4,6,147,8,6,11,6,12,6,148,1,7,1,7,1,
	8,1,8,1,9,1,9,3,9,157,8,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,
	1,14,1,14,1,15,1,15,1,15,1,16,1,16,1,17,1,17,1,18,1,18,1,19,1,19,1,20,1,
	20,4,20,183,8,20,11,20,12,20,184,1,21,1,21,1,22,1,22,1,23,1,23,1,23,1,23,
	1,24,3,24,196,8,24,1,24,1,24,3,24,200,8,24,1,25,1,25,1,26,1,26,1,26,1,26,
	1,27,1,27,1,27,1,27,1,28,1,28,1,29,1,29,1,30,1,30,1,31,1,31,1,32,1,32,1,
	33,1,33,3,33,224,8,33,1,34,3,34,227,8,34,1,34,1,34,1,35,4,35,232,8,35,11,
	35,12,35,233,1,36,3,36,237,8,36,1,36,1,36,1,37,4,37,242,8,37,11,37,12,37,
	243,1,38,1,38,1,39,1,39,1,39,1,39,3,39,252,8,39,1,39,3,39,255,8,39,1,40,
	1,40,1,41,1,41,1,42,1,42,1,43,1,43,1,44,1,44,1,44,1,44,1,45,3,45,270,8,
	45,1,45,1,45,3,45,274,8,45,1,46,4,46,277,8,46,11,46,12,46,278,1,47,3,47,
	282,8,47,1,47,1,47,3,47,286,8,47,1,48,1,48,1,48,1,48,1,49,3,49,293,8,49,
	1,49,1,49,3,49,297,8,49,1,50,3,50,300,8,50,1,50,1,50,3,50,304,8,50,1,51,
	1,51,1,51,1,51,1,52,1,52,1,52,1,52,1,52,1,53,1,53,1,53,1,53,1,54,1,54,1,
	54,1,54,1,55,1,55,1,56,3,56,326,8,56,1,56,1,56,3,56,330,8,56,1,57,1,57,
	1,57,1,57,1,57,1,58,4,58,338,8,58,11,58,12,58,339,0,0,59,4,1,6,2,8,3,10,
	4,12,5,14,6,16,7,18,8,20,9,22,10,24,11,26,12,28,13,30,14,32,15,34,16,36,
	17,38,18,40,19,42,20,44,21,46,22,48,23,50,24,52,25,54,26,56,27,58,28,60,
	0,62,0,64,0,66,0,68,0,70,0,72,0,74,0,76,0,78,0,80,0,82,0,84,29,86,30,88,
	31,90,32,92,33,94,34,96,35,98,36,100,37,102,38,104,39,106,40,108,41,110,
	42,112,43,114,44,116,45,118,46,120,47,4,0,1,2,3,10,1,0,48,57,1,0,97,103,
	1,0,65,71,2,0,88,88,120,120,2,0,10,10,13,13,1,0,13,13,1,0,10,10,2,0,9,9,
	32,32,7,0,35,35,43,43,45,45,47,57,64,90,95,95,97,122,3,0,10,10,13,13,34,
	34,355,0,4,1,0,0,0,0,6,1,0,0,0,0,8,1,0,0,0,0,10,1,0,0,0,0,12,1,0,0,0,0,
	14,1,0,0,0,0,16,1,0,0,0,0,18,1,0,0,0,0,20,1,0,0,0,0,22,1,0,0,0,0,24,1,0,
	0,0,0,26,1,0,0,0,0,28,1,0,0,0,0,30,1,0,0,0,0,32,1,0,0,0,0,34,1,0,0,0,0,
	36,1,0,0,0,0,38,1,0,0,0,0,40,1,0,0,0,0,42,1,0,0,0,0,44,1,0,0,0,0,46,1,0,
	0,0,0,48,1,0,0,0,0,50,1,0,0,0,0,52,1,0,0,0,0,54,1,0,0,0,0,56,1,0,0,0,0,
	58,1,0,0,0,0,84,1,0,0,0,0,86,1,0,0,0,0,88,1,0,0,0,0,90,1,0,0,0,1,92,1,0,
	0,0,1,94,1,0,0,0,1,96,1,0,0,0,1,98,1,0,0,0,1,100,1,0,0,0,1,102,1,0,0,0,
	1,104,1,0,0,0,1,106,1,0,0,0,1,108,1,0,0,0,2,110,1,0,0,0,2,112,1,0,0,0,2,
	114,1,0,0,0,2,116,1,0,0,0,3,118,1,0,0,0,3,120,1,0,0,0,4,122,1,0,0,0,6,124,
	1,0,0,0,8,126,1,0,0,0,10,128,1,0,0,0,12,141,1,0,0,0,14,143,1,0,0,0,16,146,
	1,0,0,0,18,150,1,0,0,0,20,152,1,0,0,0,22,156,1,0,0,0,24,158,1,0,0,0,26,
	160,1,0,0,0,28,162,1,0,0,0,30,164,1,0,0,0,32,166,1,0,0,0,34,169,1,0,0,0,
	36,172,1,0,0,0,38,174,1,0,0,0,40,176,1,0,0,0,42,178,1,0,0,0,44,180,1,0,
	0,0,46,186,1,0,0,0,48,188,1,0,0,0,50,190,1,0,0,0,52,195,1,0,0,0,54,201,
	1,0,0,0,56,203,1,0,0,0,58,207,1,0,0,0,60,211,1,0,0,0,62,213,1,0,0,0,64,
	215,1,0,0,0,66,217,1,0,0,0,68,219,1,0,0,0,70,221,1,0,0,0,72,226,1,0,0,0,
	74,231,1,0,0,0,76,236,1,0,0,0,78,241,1,0,0,0,80,245,1,0,0,0,82,247,1,0,
	0,0,84,256,1,0,0,0,86,258,1,0,0,0,88,260,1,0,0,0,90,262,1,0,0,0,92,264,
	1,0,0,0,94,269,1,0,0,0,96,276,1,0,0,0,98,281,1,0,0,0,100,287,1,0,0,0,102,
	292,1,0,0,0,104,299,1,0,0,0,106,305,1,0,0,0,108,309,1,0,0,0,110,314,1,0,
	0,0,112,318,1,0,0,0,114,322,1,0,0,0,116,325,1,0,0,0,118,331,1,0,0,0,120,
	337,1,0,0,0,122,123,3,84,40,0,123,5,1,0,0,0,124,125,3,86,41,0,125,7,1,0,
	0,0,126,127,3,88,42,0,127,9,1,0,0,0,128,129,3,90,43,0,129,11,1,0,0,0,130,
	142,3,34,15,0,131,142,3,32,14,0,132,134,3,40,18,0,133,132,1,0,0,0,133,134,
	1,0,0,0,134,135,1,0,0,0,135,142,3,36,16,0,136,138,3,40,18,0,137,136,1,0,
	0,0,137,138,1,0,0,0,138,139,1,0,0,0,139,142,3,38,17,0,140,142,3,40,18,0,
	141,130,1,0,0,0,141,131,1,0,0,0,141,133,1,0,0,0,141,137,1,0,0,0,141,140,
	1,0,0,0,142,13,1,0,0,0,143,144,3,60,28,0,144,15,1,0,0,0,145,147,3,18,7,
	0,146,145,1,0,0,0,147,148,1,0,0,0,148,146,1,0,0,0,148,149,1,0,0,0,149,17,
	1,0,0,0,150,151,5,33,0,0,151,19,1,0,0,0,152,153,7,0,0,0,153,21,1,0,0,0,
	154,157,3,26,11,0,155,157,3,24,10,0,156,154,1,0,0,0,156,155,1,0,0,0,157,
	23,1,0,0,0,158,159,7,1,0,0,159,25,1,0,0,0,160,161,7,2,0,0,161,27,1,0,0,
	0,162,163,7,3,0,0,163,29,1,0,0,0,164,165,3,62,29,0,165,31,1,0,0,0,166,167,
	3,36,16,0,167,168,3,36,16,0,168,33,1,0,0,0,169,170,3,38,17,0,170,171,3,
	38,17,0,171,35,1,0,0,0,172,173,5,35,0,0,173,37,1,0,0,0,174,175,5,64,0,0,
	175,39,1,0,0,0,176,177,5,61,0,0,177,41,1,0,0,0,178,179,3,64,30,0,179,43,
	1,0,0,0,180,182,3,64,30,0,181,183,3,64,30,0,182,181,1,0,0,0,183,184,1,0,
	0,0,184,182,1,0,0,0,184,185,1,0,0,0,185,45,1,0,0,0,186,187,3,66,31,0,187,
	47,1,0,0,0,188,189,5,42,0,0,189,49,1,0,0,0,190,191,3,82,39,0,191,192,1,
	0,0,0,192,193,6,23,0,0,193,51,1,0,0,0,194,196,3,54,25,0,195,194,1,0,0,0,
	195,196,1,0,0,0,196,197,1,0,0,0,197,199,3,76,36,0,198,200,3,54,25,0,199,
	198,1,0,0,0,199,200,1,0,0,0,200,53,1,0,0,0,201,202,3,78,37,0,202,55,1,0,
	0,0,203,204,5,123,0,0,204,205,1,0,0,0,205,206,6,26,1,0,206,57,1,0,0,0,207,
	208,3,70,33,0,208,209,1,0,0,0,209,210,6,27,2,0,210,59,1,0,0,0,211,212,5,
	124,0,0,212,61,1,0,0,0,213,214,5,37,0,0,214,63,1,0,0,0,215,216,5,46,0,0,
	216,65,1,0,0,0,217,218,5,95,0,0,218,67,1,0,0,0,219,220,5,34,0,0,220,69,
	1,0,0,0,221,223,3,68,32,0,222,224,3,78,37,0,223,222,1,0,0,0,223,224,1,0,
	0,0,224,71,1,0,0,0,225,227,3,78,37,0,226,225,1,0,0,0,226,227,1,0,0,0,227,
	228,1,0,0,0,228,229,3,68,32,0,229,73,1,0,0,0,230,232,8,4,0,0,231,230,1,
	0,0,0,232,233,1,0,0,0,233,231,1,0,0,0,233,234,1,0,0,0,234,75,1,0,0,0,235,
	237,7,5,0,0,236,235,1,0,0,0,236,237,1,0,0,0,237,238,1,0,0,0,238,239,7,6,
	0,0,239,77,1,0,0,0,240,242,7,7,0,0,241,240,1,0,0,0,242,243,1,0,0,0,243,
	241,1,0,0,0,243,244,1,0,0,0,244,79,1,0,0,0,245,246,5,59,0,0,246,81,1,0,
	0,0,247,248,5,45,0,0,248,249,5,45,0,0,249,251,1,0,0,0,250,252,3,74,35,0,
	251,250,1,0,0,0,251,252,1,0,0,0,252,254,1,0,0,0,253,255,3,76,36,0,254,253,
	1,0,0,0,254,255,1,0,0,0,255,83,1,0,0,0,256,257,5,40,0,0,257,85,1,0,0,0,
	258,259,5,41,0,0,259,87,1,0,0,0,260,261,5,91,0,0,261,89,1,0,0,0,262,263,
	5,93,0,0,263,91,1,0,0,0,264,265,5,125,0,0,265,266,1,0,0,0,266,267,6,44,
	3,0,267,93,1,0,0,0,268,270,3,106,51,0,269,268,1,0,0,0,269,270,1,0,0,0,270,
	271,1,0,0,0,271,273,5,58,0,0,272,274,3,106,51,0,273,272,1,0,0,0,273,274,
	1,0,0,0,274,95,1,0,0,0,275,277,7,8,0,0,276,275,1,0,0,0,277,278,1,0,0,0,
	278,276,1,0,0,0,278,279,1,0,0,0,279,97,1,0,0,0,280,282,3,106,51,0,281,280,
	1,0,0,0,281,282,1,0,0,0,282,283,1,0,0,0,283,285,5,44,0,0,284,286,3,106,
	51,0,285,284,1,0,0,0,285,286,1,0,0,0,286,99,1,0,0,0,287,288,3,82,39,0,288,
	289,1,0,0,0,289,290,6,48,0,0,290,101,1,0,0,0,291,293,3,54,25,0,292,291,
	1,0,0,0,292,293,1,0,0,0,293,294,1,0,0,0,294,296,3,76,36,0,295,297,3,54,
	25,0,296,295,1,0,0,0,296,297,1,0,0,0,297,103,1,0,0,0,298,300,3,54,25,0,
	299,298,1,0,0,0,299,300,1,0,0,0,300,301,1,0,0,0,301,303,3,80,38,0,302,304,
	3,54,25,0,303,302,1,0,0,0,303,304,1,0,0,0,304,105,1,0,0,0,305,306,3,78,
	37,0,306,307,1,0,0,0,307,308,6,51,0,0,308,107,1,0,0,0,309,310,3,70,33,0,
	310,311,1,0,0,0,311,312,6,52,0,0,312,313,6,52,4,0,313,109,1,0,0,0,314,315,
	3,72,34,0,315,316,1,0,0,0,316,317,6,53,3,0,317,111,1,0,0,0,318,319,3,116,
	56,0,319,320,1,0,0,0,320,321,6,54,3,0,321,113,1,0,0,0,322,323,3,120,58,
	0,323,115,1,0,0,0,324,326,3,78,37,0,325,324,1,0,0,0,325,326,1,0,0,0,326,
	327,1,0,0,0,327,329,3,76,36,0,328,330,3,78,37,0,329,328,1,0,0,0,329,330,
	1,0,0,0,330,117,1,0,0,0,331,332,3,72,34,0,332,333,1,0,0,0,333,334,6,57,
	0,0,334,335,6,57,3,0,335,119,1,0,0,0,336,338,8,9,0,0,337,336,1,0,0,0,338,
	339,1,0,0,0,339,337,1,0,0,0,339,340,1,0,0,0,340,121,1,0,0,0,31,0,1,2,3,
	133,137,141,148,156,184,195,199,223,226,233,236,243,251,254,269,273,278,
	281,285,292,296,299,303,325,329,339,5,6,0,0,5,1,0,5,2,0,4,0,0,5,3,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MasciiLexer.__ATN) {
			MasciiLexer.__ATN = new ATNDeserializer().deserialize(MasciiLexer._serializedATN);
		}

		return MasciiLexer.__ATN;
	}


	static DecisionsToDFA = MasciiLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}