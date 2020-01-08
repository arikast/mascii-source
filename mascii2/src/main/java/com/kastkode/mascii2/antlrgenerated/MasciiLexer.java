// Generated from MasciiLexer.g4 by ANTLR 4.7.2
package com.kastkode.mascii2.antlrgenerated;
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class MasciiLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		OPEN_SCOPED=1, CLOSE_SCOPED=2, OPEN_UNSCOPED=3, CLOSE_UNSCOPED=4, ACCIDENTAL=5, 
		STAFF_SEPARATOR=6, PITCH=7, AMPLIFIER=8, ABS_PITCH_RANGE=9, REL_PITCH=10, 
		REL_PITCH_UP=11, REL_PITCH_DOWN=12, REPEAT_ELEMENT=13, REST=14, DBL_SHARP=15, 
		DBL_FLAT=16, SHARP=17, FLAT=18, NATURAL=19, DBL_DOTTED=20, DOTTED=21, 
		TIE=22, NOTE_END_ALL=23, COMMENT=24, NEWLINE=25, SPACE=26, OPEN_META=27, 
		OPEN_LYRICS=28, F_OPEN_SCOPED=29, F_CLOSE_SCOPED=30, F_OPEN_UNSCOPED=31, 
		F_CLOSE_UNSCOPED=32, CLOSE_META=33, HEADER_SEP=34, HEADER_ENTITY=35, HEADER_VAL_SEP=36, 
		M_COMMENT=37, M_NEWLINE=38, M_SPACE=39, CLOSE_LYRICS=40, IMPLICIT_CLOSE_LYRICS=41, 
		LYRICS=42, L_NEWLINE=43;
	public static final int
		METAINFO_MODE=1, LYRICS_MODE=2;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE", "METAINFO_MODE", "LYRICS_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"OPEN_SCOPED", "CLOSE_SCOPED", "OPEN_UNSCOPED", "CLOSE_UNSCOPED", "ACCIDENTAL", 
			"STAFF_SEPARATOR", "PITCH", "AMPLIFIER", "ABS_PITCH_RANGE", "REL_PITCH", 
			"REL_PITCH_UP", "REL_PITCH_DOWN", "REPEAT_ELEMENT", "REST", "DBL_SHARP", 
			"DBL_FLAT", "SHARP", "FLAT", "NATURAL", "DBL_DOTTED", "DOTTED", "TIE", 
			"NOTE_END_ALL", "COMMENT", "NEWLINE", "SPACE", "OPEN_META", "OPEN_LYRICS", 
			"F_STAFF_SEP", "F_REST", "F_DOTTED", "F_TIE", "F_NOT_NEWLINE", "F_NEWLINE", 
			"F_SPACE", "F_COMMENT", "F_OPEN_SCOPED", "F_CLOSE_SCOPED", "F_OPEN_UNSCOPED", 
			"F_CLOSE_UNSCOPED", "CLOSE_META", "HEADER_SEP", "HEADER_ENTITY", "HEADER_VAL_SEP", 
			"M_COMMENT", "M_NEWLINE", "M_SPACE", "CLOSE_LYRICS", "IMPLICIT_CLOSE_LYRICS", 
			"LYRICS", "L_NEWLINE"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, "'!'", null, null, null, 
			null, null, null, null, null, "'#'", "'@'", "'='", null, null, null, 
			"'*'", null, null, null, "'{'", null, "'('", "')'", "'['", "']'", "'}'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "OPEN_SCOPED", "CLOSE_SCOPED", "OPEN_UNSCOPED", "CLOSE_UNSCOPED", 
			"ACCIDENTAL", "STAFF_SEPARATOR", "PITCH", "AMPLIFIER", "ABS_PITCH_RANGE", 
			"REL_PITCH", "REL_PITCH_UP", "REL_PITCH_DOWN", "REPEAT_ELEMENT", "REST", 
			"DBL_SHARP", "DBL_FLAT", "SHARP", "FLAT", "NATURAL", "DBL_DOTTED", "DOTTED", 
			"TIE", "NOTE_END_ALL", "COMMENT", "NEWLINE", "SPACE", "OPEN_META", "OPEN_LYRICS", 
			"F_OPEN_SCOPED", "F_CLOSE_SCOPED", "F_OPEN_UNSCOPED", "F_CLOSE_UNSCOPED", 
			"CLOSE_META", "HEADER_SEP", "HEADER_ENTITY", "HEADER_VAL_SEP", "M_COMMENT", 
			"M_NEWLINE", "M_SPACE", "CLOSE_LYRICS", "IMPLICIT_CLOSE_LYRICS", "LYRICS", 
			"L_NEWLINE"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public MasciiLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "MasciiLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2-\u012d\b\1\b\1\b"+
		"\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n"+
		"\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21"+
		"\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30"+
		"\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37"+
		"\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t"+
		"*\4+\t+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63"+
		"\4\64\t\64\3\2\3\2\3\3\3\3\3\4\3\4\3\5\3\5\3\6\3\6\3\6\5\6w\n\6\3\6\3"+
		"\6\5\6{\n\6\3\6\3\6\5\6\177\n\6\3\7\3\7\3\b\3\b\6\b\u0085\n\b\r\b\16\b"+
		"\u0086\5\b\u0089\n\b\3\b\3\b\5\b\u008d\n\b\3\b\5\b\u0090\n\b\3\t\3\t\3"+
		"\n\3\n\3\13\3\13\5\13\u0098\n\13\3\f\3\f\3\r\3\r\3\16\3\16\3\17\3\17\3"+
		"\20\3\20\3\20\3\21\3\21\3\21\3\22\3\22\3\23\3\23\3\24\3\24\3\25\3\25\3"+
		"\25\3\26\3\26\3\27\3\27\3\30\3\30\3\31\3\31\3\31\3\31\3\32\5\32\u00bc"+
		"\n\32\3\32\3\32\5\32\u00c0\n\32\3\33\3\33\3\34\3\34\3\34\3\34\3\35\3\35"+
		"\3\35\3\35\3\36\3\36\3\37\3\37\3 \3 \3!\3!\3\"\6\"\u00d5\n\"\r\"\16\""+
		"\u00d6\3#\5#\u00da\n#\3#\3#\3$\6$\u00df\n$\r$\16$\u00e0\3%\3%\3%\3%\5"+
		"%\u00e7\n%\3%\5%\u00ea\n%\3&\3&\3\'\3\'\3(\3(\3)\3)\3*\3*\3*\3*\3+\5+"+
		"\u00f9\n+\3+\3+\5+\u00fd\n+\3,\6,\u0100\n,\r,\16,\u0101\3-\5-\u0105\n"+
		"-\3-\3-\5-\u0109\n-\3.\3.\3.\3.\3/\5/\u0110\n/\3/\3/\5/\u0114\n/\3\60"+
		"\3\60\3\60\3\60\3\61\3\61\3\61\3\61\3\62\3\62\3\62\3\62\3\63\6\63\u0123"+
		"\n\63\r\63\16\63\u0124\3\64\5\64\u0128\n\64\3\64\3\64\5\64\u012c\n\64"+
		"\2\2\65\5\3\7\4\t\5\13\6\r\7\17\b\21\t\23\n\25\13\27\f\31\r\33\16\35\17"+
		"\37\20!\21#\22%\23\'\24)\25+\26-\27/\30\61\31\63\32\65\33\67\349\35;\36"+
		"=\2?\2A\2C\2E\2G\2I\2K\2M\37O Q!S\"U#W$Y%[&]\'_(a)c*e+g,i-\5\2\3\4\f\3"+
		"\2\62;\3\2ci\3\2CI\4\2ZZzz\4\2\f\f\17\17\3\2\17\17\3\2\f\f\4\2\13\13\""+
		"\"\t\2%%--//\61;B\\aac|\5\2\f\f\17\17$$\2\u013f\2\5\3\2\2\2\2\7\3\2\2"+
		"\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23"+
		"\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2"+
		"\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2"+
		"\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3"+
		"\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2"+
		"\2\2\2S\3\2\2\2\3U\3\2\2\2\3W\3\2\2\2\3Y\3\2\2\2\3[\3\2\2\2\3]\3\2\2\2"+
		"\3_\3\2\2\2\3a\3\2\2\2\4c\3\2\2\2\4e\3\2\2\2\4g\3\2\2\2\4i\3\2\2\2\5k"+
		"\3\2\2\2\7m\3\2\2\2\to\3\2\2\2\13q\3\2\2\2\r~\3\2\2\2\17\u0080\3\2\2\2"+
		"\21\u008f\3\2\2\2\23\u0091\3\2\2\2\25\u0093\3\2\2\2\27\u0097\3\2\2\2\31"+
		"\u0099\3\2\2\2\33\u009b\3\2\2\2\35\u009d\3\2\2\2\37\u009f\3\2\2\2!\u00a1"+
		"\3\2\2\2#\u00a4\3\2\2\2%\u00a7\3\2\2\2\'\u00a9\3\2\2\2)\u00ab\3\2\2\2"+
		"+\u00ad\3\2\2\2-\u00b0\3\2\2\2/\u00b2\3\2\2\2\61\u00b4\3\2\2\2\63\u00b6"+
		"\3\2\2\2\65\u00bb\3\2\2\2\67\u00c1\3\2\2\29\u00c3\3\2\2\2;\u00c7\3\2\2"+
		"\2=\u00cb\3\2\2\2?\u00cd\3\2\2\2A\u00cf\3\2\2\2C\u00d1\3\2\2\2E\u00d4"+
		"\3\2\2\2G\u00d9\3\2\2\2I\u00de\3\2\2\2K\u00e2\3\2\2\2M\u00eb\3\2\2\2O"+
		"\u00ed\3\2\2\2Q\u00ef\3\2\2\2S\u00f1\3\2\2\2U\u00f3\3\2\2\2W\u00f8\3\2"+
		"\2\2Y\u00ff\3\2\2\2[\u0104\3\2\2\2]\u010a\3\2\2\2_\u010f\3\2\2\2a\u0115"+
		"\3\2\2\2c\u0119\3\2\2\2e\u011d\3\2\2\2g\u0122\3\2\2\2i\u0127\3\2\2\2k"+
		"l\5M&\2l\6\3\2\2\2mn\5O\'\2n\b\3\2\2\2op\5Q(\2p\n\3\2\2\2qr\5S)\2r\f\3"+
		"\2\2\2s\177\5#\21\2t\177\5!\20\2uw\5)\24\2vu\3\2\2\2vw\3\2\2\2wx\3\2\2"+
		"\2x\177\5%\22\2y{\5)\24\2zy\3\2\2\2z{\3\2\2\2{|\3\2\2\2|\177\5\'\23\2"+
		"}\177\5)\24\2~s\3\2\2\2~t\3\2\2\2~v\3\2\2\2~z\3\2\2\2~}\3\2\2\2\177\16"+
		"\3\2\2\2\u0080\u0081\5=\36\2\u0081\20\3\2\2\2\u0082\u0089\5\25\n\2\u0083"+
		"\u0085\5\23\t\2\u0084\u0083\3\2\2\2\u0085\u0086\3\2\2\2\u0086\u0084\3"+
		"\2\2\2\u0086\u0087\3\2\2\2\u0087\u0089\3\2\2\2\u0088\u0082\3\2\2\2\u0088"+
		"\u0084\3\2\2\2\u0088\u0089\3\2\2\2\u0089\u008a\3\2\2\2\u008a\u008c\5\27"+
		"\13\2\u008b\u008d\5\r\6\2\u008c\u008b\3\2\2\2\u008c\u008d\3\2\2\2\u008d"+
		"\u0090\3\2\2\2\u008e\u0090\5\35\16\2\u008f\u0088\3\2\2\2\u008f\u008e\3"+
		"\2\2\2\u0090\22\3\2\2\2\u0091\u0092\7#\2\2\u0092\24\3\2\2\2\u0093\u0094"+
		"\t\2\2\2\u0094\26\3\2\2\2\u0095\u0098\5\33\r\2\u0096\u0098\5\31\f\2\u0097"+
		"\u0095\3\2\2\2\u0097\u0096\3\2\2\2\u0098\30\3\2\2\2\u0099\u009a\t\3\2"+
		"\2\u009a\32\3\2\2\2\u009b\u009c\t\4\2\2\u009c\34\3\2\2\2\u009d\u009e\t"+
		"\5\2\2\u009e\36\3\2\2\2\u009f\u00a0\5?\37\2\u00a0 \3\2\2\2\u00a1\u00a2"+
		"\5%\22\2\u00a2\u00a3\5%\22\2\u00a3\"\3\2\2\2\u00a4\u00a5\5\'\23\2\u00a5"+
		"\u00a6\5\'\23\2\u00a6$\3\2\2\2\u00a7\u00a8\7%\2\2\u00a8&\3\2\2\2\u00a9"+
		"\u00aa\7B\2\2\u00aa(\3\2\2\2\u00ab\u00ac\7?\2\2\u00ac*\3\2\2\2\u00ad\u00ae"+
		"\5-\26\2\u00ae\u00af\5-\26\2\u00af,\3\2\2\2\u00b0\u00b1\5A \2\u00b1.\3"+
		"\2\2\2\u00b2\u00b3\5C!\2\u00b3\60\3\2\2\2\u00b4\u00b5\7,\2\2\u00b5\62"+
		"\3\2\2\2\u00b6\u00b7\5K%\2\u00b7\u00b8\3\2\2\2\u00b8\u00b9\b\31\2\2\u00b9"+
		"\64\3\2\2\2\u00ba\u00bc\5\67\33\2\u00bb\u00ba\3\2\2\2\u00bb\u00bc\3\2"+
		"\2\2\u00bc\u00bd\3\2\2\2\u00bd\u00bf\5G#\2\u00be\u00c0\5\67\33\2\u00bf"+
		"\u00be\3\2\2\2\u00bf\u00c0\3\2\2\2\u00c0\66\3\2\2\2\u00c1\u00c2\5I$\2"+
		"\u00c28\3\2\2\2\u00c3\u00c4\7}\2\2\u00c4\u00c5\3\2\2\2\u00c5\u00c6\b\34"+
		"\3\2\u00c6:\3\2\2\2\u00c7\u00c8\7$\2\2\u00c8\u00c9\3\2\2\2\u00c9\u00ca"+
		"\b\35\4\2\u00ca<\3\2\2\2\u00cb\u00cc\7~\2\2\u00cc>\3\2\2\2\u00cd\u00ce"+
		"\7\'\2\2\u00ce@\3\2\2\2\u00cf\u00d0\7\60\2\2\u00d0B\3\2\2\2\u00d1\u00d2"+
		"\7a\2\2\u00d2D\3\2\2\2\u00d3\u00d5\n\6\2\2\u00d4\u00d3\3\2\2\2\u00d5\u00d6"+
		"\3\2\2\2\u00d6\u00d4\3\2\2\2\u00d6\u00d7\3\2\2\2\u00d7F\3\2\2\2\u00d8"+
		"\u00da\t\7\2\2\u00d9\u00d8\3\2\2\2\u00d9\u00da\3\2\2\2\u00da\u00db\3\2"+
		"\2\2\u00db\u00dc\t\b\2\2\u00dcH\3\2\2\2\u00dd\u00df\t\t\2\2\u00de\u00dd"+
		"\3\2\2\2\u00df\u00e0\3\2\2\2\u00e0\u00de\3\2\2\2\u00e0\u00e1\3\2\2\2\u00e1"+
		"J\3\2\2\2\u00e2\u00e3\7/\2\2\u00e3\u00e4\7/\2\2\u00e4\u00e6\3\2\2\2\u00e5"+
		"\u00e7\5E\"\2\u00e6\u00e5\3\2\2\2\u00e6\u00e7\3\2\2\2\u00e7\u00e9\3\2"+
		"\2\2\u00e8\u00ea\5G#\2\u00e9\u00e8\3\2\2\2\u00e9\u00ea\3\2\2\2\u00eaL"+
		"\3\2\2\2\u00eb\u00ec\7*\2\2\u00ecN\3\2\2\2\u00ed\u00ee\7+\2\2\u00eeP\3"+
		"\2\2\2\u00ef\u00f0\7]\2\2\u00f0R\3\2\2\2\u00f1\u00f2\7_\2\2\u00f2T\3\2"+
		"\2\2\u00f3\u00f4\7\177\2\2\u00f4\u00f5\3\2\2\2\u00f5\u00f6\b*\5\2\u00f6"+
		"V\3\2\2\2\u00f7\u00f9\5a\60\2\u00f8\u00f7\3\2\2\2\u00f8\u00f9\3\2\2\2"+
		"\u00f9\u00fa\3\2\2\2\u00fa\u00fc\7<\2\2\u00fb\u00fd\5a\60\2\u00fc\u00fb"+
		"\3\2\2\2\u00fc\u00fd\3\2\2\2\u00fdX\3\2\2\2\u00fe\u0100\t\n\2\2\u00ff"+
		"\u00fe\3\2\2\2\u0100\u0101\3\2\2\2\u0101\u00ff\3\2\2\2\u0101\u0102\3\2"+
		"\2\2\u0102Z\3\2\2\2\u0103\u0105\5a\60\2\u0104\u0103\3\2\2\2\u0104\u0105"+
		"\3\2\2\2\u0105\u0106\3\2\2\2\u0106\u0108\7.\2\2\u0107\u0109\5a\60\2\u0108"+
		"\u0107\3\2\2\2\u0108\u0109\3\2\2\2\u0109\\\3\2\2\2\u010a\u010b\5K%\2\u010b"+
		"\u010c\3\2\2\2\u010c\u010d\b.\2\2\u010d^\3\2\2\2\u010e\u0110\5\67\33\2"+
		"\u010f\u010e\3\2\2\2\u010f\u0110\3\2\2\2\u0110\u0111\3\2\2\2\u0111\u0113"+
		"\5G#\2\u0112\u0114\5\67\33\2\u0113\u0112\3\2\2\2\u0113\u0114\3\2\2\2\u0114"+
		"`\3\2\2\2\u0115\u0116\5I$\2\u0116\u0117\3\2\2\2\u0117\u0118\b\60\2\2\u0118"+
		"b\3\2\2\2\u0119\u011a\7$\2\2\u011a\u011b\3\2\2\2\u011b\u011c\b\61\5\2"+
		"\u011cd\3\2\2\2\u011d\u011e\5i\64\2\u011e\u011f\3\2\2\2\u011f\u0120\b"+
		"\62\5\2\u0120f\3\2\2\2\u0121\u0123\n\13\2\2\u0122\u0121\3\2\2\2\u0123"+
		"\u0124\3\2\2\2\u0124\u0122\3\2\2\2\u0124\u0125\3\2\2\2\u0125h\3\2\2\2"+
		"\u0126\u0128\5I$\2\u0127\u0126\3\2\2\2\u0127\u0128\3\2\2\2\u0128\u0129"+
		"\3\2\2\2\u0129\u012b\5G#\2\u012a\u012c\5I$\2\u012b\u012a\3\2\2\2\u012b"+
		"\u012c\3\2\2\2\u012cj\3\2\2\2\36\2\3\4vz~\u0086\u0088\u008c\u008f\u0097"+
		"\u00bb\u00bf\u00d6\u00d9\u00e0\u00e6\u00e9\u00f8\u00fc\u0101\u0104\u0108"+
		"\u010f\u0113\u0124\u0127\u012b\6\b\2\2\7\3\2\7\4\2\6\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}