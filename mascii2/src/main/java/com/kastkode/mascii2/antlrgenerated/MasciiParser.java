// Generated from MasciiParser.g4 by ANTLR 4.7.2
package com.kastkode.mascii2.antlrgenerated;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class MasciiParser extends Parser {
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
		RULE_music = 0, RULE_metainfo = 1, RULE_headers = 2, RULE_header = 3, 
		RULE_header_name = 4, RULE_header_values = 5, RULE_bars = 6, RULE_concurrent_block = 7, 
		RULE_staves_n_lyricsrow = 8, RULE_stavesrow = 9, RULE_stavesrow_first_notempty = 10, 
		RULE_stavesrow_first_empty = 11, RULE_staff = 12, RULE_empty_staff = 13, 
		RULE_timed_elements = 14, RULE_timed_element = 15, RULE_duration_doubled = 16, 
		RULE_group = 17, RULE_scoped_group = 18, RULE_unscoped_group = 19, RULE_notes = 20, 
		RULE_notes_start = 21, RULE_note_start = 22, RULE_note_tie = 23, RULE_notes_end = 24, 
		RULE_note_end_one = 25, RULE_note_end_all = 26, RULE_newline = 27, RULE_lyrics_row = 28;
	private static String[] makeRuleNames() {
		return new String[] {
			"music", "metainfo", "headers", "header", "header_name", "header_values", 
			"bars", "concurrent_block", "staves_n_lyricsrow", "stavesrow", "stavesrow_first_notempty", 
			"stavesrow_first_empty", "staff", "empty_staff", "timed_elements", "timed_element", 
			"duration_doubled", "group", "scoped_group", "unscoped_group", "notes", 
			"notes_start", "note_start", "note_tie", "notes_end", "note_end_one", 
			"note_end_all", "newline", "lyrics_row"
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

	@Override
	public String getGrammarFileName() { return "MasciiParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public MasciiParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class MusicContext extends ParserRuleContext {
		public BarsContext bars() {
			return getRuleContext(BarsContext.class,0);
		}
		public TerminalNode EOF() { return getToken(MasciiParser.EOF, 0); }
		public List<TerminalNode> SPACE() { return getTokens(MasciiParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(MasciiParser.SPACE, i);
		}
		public List<NewlineContext> newline() {
			return getRuleContexts(NewlineContext.class);
		}
		public NewlineContext newline(int i) {
			return getRuleContext(NewlineContext.class,i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(MasciiParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(MasciiParser.NEWLINE, i);
		}
		public MusicContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_music; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).enterMusic(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).exitMusic(this);
		}
	}

	public final MusicContext music() throws RecognitionException {
		MusicContext _localctx = new MusicContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_music);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(61);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(58);
					_la = _input.LA(1);
					if ( !(_la==NEWLINE || _la==SPACE) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
					} 
				}
				setState(63);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			}
			setState(64);
			bars();
			setState(69);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NEWLINE) | (1L << SPACE) | (1L << IMPLICIT_CLOSE_LYRICS))) != 0)) {
				{
				setState(67);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case SPACE:
					{
					setState(65);
					match(SPACE);
					}
					break;
				case NEWLINE:
				case IMPLICIT_CLOSE_LYRICS:
					{
					setState(66);
					newline();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(71);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(72);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MetainfoContext extends ParserRuleContext {
		public TerminalNode OPEN_META() { return getToken(MasciiParser.OPEN_META, 0); }
		public HeadersContext headers() {
			return getRuleContext(HeadersContext.class,0);
		}
		public TerminalNode CLOSE_META() { return getToken(MasciiParser.CLOSE_META, 0); }
		public List<TerminalNode> M_NEWLINE() { return getTokens(MasciiParser.M_NEWLINE); }
		public TerminalNode M_NEWLINE(int i) {
			return getToken(MasciiParser.M_NEWLINE, i);
		}
		public List<TerminalNode> SPACE() { return getTokens(MasciiParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(MasciiParser.SPACE, i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(MasciiParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(MasciiParser.NEWLINE, i);
		}
		public MetainfoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_metainfo; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).enterMetainfo(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).exitMetainfo(this);
		}
	}

	public final MetainfoContext metainfo() throws RecognitionException {
		MetainfoContext _localctx = new MetainfoContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_metainfo);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(77);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NEWLINE || _la==SPACE) {
				{
				{
				setState(74);
				_la = _input.LA(1);
				if ( !(_la==NEWLINE || _la==SPACE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				setState(79);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(80);
			match(OPEN_META);
			setState(84);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==M_NEWLINE) {
				{
				{
				setState(81);
				match(M_NEWLINE);
				}
				}
				setState(86);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(87);
			headers();
			setState(91);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==M_NEWLINE) {
				{
				{
				setState(88);
				match(M_NEWLINE);
				}
				}
				setState(93);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(94);
			match(CLOSE_META);
			setState(98);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(95);
					_la = _input.LA(1);
					if ( !(_la==NEWLINE || _la==SPACE) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
					} 
				}
				setState(100);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class HeadersContext extends ParserRuleContext {
		public List<HeaderContext> header() {
			return getRuleContexts(HeaderContext.class);
		}
		public HeaderContext header(int i) {
			return getRuleContext(HeaderContext.class,i);
		}
		public List<TerminalNode> M_NEWLINE() { return getTokens(MasciiParser.M_NEWLINE); }
		public TerminalNode M_NEWLINE(int i) {
			return getToken(MasciiParser.M_NEWLINE, i);
		}
		public HeadersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_headers; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).enterHeaders(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).exitHeaders(this);
		}
	}

	public final HeadersContext headers() throws RecognitionException {
		HeadersContext _localctx = new HeadersContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_headers);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(101);
			header();
			setState(110);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(103); 
					_errHandler.sync(this);
					_la = _input.LA(1);
					do {
						{
						{
						setState(102);
						match(M_NEWLINE);
						}
						}
						setState(105); 
						_errHandler.sync(this);
						_la = _input.LA(1);
					} while ( _la==M_NEWLINE );
					setState(107);
					header();
					}
					} 
				}
				setState(112);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class HeaderContext extends ParserRuleContext {
		public Header_nameContext header_name() {
			return getRuleContext(Header_nameContext.class,0);
		}
		public TerminalNode HEADER_SEP() { return getToken(MasciiParser.HEADER_SEP, 0); }
		public Header_valuesContext header_values() {
			return getRuleContext(Header_valuesContext.class,0);
		}
		public HeaderContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_header; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).enterHeader(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).exitHeader(this);
		}
	}

	public final HeaderContext header() throws RecognitionException {
		HeaderContext _localctx = new HeaderContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_header);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(113);
			header_name();
			setState(114);
			match(HEADER_SEP);
			setState(115);
			header_values();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Header_nameContext extends ParserRuleContext {
		public TerminalNode HEADER_ENTITY() { return getToken(MasciiParser.HEADER_ENTITY, 0); }
		public Header_nameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_header_name; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).enterHeader_name(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).exitHeader_name(this);
		}
	}

	public final Header_nameContext header_name() throws RecognitionException {
		Header_nameContext _localctx = new Header_nameContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_header_name);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(117);
			match(HEADER_ENTITY);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Header_valuesContext extends ParserRuleContext {
		public List<TerminalNode> HEADER_ENTITY() { return getTokens(MasciiParser.HEADER_ENTITY); }
		public TerminalNode HEADER_ENTITY(int i) {
			return getToken(MasciiParser.HEADER_ENTITY, i);
		}
		public List<TerminalNode> HEADER_VAL_SEP() { return getTokens(MasciiParser.HEADER_VAL_SEP); }
		public TerminalNode HEADER_VAL_SEP(int i) {
			return getToken(MasciiParser.HEADER_VAL_SEP, i);
		}
		public Header_valuesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_header_values; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).enterHeader_values(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).exitHeader_values(this);
		}
	}

	public final Header_valuesContext header_values() throws RecognitionException {
		Header_valuesContext _localctx = new Header_valuesContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_header_values);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(120);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==HEADER_ENTITY) {
				{
				setState(119);
				match(HEADER_ENTITY);
				}
			}

			setState(128);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==HEADER_VAL_SEP) {
				{
				{
				setState(122);
				match(HEADER_VAL_SEP);
				setState(124);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==HEADER_ENTITY) {
					{
					setState(123);
					match(HEADER_ENTITY);
					}
				}

				}
				}
				setState(130);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BarsContext extends ParserRuleContext {
		public List<Concurrent_blockContext> concurrent_block() {
			return getRuleContexts(Concurrent_blockContext.class);
		}
		public Concurrent_blockContext concurrent_block(int i) {
			return getRuleContext(Concurrent_blockContext.class,i);
		}
		public List<NewlineContext> newline() {
			return getRuleContexts(NewlineContext.class);
		}
		public NewlineContext newline(int i) {
			return getRuleContext(NewlineContext.class,i);
		}
		public BarsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bars; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).enterBars(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).exitBars(this);
		}
	}

	public final BarsContext bars() throws RecognitionException {
		BarsContext _localctx = new BarsContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_bars);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(131);
			concurrent_block();
			setState(142);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(132);
					newline();
					setState(134); 
					_errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							setState(133);
							newline();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						setState(136); 
						_errHandler.sync(this);
						_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
					} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
					setState(138);
					concurrent_block();
					}
					} 
				}
				setState(144);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Concurrent_blockContext extends ParserRuleContext {
		public List<Staves_n_lyricsrowContext> staves_n_lyricsrow() {
			return getRuleContexts(Staves_n_lyricsrowContext.class);
		}
		public Staves_n_lyricsrowContext staves_n_lyricsrow(int i) {
			return getRuleContext(Staves_n_lyricsrowContext.class,i);
		}
		public MetainfoContext metainfo() {
			return getRuleContext(MetainfoContext.class,0);
		}
		public List<NewlineContext> newline() {
			return getRuleContexts(NewlineContext.class);
		}
		public NewlineContext newline(int i) {
			return getRuleContext(NewlineContext.class,i);
		}
		public Concurrent_blockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_concurrent_block; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).enterConcurrent_block(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).exitConcurrent_block(this);
		}
	}

	public final Concurrent_blockContext concurrent_block() throws RecognitionException {
		Concurrent_blockContext _localctx = new Concurrent_blockContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_concurrent_block);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(146);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
			case 1:
				{
				setState(145);
				metainfo();
				}
				break;
			}
			setState(148);
			staves_n_lyricsrow();
			setState(154);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(149);
					newline();
					setState(150);
					staves_n_lyricsrow();
					}
					} 
				}
				setState(156);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Staves_n_lyricsrowContext extends ParserRuleContext {
		public StavesrowContext stavesrow() {
			return getRuleContext(StavesrowContext.class,0);
		}
		public List<NewlineContext> newline() {
			return getRuleContexts(NewlineContext.class);
		}
		public NewlineContext newline(int i) {
			return getRuleContext(NewlineContext.class,i);
		}
		public List<Lyrics_rowContext> lyrics_row() {
			return getRuleContexts(Lyrics_rowContext.class);
		}
		public Lyrics_rowContext lyrics_row(int i) {
			return getRuleContext(Lyrics_rowContext.class,i);
		}
		public Staves_n_lyricsrowContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_staves_n_lyricsrow; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).enterStaves_n_lyricsrow(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).exitStaves_n_lyricsrow(this);
		}
	}

	public final Staves_n_lyricsrowContext staves_n_lyricsrow() throws RecognitionException {
		Staves_n_lyricsrowContext _localctx = new Staves_n_lyricsrowContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_staves_n_lyricsrow);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(157);
			stavesrow();
			setState(163);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(158);
					newline();
					setState(159);
					lyrics_row();
					}
					} 
				}
				setState(165);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StavesrowContext extends ParserRuleContext {
		public Stavesrow_first_notemptyContext stavesrow_first_notempty() {
			return getRuleContext(Stavesrow_first_notemptyContext.class,0);
		}
		public Stavesrow_first_emptyContext stavesrow_first_empty() {
			return getRuleContext(Stavesrow_first_emptyContext.class,0);
		}
		public StavesrowContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stavesrow; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).enterStavesrow(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).exitStavesrow(this);
		}
	}

	public final StavesrowContext stavesrow() throws RecognitionException {
		StavesrowContext _localctx = new StavesrowContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_stavesrow);
		try {
			setState(168);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(166);
				stavesrow_first_notempty();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(167);
				stavesrow_first_empty();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Stavesrow_first_notemptyContext extends ParserRuleContext {
		public List<StaffContext> staff() {
			return getRuleContexts(StaffContext.class);
		}
		public StaffContext staff(int i) {
			return getRuleContext(StaffContext.class,i);
		}
		public List<TerminalNode> STAFF_SEPARATOR() { return getTokens(MasciiParser.STAFF_SEPARATOR); }
		public TerminalNode STAFF_SEPARATOR(int i) {
			return getToken(MasciiParser.STAFF_SEPARATOR, i);
		}
		public List<Empty_staffContext> empty_staff() {
			return getRuleContexts(Empty_staffContext.class);
		}
		public Empty_staffContext empty_staff(int i) {
			return getRuleContext(Empty_staffContext.class,i);
		}
		public Stavesrow_first_notemptyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stavesrow_first_notempty; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).enterStavesrow_first_notempty(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).exitStavesrow_first_notempty(this);
		}
	}

	public final Stavesrow_first_notemptyContext stavesrow_first_notempty() throws RecognitionException {
		Stavesrow_first_notemptyContext _localctx = new Stavesrow_first_notemptyContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_stavesrow_first_notempty);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(170);
			staff();
			setState(178);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==STAFF_SEPARATOR) {
				{
				{
				setState(171);
				match(STAFF_SEPARATOR);
				setState(174);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,18,_ctx) ) {
				case 1:
					{
					setState(172);
					staff();
					}
					break;
				case 2:
					{
					setState(173);
					empty_staff();
					}
					break;
				}
				}
				}
				setState(180);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Stavesrow_first_emptyContext extends ParserRuleContext {
		public List<Empty_staffContext> empty_staff() {
			return getRuleContexts(Empty_staffContext.class);
		}
		public Empty_staffContext empty_staff(int i) {
			return getRuleContext(Empty_staffContext.class,i);
		}
		public List<TerminalNode> STAFF_SEPARATOR() { return getTokens(MasciiParser.STAFF_SEPARATOR); }
		public TerminalNode STAFF_SEPARATOR(int i) {
			return getToken(MasciiParser.STAFF_SEPARATOR, i);
		}
		public List<StaffContext> staff() {
			return getRuleContexts(StaffContext.class);
		}
		public StaffContext staff(int i) {
			return getRuleContext(StaffContext.class,i);
		}
		public Stavesrow_first_emptyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stavesrow_first_empty; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).enterStavesrow_first_empty(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).exitStavesrow_first_empty(this);
		}
	}

	public final Stavesrow_first_emptyContext stavesrow_first_empty() throws RecognitionException {
		Stavesrow_first_emptyContext _localctx = new Stavesrow_first_emptyContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_stavesrow_first_empty);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(181);
			empty_staff();
			setState(187); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(182);
				match(STAFF_SEPARATOR);
				setState(185);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
				case 1:
					{
					setState(183);
					staff();
					}
					break;
				case 2:
					{
					setState(184);
					empty_staff();
					}
					break;
				}
				}
				}
				setState(189); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==STAFF_SEPARATOR );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StaffContext extends ParserRuleContext {
		public Timed_elementsContext timed_elements() {
			return getRuleContext(Timed_elementsContext.class,0);
		}
		public StaffContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_staff; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).enterStaff(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).exitStaff(this);
		}
	}

	public final StaffContext staff() throws RecognitionException {
		StaffContext _localctx = new StaffContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_staff);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(191);
			timed_elements();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Empty_staffContext extends ParserRuleContext {
		public TerminalNode SPACE() { return getToken(MasciiParser.SPACE, 0); }
		public Empty_staffContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_empty_staff; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).enterEmpty_staff(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).exitEmpty_staff(this);
		}
	}

	public final Empty_staffContext empty_staff() throws RecognitionException {
		Empty_staffContext _localctx = new Empty_staffContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_empty_staff);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(194);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
			case 1:
				{
				setState(193);
				match(SPACE);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Timed_elementsContext extends ParserRuleContext {
		public List<Timed_elementContext> timed_element() {
			return getRuleContexts(Timed_elementContext.class);
		}
		public Timed_elementContext timed_element(int i) {
			return getRuleContext(Timed_elementContext.class,i);
		}
		public List<TerminalNode> SPACE() { return getTokens(MasciiParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(MasciiParser.SPACE, i);
		}
		public Timed_elementsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_timed_elements; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).enterTimed_elements(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).exitTimed_elements(this);
		}
	}

	public final Timed_elementsContext timed_elements() throws RecognitionException {
		Timed_elementsContext _localctx = new Timed_elementsContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_timed_elements);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(197);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SPACE) {
				{
				setState(196);
				match(SPACE);
				}
			}

			setState(199);
			timed_element();
			setState(204);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,24,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(200);
					match(SPACE);
					setState(201);
					timed_element();
					}
					} 
				}
				setState(206);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,24,_ctx);
			}
			setState(208);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,25,_ctx) ) {
			case 1:
				{
				setState(207);
				match(SPACE);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Timed_elementContext extends ParserRuleContext {
		public Token inverse_dot;
		public Token normal_dot;
		public TerminalNode REST() { return getToken(MasciiParser.REST, 0); }
		public Duration_doubledContext duration_doubled() {
			return getRuleContext(Duration_doubledContext.class,0);
		}
		public List<TerminalNode> DBL_DOTTED() { return getTokens(MasciiParser.DBL_DOTTED); }
		public TerminalNode DBL_DOTTED(int i) {
			return getToken(MasciiParser.DBL_DOTTED, i);
		}
		public List<TerminalNode> DOTTED() { return getTokens(MasciiParser.DOTTED); }
		public TerminalNode DOTTED(int i) {
			return getToken(MasciiParser.DOTTED, i);
		}
		public List<NotesContext> notes() {
			return getRuleContexts(NotesContext.class);
		}
		public NotesContext notes(int i) {
			return getRuleContext(NotesContext.class,i);
		}
		public List<GroupContext> group() {
			return getRuleContexts(GroupContext.class);
		}
		public GroupContext group(int i) {
			return getRuleContext(GroupContext.class,i);
		}
		public Timed_elementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_timed_element; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).enterTimed_element(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).exitTimed_element(this);
		}
	}

	public final Timed_elementContext timed_element() throws RecognitionException {
		Timed_elementContext _localctx = new Timed_elementContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_timed_element);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(211);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DBL_DOTTED || _la==DOTTED) {
				{
				setState(210);
				((Timed_elementContext)_localctx).inverse_dot = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==DBL_DOTTED || _la==DOTTED) ) {
					((Timed_elementContext)_localctx).inverse_dot = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(220);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OPEN_SCOPED:
			case OPEN_UNSCOPED:
			case PITCH:
			case TIE:
				{
				setState(215); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						setState(215);
						_errHandler.sync(this);
						switch (_input.LA(1)) {
						case PITCH:
						case TIE:
							{
							setState(213);
							notes();
							}
							break;
						case OPEN_SCOPED:
						case OPEN_UNSCOPED:
							{
							setState(214);
							group();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(217); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,28,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				break;
			case REST:
				{
				setState(219);
				match(REST);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(223);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==TIE) {
				{
				setState(222);
				duration_doubled();
				}
			}

			setState(226);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DBL_DOTTED || _la==DOTTED) {
				{
				setState(225);
				((Timed_elementContext)_localctx).normal_dot = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==DBL_DOTTED || _la==DOTTED) ) {
					((Timed_elementContext)_localctx).normal_dot = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Duration_doubledContext extends ParserRuleContext {
		public List<TerminalNode> TIE() { return getTokens(MasciiParser.TIE); }
		public TerminalNode TIE(int i) {
			return getToken(MasciiParser.TIE, i);
		}
		public Duration_doubledContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_duration_doubled; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).enterDuration_doubled(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).exitDuration_doubled(this);
		}
	}

	public final Duration_doubledContext duration_doubled() throws RecognitionException {
		Duration_doubledContext _localctx = new Duration_doubledContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_duration_doubled);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(228);
			match(TIE);
			setState(230); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(229);
				match(TIE);
				}
				}
				setState(232); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==TIE );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GroupContext extends ParserRuleContext {
		public Unscoped_groupContext unscoped_group() {
			return getRuleContext(Unscoped_groupContext.class,0);
		}
		public Scoped_groupContext scoped_group() {
			return getRuleContext(Scoped_groupContext.class,0);
		}
		public GroupContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_group; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).enterGroup(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).exitGroup(this);
		}
	}

	public final GroupContext group() throws RecognitionException {
		GroupContext _localctx = new GroupContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_group);
		try {
			setState(236);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OPEN_UNSCOPED:
				enterOuterAlt(_localctx, 1);
				{
				setState(234);
				unscoped_group();
				}
				break;
			case OPEN_SCOPED:
				enterOuterAlt(_localctx, 2);
				{
				setState(235);
				scoped_group();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Scoped_groupContext extends ParserRuleContext {
		public TerminalNode OPEN_SCOPED() { return getToken(MasciiParser.OPEN_SCOPED, 0); }
		public Timed_elementsContext timed_elements() {
			return getRuleContext(Timed_elementsContext.class,0);
		}
		public TerminalNode CLOSE_SCOPED() { return getToken(MasciiParser.CLOSE_SCOPED, 0); }
		public Scoped_groupContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_scoped_group; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).enterScoped_group(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).exitScoped_group(this);
		}
	}

	public final Scoped_groupContext scoped_group() throws RecognitionException {
		Scoped_groupContext _localctx = new Scoped_groupContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_scoped_group);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(238);
			match(OPEN_SCOPED);
			setState(239);
			timed_elements();
			setState(240);
			match(CLOSE_SCOPED);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Unscoped_groupContext extends ParserRuleContext {
		public TerminalNode OPEN_UNSCOPED() { return getToken(MasciiParser.OPEN_UNSCOPED, 0); }
		public Timed_elementsContext timed_elements() {
			return getRuleContext(Timed_elementsContext.class,0);
		}
		public TerminalNode CLOSE_UNSCOPED() { return getToken(MasciiParser.CLOSE_UNSCOPED, 0); }
		public Unscoped_groupContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unscoped_group; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).enterUnscoped_group(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).exitUnscoped_group(this);
		}
	}

	public final Unscoped_groupContext unscoped_group() throws RecognitionException {
		Unscoped_groupContext _localctx = new Unscoped_groupContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_unscoped_group);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(242);
			match(OPEN_UNSCOPED);
			setState(243);
			timed_elements();
			setState(244);
			match(CLOSE_UNSCOPED);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NotesContext extends ParserRuleContext {
		public Notes_endContext notes_end() {
			return getRuleContext(Notes_endContext.class,0);
		}
		public Notes_startContext notes_start() {
			return getRuleContext(Notes_startContext.class,0);
		}
		public NotesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_notes; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).enterNotes(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).exitNotes(this);
		}
	}

	public final NotesContext notes() throws RecognitionException {
		NotesContext _localctx = new NotesContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_notes);
		try {
			setState(251);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,34,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(246);
				notes_end();
				setState(247);
				notes_start();
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(249);
				notes_end();
				}
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				{
				setState(250);
				notes_start();
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Notes_startContext extends ParserRuleContext {
		public List<Note_startContext> note_start() {
			return getRuleContexts(Note_startContext.class);
		}
		public Note_startContext note_start(int i) {
			return getRuleContext(Note_startContext.class,i);
		}
		public Notes_startContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_notes_start; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).enterNotes_start(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).exitNotes_start(this);
		}
	}

	public final Notes_startContext notes_start() throws RecognitionException {
		Notes_startContext _localctx = new Notes_startContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_notes_start);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(254); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(253);
					note_start();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(256); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,35,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Note_startContext extends ParserRuleContext {
		public TerminalNode PITCH() { return getToken(MasciiParser.PITCH, 0); }
		public Note_tieContext note_tie() {
			return getRuleContext(Note_tieContext.class,0);
		}
		public Note_startContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_note_start; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).enterNote_start(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).exitNote_start(this);
		}
	}

	public final Note_startContext note_start() throws RecognitionException {
		Note_startContext _localctx = new Note_startContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_note_start);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(258);
			match(PITCH);
			setState(260);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,36,_ctx) ) {
			case 1:
				{
				setState(259);
				note_tie();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Note_tieContext extends ParserRuleContext {
		public TerminalNode TIE() { return getToken(MasciiParser.TIE, 0); }
		public Note_tieContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_note_tie; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).enterNote_tie(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).exitNote_tie(this);
		}
	}

	public final Note_tieContext note_tie() throws RecognitionException {
		Note_tieContext _localctx = new Note_tieContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_note_tie);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(262);
			match(TIE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Notes_endContext extends ParserRuleContext {
		public Note_end_allContext note_end_all() {
			return getRuleContext(Note_end_allContext.class,0);
		}
		public List<Note_end_oneContext> note_end_one() {
			return getRuleContexts(Note_end_oneContext.class);
		}
		public Note_end_oneContext note_end_one(int i) {
			return getRuleContext(Note_end_oneContext.class,i);
		}
		public Notes_endContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_notes_end; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).enterNotes_end(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).exitNotes_end(this);
		}
	}

	public final Notes_endContext notes_end() throws RecognitionException {
		Notes_endContext _localctx = new Notes_endContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_notes_end);
		try {
			int _alt;
			setState(270);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,38,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(264);
				note_end_all();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(266); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(265);
						note_end_one();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(268); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,37,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Note_end_oneContext extends ParserRuleContext {
		public TerminalNode TIE() { return getToken(MasciiParser.TIE, 0); }
		public TerminalNode PITCH() { return getToken(MasciiParser.PITCH, 0); }
		public Note_end_oneContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_note_end_one; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).enterNote_end_one(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).exitNote_end_one(this);
		}
	}

	public final Note_end_oneContext note_end_one() throws RecognitionException {
		Note_end_oneContext _localctx = new Note_end_oneContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_note_end_one);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(272);
			match(TIE);
			setState(273);
			match(PITCH);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Note_end_allContext extends ParserRuleContext {
		public TerminalNode TIE() { return getToken(MasciiParser.TIE, 0); }
		public TerminalNode NOTE_END_ALL() { return getToken(MasciiParser.NOTE_END_ALL, 0); }
		public Note_end_allContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_note_end_all; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).enterNote_end_all(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).exitNote_end_all(this);
		}
	}

	public final Note_end_allContext note_end_all() throws RecognitionException {
		Note_end_allContext _localctx = new Note_end_allContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_note_end_all);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(275);
			match(TIE);
			setState(276);
			match(NOTE_END_ALL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NewlineContext extends ParserRuleContext {
		public TerminalNode NEWLINE() { return getToken(MasciiParser.NEWLINE, 0); }
		public TerminalNode IMPLICIT_CLOSE_LYRICS() { return getToken(MasciiParser.IMPLICIT_CLOSE_LYRICS, 0); }
		public NewlineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_newline; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).enterNewline(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).exitNewline(this);
		}
	}

	public final NewlineContext newline() throws RecognitionException {
		NewlineContext _localctx = new NewlineContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_newline);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(278);
			_la = _input.LA(1);
			if ( !(_la==NEWLINE || _la==IMPLICIT_CLOSE_LYRICS) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Lyrics_rowContext extends ParserRuleContext {
		public TerminalNode OPEN_LYRICS() { return getToken(MasciiParser.OPEN_LYRICS, 0); }
		public TerminalNode LYRICS() { return getToken(MasciiParser.LYRICS, 0); }
		public TerminalNode CLOSE_LYRICS() { return getToken(MasciiParser.CLOSE_LYRICS, 0); }
		public Lyrics_rowContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lyrics_row; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).enterLyrics_row(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MasciiParserListener ) ((MasciiParserListener)listener).exitLyrics_row(this);
		}
	}

	public final Lyrics_rowContext lyrics_row() throws RecognitionException {
		Lyrics_rowContext _localctx = new Lyrics_rowContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_lyrics_row);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(280);
			match(OPEN_LYRICS);
			setState(281);
			match(LYRICS);
			setState(283);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CLOSE_LYRICS) {
				{
				setState(282);
				match(CLOSE_LYRICS);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3-\u0120\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\3\2\7\2>\n\2\f\2\16"+
		"\2A\13\2\3\2\3\2\3\2\7\2F\n\2\f\2\16\2I\13\2\3\2\3\2\3\3\7\3N\n\3\f\3"+
		"\16\3Q\13\3\3\3\3\3\7\3U\n\3\f\3\16\3X\13\3\3\3\3\3\7\3\\\n\3\f\3\16\3"+
		"_\13\3\3\3\3\3\7\3c\n\3\f\3\16\3f\13\3\3\4\3\4\6\4j\n\4\r\4\16\4k\3\4"+
		"\7\4o\n\4\f\4\16\4r\13\4\3\5\3\5\3\5\3\5\3\6\3\6\3\7\5\7{\n\7\3\7\3\7"+
		"\5\7\177\n\7\7\7\u0081\n\7\f\7\16\7\u0084\13\7\3\b\3\b\3\b\6\b\u0089\n"+
		"\b\r\b\16\b\u008a\3\b\3\b\7\b\u008f\n\b\f\b\16\b\u0092\13\b\3\t\5\t\u0095"+
		"\n\t\3\t\3\t\3\t\3\t\7\t\u009b\n\t\f\t\16\t\u009e\13\t\3\n\3\n\3\n\3\n"+
		"\7\n\u00a4\n\n\f\n\16\n\u00a7\13\n\3\13\3\13\5\13\u00ab\n\13\3\f\3\f\3"+
		"\f\3\f\5\f\u00b1\n\f\7\f\u00b3\n\f\f\f\16\f\u00b6\13\f\3\r\3\r\3\r\3\r"+
		"\5\r\u00bc\n\r\6\r\u00be\n\r\r\r\16\r\u00bf\3\16\3\16\3\17\5\17\u00c5"+
		"\n\17\3\20\5\20\u00c8\n\20\3\20\3\20\3\20\7\20\u00cd\n\20\f\20\16\20\u00d0"+
		"\13\20\3\20\5\20\u00d3\n\20\3\21\5\21\u00d6\n\21\3\21\3\21\6\21\u00da"+
		"\n\21\r\21\16\21\u00db\3\21\5\21\u00df\n\21\3\21\5\21\u00e2\n\21\3\21"+
		"\5\21\u00e5\n\21\3\22\3\22\6\22\u00e9\n\22\r\22\16\22\u00ea\3\23\3\23"+
		"\5\23\u00ef\n\23\3\24\3\24\3\24\3\24\3\25\3\25\3\25\3\25\3\26\3\26\3\26"+
		"\3\26\3\26\5\26\u00fe\n\26\3\27\6\27\u0101\n\27\r\27\16\27\u0102\3\30"+
		"\3\30\5\30\u0107\n\30\3\31\3\31\3\32\3\32\6\32\u010d\n\32\r\32\16\32\u010e"+
		"\5\32\u0111\n\32\3\33\3\33\3\33\3\34\3\34\3\34\3\35\3\35\3\36\3\36\3\36"+
		"\5\36\u011e\n\36\3\36\2\2\37\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \""+
		"$&(*,.\60\62\64\668:\2\5\3\2\33\34\3\2\26\27\4\2\33\33++\2\u012b\2?\3"+
		"\2\2\2\4O\3\2\2\2\6g\3\2\2\2\bs\3\2\2\2\nw\3\2\2\2\fz\3\2\2\2\16\u0085"+
		"\3\2\2\2\20\u0094\3\2\2\2\22\u009f\3\2\2\2\24\u00aa\3\2\2\2\26\u00ac\3"+
		"\2\2\2\30\u00b7\3\2\2\2\32\u00c1\3\2\2\2\34\u00c4\3\2\2\2\36\u00c7\3\2"+
		"\2\2 \u00d5\3\2\2\2\"\u00e6\3\2\2\2$\u00ee\3\2\2\2&\u00f0\3\2\2\2(\u00f4"+
		"\3\2\2\2*\u00fd\3\2\2\2,\u0100\3\2\2\2.\u0104\3\2\2\2\60\u0108\3\2\2\2"+
		"\62\u0110\3\2\2\2\64\u0112\3\2\2\2\66\u0115\3\2\2\28\u0118\3\2\2\2:\u011a"+
		"\3\2\2\2<>\t\2\2\2=<\3\2\2\2>A\3\2\2\2?=\3\2\2\2?@\3\2\2\2@B\3\2\2\2A"+
		"?\3\2\2\2BG\5\16\b\2CF\7\34\2\2DF\58\35\2EC\3\2\2\2ED\3\2\2\2FI\3\2\2"+
		"\2GE\3\2\2\2GH\3\2\2\2HJ\3\2\2\2IG\3\2\2\2JK\7\2\2\3K\3\3\2\2\2LN\t\2"+
		"\2\2ML\3\2\2\2NQ\3\2\2\2OM\3\2\2\2OP\3\2\2\2PR\3\2\2\2QO\3\2\2\2RV\7\35"+
		"\2\2SU\7(\2\2TS\3\2\2\2UX\3\2\2\2VT\3\2\2\2VW\3\2\2\2WY\3\2\2\2XV\3\2"+
		"\2\2Y]\5\6\4\2Z\\\7(\2\2[Z\3\2\2\2\\_\3\2\2\2][\3\2\2\2]^\3\2\2\2^`\3"+
		"\2\2\2_]\3\2\2\2`d\7#\2\2ac\t\2\2\2ba\3\2\2\2cf\3\2\2\2db\3\2\2\2de\3"+
		"\2\2\2e\5\3\2\2\2fd\3\2\2\2gp\5\b\5\2hj\7(\2\2ih\3\2\2\2jk\3\2\2\2ki\3"+
		"\2\2\2kl\3\2\2\2lm\3\2\2\2mo\5\b\5\2ni\3\2\2\2or\3\2\2\2pn\3\2\2\2pq\3"+
		"\2\2\2q\7\3\2\2\2rp\3\2\2\2st\5\n\6\2tu\7$\2\2uv\5\f\7\2v\t\3\2\2\2wx"+
		"\7%\2\2x\13\3\2\2\2y{\7%\2\2zy\3\2\2\2z{\3\2\2\2{\u0082\3\2\2\2|~\7&\2"+
		"\2}\177\7%\2\2~}\3\2\2\2~\177\3\2\2\2\177\u0081\3\2\2\2\u0080|\3\2\2\2"+
		"\u0081\u0084\3\2\2\2\u0082\u0080\3\2\2\2\u0082\u0083\3\2\2\2\u0083\r\3"+
		"\2\2\2\u0084\u0082\3\2\2\2\u0085\u0090\5\20\t\2\u0086\u0088\58\35\2\u0087"+
		"\u0089\58\35\2\u0088\u0087\3\2\2\2\u0089\u008a\3\2\2\2\u008a\u0088\3\2"+
		"\2\2\u008a\u008b\3\2\2\2\u008b\u008c\3\2\2\2\u008c\u008d\5\20\t\2\u008d"+
		"\u008f\3\2\2\2\u008e\u0086\3\2\2\2\u008f\u0092\3\2\2\2\u0090\u008e\3\2"+
		"\2\2\u0090\u0091\3\2\2\2\u0091\17\3\2\2\2\u0092\u0090\3\2\2\2\u0093\u0095"+
		"\5\4\3\2\u0094\u0093\3\2\2\2\u0094\u0095\3\2\2\2\u0095\u0096\3\2\2\2\u0096"+
		"\u009c\5\22\n\2\u0097\u0098\58\35\2\u0098\u0099\5\22\n\2\u0099\u009b\3"+
		"\2\2\2\u009a\u0097\3\2\2\2\u009b\u009e\3\2\2\2\u009c\u009a\3\2\2\2\u009c"+
		"\u009d\3\2\2\2\u009d\21\3\2\2\2\u009e\u009c\3\2\2\2\u009f\u00a5\5\24\13"+
		"\2\u00a0\u00a1\58\35\2\u00a1\u00a2\5:\36\2\u00a2\u00a4\3\2\2\2\u00a3\u00a0"+
		"\3\2\2\2\u00a4\u00a7\3\2\2\2\u00a5\u00a3\3\2\2\2\u00a5\u00a6\3\2\2\2\u00a6"+
		"\23\3\2\2\2\u00a7\u00a5\3\2\2\2\u00a8\u00ab\5\26\f\2\u00a9\u00ab\5\30"+
		"\r\2\u00aa\u00a8\3\2\2\2\u00aa\u00a9\3\2\2\2\u00ab\25\3\2\2\2\u00ac\u00b4"+
		"\5\32\16\2\u00ad\u00b0\7\b\2\2\u00ae\u00b1\5\32\16\2\u00af\u00b1\5\34"+
		"\17\2\u00b0\u00ae\3\2\2\2\u00b0\u00af\3\2\2\2\u00b1\u00b3\3\2\2\2\u00b2"+
		"\u00ad\3\2\2\2\u00b3\u00b6\3\2\2\2\u00b4\u00b2\3\2\2\2\u00b4\u00b5\3\2"+
		"\2\2\u00b5\27\3\2\2\2\u00b6\u00b4\3\2\2\2\u00b7\u00bd\5\34\17\2\u00b8"+
		"\u00bb\7\b\2\2\u00b9\u00bc\5\32\16\2\u00ba\u00bc\5\34\17\2\u00bb\u00b9"+
		"\3\2\2\2\u00bb\u00ba\3\2\2\2\u00bc\u00be\3\2\2\2\u00bd\u00b8\3\2\2\2\u00be"+
		"\u00bf\3\2\2\2\u00bf\u00bd\3\2\2\2\u00bf\u00c0\3\2\2\2\u00c0\31\3\2\2"+
		"\2\u00c1\u00c2\5\36\20\2\u00c2\33\3\2\2\2\u00c3\u00c5\7\34\2\2\u00c4\u00c3"+
		"\3\2\2\2\u00c4\u00c5\3\2\2\2\u00c5\35\3\2\2\2\u00c6\u00c8\7\34\2\2\u00c7"+
		"\u00c6\3\2\2\2\u00c7\u00c8\3\2\2\2\u00c8\u00c9\3\2\2\2\u00c9\u00ce\5 "+
		"\21\2\u00ca\u00cb\7\34\2\2\u00cb\u00cd\5 \21\2\u00cc\u00ca\3\2\2\2\u00cd"+
		"\u00d0\3\2\2\2\u00ce\u00cc\3\2\2\2\u00ce\u00cf\3\2\2\2\u00cf\u00d2\3\2"+
		"\2\2\u00d0\u00ce\3\2\2\2\u00d1\u00d3\7\34\2\2\u00d2\u00d1\3\2\2\2\u00d2"+
		"\u00d3\3\2\2\2\u00d3\37\3\2\2\2\u00d4\u00d6\t\3\2\2\u00d5\u00d4\3\2\2"+
		"\2\u00d5\u00d6\3\2\2\2\u00d6\u00de\3\2\2\2\u00d7\u00da\5*\26\2\u00d8\u00da"+
		"\5$\23\2\u00d9\u00d7\3\2\2\2\u00d9\u00d8\3\2\2\2\u00da\u00db\3\2\2\2\u00db"+
		"\u00d9\3\2\2\2\u00db\u00dc\3\2\2\2\u00dc\u00df\3\2\2\2\u00dd\u00df\7\20"+
		"\2\2\u00de\u00d9\3\2\2\2\u00de\u00dd\3\2\2\2\u00df\u00e1\3\2\2\2\u00e0"+
		"\u00e2\5\"\22\2\u00e1\u00e0\3\2\2\2\u00e1\u00e2\3\2\2\2\u00e2\u00e4\3"+
		"\2\2\2\u00e3\u00e5\t\3\2\2\u00e4\u00e3\3\2\2\2\u00e4\u00e5\3\2\2\2\u00e5"+
		"!\3\2\2\2\u00e6\u00e8\7\30\2\2\u00e7\u00e9\7\30\2\2\u00e8\u00e7\3\2\2"+
		"\2\u00e9\u00ea\3\2\2\2\u00ea\u00e8\3\2\2\2\u00ea\u00eb\3\2\2\2\u00eb#"+
		"\3\2\2\2\u00ec\u00ef\5(\25\2\u00ed\u00ef\5&\24\2\u00ee\u00ec\3\2\2\2\u00ee"+
		"\u00ed\3\2\2\2\u00ef%\3\2\2\2\u00f0\u00f1\7\3\2\2\u00f1\u00f2\5\36\20"+
		"\2\u00f2\u00f3\7\4\2\2\u00f3\'\3\2\2\2\u00f4\u00f5\7\5\2\2\u00f5\u00f6"+
		"\5\36\20\2\u00f6\u00f7\7\6\2\2\u00f7)\3\2\2\2\u00f8\u00f9\5\62\32\2\u00f9"+
		"\u00fa\5,\27\2\u00fa\u00fe\3\2\2\2\u00fb\u00fe\5\62\32\2\u00fc\u00fe\5"+
		",\27\2\u00fd\u00f8\3\2\2\2\u00fd\u00fb\3\2\2\2\u00fd\u00fc\3\2\2\2\u00fe"+
		"+\3\2\2\2\u00ff\u0101\5.\30\2\u0100\u00ff\3\2\2\2\u0101\u0102\3\2\2\2"+
		"\u0102\u0100\3\2\2\2\u0102\u0103\3\2\2\2\u0103-\3\2\2\2\u0104\u0106\7"+
		"\t\2\2\u0105\u0107\5\60\31\2\u0106\u0105\3\2\2\2\u0106\u0107\3\2\2\2\u0107"+
		"/\3\2\2\2\u0108\u0109\7\30\2\2\u0109\61\3\2\2\2\u010a\u0111\5\66\34\2"+
		"\u010b\u010d\5\64\33\2\u010c\u010b\3\2\2\2\u010d\u010e\3\2\2\2\u010e\u010c"+
		"\3\2\2\2\u010e\u010f\3\2\2\2\u010f\u0111\3\2\2\2\u0110\u010a\3\2\2\2\u0110"+
		"\u010c\3\2\2\2\u0111\63\3\2\2\2\u0112\u0113\7\30\2\2\u0113\u0114\7\t\2"+
		"\2\u0114\65\3\2\2\2\u0115\u0116\7\30\2\2\u0116\u0117\7\31\2\2\u0117\67"+
		"\3\2\2\2\u0118\u0119\t\4\2\2\u01199\3\2\2\2\u011a\u011b\7\36\2\2\u011b"+
		"\u011d\7,\2\2\u011c\u011e\7*\2\2\u011d\u011c\3\2\2\2\u011d\u011e\3\2\2"+
		"\2\u011e;\3\2\2\2*?EGOV]dkpz~\u0082\u008a\u0090\u0094\u009c\u00a5\u00aa"+
		"\u00b0\u00b4\u00bb\u00bf\u00c4\u00c7\u00ce\u00d2\u00d5\u00d9\u00db\u00de"+
		"\u00e1\u00e4\u00ea\u00ee\u00fd\u0102\u0106\u010e\u0110\u011d";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}