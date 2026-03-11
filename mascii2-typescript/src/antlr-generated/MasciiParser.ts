// Generated from MasciiParser.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import MasciiParserListener from "./MasciiParserListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class MasciiParser extends Parser {
	public static readonly OPEN_SCOPED = 1;
	public static readonly CLOSE_SCOPED = 2;
	public static readonly OPEN_UNSCOPED = 3;
	public static readonly CLOSE_UNSCOPED = 4;
	public static readonly ACCIDENTAL = 5;
	public static readonly STAFF_SEPARATOR = 6;
	public static readonly PITCH = 7;
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
	public static readonly DBL_DOTTED = 20;
	public static readonly DOTTED = 21;
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
	public static readonly CLOSE_LYRICS = 41;
	public static readonly IMPLICIT_CLOSE_LYRICS = 42;
	public static readonly LYRICS = 43;
	public static readonly L_NEWLINE = 44;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_music = 0;
	public static readonly RULE_metainfo = 1;
	public static readonly RULE_headers = 2;
	public static readonly RULE_header_delim = 3;
	public static readonly RULE_header = 4;
	public static readonly RULE_header_name = 5;
	public static readonly RULE_header_values = 6;
	public static readonly RULE_bars = 7;
	public static readonly RULE_concurrent_block = 8;
	public static readonly RULE_staves_n_lyricsrow = 9;
	public static readonly RULE_stavesrow = 10;
	public static readonly RULE_stavesrow_first_notempty = 11;
	public static readonly RULE_stavesrow_first_empty = 12;
	public static readonly RULE_staff = 13;
	public static readonly RULE_empty_staff = 14;
	public static readonly RULE_timed_elements = 15;
	public static readonly RULE_timed_element = 16;
	public static readonly RULE_duration_doubled = 17;
	public static readonly RULE_group = 18;
	public static readonly RULE_scoped_group = 19;
	public static readonly RULE_unscoped_group = 20;
	public static readonly RULE_notes = 21;
	public static readonly RULE_notes_start = 22;
	public static readonly RULE_note_start = 23;
	public static readonly RULE_note_tie = 24;
	public static readonly RULE_notes_end = 25;
	public static readonly RULE_note_end_one = 26;
	public static readonly RULE_note_end_all = 27;
	public static readonly RULE_newline = 28;
	public static readonly RULE_lyrics_row = 29;
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
                                                             "PITCH", "AMPLIFIER", 
                                                             "ABS_PITCH_RANGE", 
                                                             "REL_PITCH", 
                                                             "REL_PITCH_UP", 
                                                             "REL_PITCH_DOWN", 
                                                             "REPEAT_ELEMENT", 
                                                             "REST", "DBL_SHARP", 
                                                             "DBL_FLAT", 
                                                             "SHARP", "FLAT", 
                                                             "NATURAL", 
                                                             "DBL_DOTTED", 
                                                             "DOTTED", "TIE", 
                                                             "NOTE_END_ALL", 
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
                                                             "CLOSE_LYRICS", 
                                                             "IMPLICIT_CLOSE_LYRICS", 
                                                             "LYRICS", "L_NEWLINE" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"music", "metainfo", "headers", "header_delim", "header", "header_name", 
		"header_values", "bars", "concurrent_block", "staves_n_lyricsrow", "stavesrow", 
		"stavesrow_first_notempty", "stavesrow_first_empty", "staff", "empty_staff", 
		"timed_elements", "timed_element", "duration_doubled", "group", "scoped_group", 
		"unscoped_group", "notes", "notes_start", "note_start", "note_tie", "notes_end", 
		"note_end_one", "note_end_all", "newline", "lyrics_row",
	];
	public get grammarFileName(): string { return "MasciiParser.g4"; }
	public get literalNames(): (string | null)[] { return MasciiParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return MasciiParser.symbolicNames; }
	public get ruleNames(): string[] { return MasciiParser.ruleNames; }
	public get serializedATN(): number[] { return MasciiParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, MasciiParser._ATN, MasciiParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public music(): MusicContext {
		let localctx: MusicContext = new MusicContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, MasciiParser.RULE_music);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 63;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 60;
					_la = this._input.LA(1);
					if(!(_la===25 || _la===26)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
				}
				this.state = 65;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 66;
			this.bars();
			this.state = 71;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 131075) !== 0)) {
				{
				this.state = 69;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 26:
					{
					this.state = 67;
					this.match(MasciiParser.SPACE);
					}
					break;
				case 25:
				case 42:
					{
					this.state = 68;
					this.newline();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 73;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 74;
			this.match(MasciiParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public metainfo(): MetainfoContext {
		let localctx: MetainfoContext = new MetainfoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, MasciiParser.RULE_metainfo);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25 || _la===26) {
				{
				{
				this.state = 76;
				_la = this._input.LA(1);
				if(!(_la===25 || _la===26)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				}
				this.state = 81;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 82;
			this.match(MasciiParser.OPEN_META);
			this.state = 86;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===38) {
				{
				{
				this.state = 83;
				this.match(MasciiParser.M_NEWLINE);
				}
				}
				this.state = 88;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 89;
			this.headers();
			this.state = 93;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===38) {
				{
				{
				this.state = 90;
				this.match(MasciiParser.M_NEWLINE);
				}
				}
				this.state = 95;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 96;
			this.match(MasciiParser.CLOSE_META);
			this.state = 100;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 97;
					_la = this._input.LA(1);
					if(!(_la===25 || _la===26)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
				}
				this.state = 102;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public headers(): HeadersContext {
		let localctx: HeadersContext = new HeadersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, MasciiParser.RULE_headers);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 103;
			this.header();
			this.state = 113;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 105;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 104;
						this.header_delim();
						}
						}
						this.state = 107;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la===38 || _la===39);
					this.state = 109;
					this.header();
					}
					}
				}
				this.state = 115;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
			}
			this.state = 117;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 116;
				this.header_delim();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public header_delim(): Header_delimContext {
		let localctx: Header_delimContext = new Header_delimContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, MasciiParser.RULE_header_delim);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 119;
			_la = this._input.LA(1);
			if(!(_la===38 || _la===39)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public header(): HeaderContext {
		let localctx: HeaderContext = new HeaderContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, MasciiParser.RULE_header);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 121;
			this.header_name();
			this.state = 122;
			this.match(MasciiParser.HEADER_NAME_VAL_SEP);
			this.state = 123;
			this.header_values();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public header_name(): Header_nameContext {
		let localctx: Header_nameContext = new Header_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, MasciiParser.RULE_header_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 125;
			this.match(MasciiParser.HEADER_ENTITY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public header_values(): Header_valuesContext {
		let localctx: Header_valuesContext = new Header_valuesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, MasciiParser.RULE_header_values);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 128;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===35) {
				{
				this.state = 127;
				this.match(MasciiParser.HEADER_ENTITY);
				}
			}

			this.state = 136;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===36) {
				{
				{
				this.state = 130;
				this.match(MasciiParser.HEADER_VAL_SEP);
				this.state = 132;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===35) {
					{
					this.state = 131;
					this.match(MasciiParser.HEADER_ENTITY);
					}
				}

				}
				}
				this.state = 138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public bars(): BarsContext {
		let localctx: BarsContext = new BarsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, MasciiParser.RULE_bars);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 139;
			this.concurrent_block();
			this.state = 150;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 140;
					this.newline();
					this.state = 142;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 141;
							this.newline();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 144;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					this.state = 146;
					this.concurrent_block();
					}
					}
				}
				this.state = 152;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public concurrent_block(): Concurrent_blockContext {
		let localctx: Concurrent_blockContext = new Concurrent_blockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, MasciiParser.RULE_concurrent_block);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 154;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 153;
				this.metainfo();
				}
				break;
			}
			this.state = 156;
			this.staves_n_lyricsrow();
			this.state = 162;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 157;
					this.newline();
					this.state = 158;
					this.staves_n_lyricsrow();
					}
					}
				}
				this.state = 164;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 16, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public staves_n_lyricsrow(): Staves_n_lyricsrowContext {
		let localctx: Staves_n_lyricsrowContext = new Staves_n_lyricsrowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, MasciiParser.RULE_staves_n_lyricsrow);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 165;
			this.stavesrow();
			this.state = 171;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 166;
					this.newline();
					this.state = 167;
					this.lyrics_row();
					}
					}
				}
				this.state = 173;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stavesrow(): StavesrowContext {
		let localctx: StavesrowContext = new StavesrowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, MasciiParser.RULE_stavesrow);
		try {
			this.state = 176;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 174;
				this.stavesrow_first_notempty();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 175;
				this.stavesrow_first_empty();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stavesrow_first_notempty(): Stavesrow_first_notemptyContext {
		let localctx: Stavesrow_first_notemptyContext = new Stavesrow_first_notemptyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, MasciiParser.RULE_stavesrow_first_notempty);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 178;
			this.staff();
			this.state = 186;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===6) {
				{
				{
				this.state = 179;
				this.match(MasciiParser.STAFF_SEPARATOR);
				this.state = 182;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
				case 1:
					{
					this.state = 180;
					this.staff();
					}
					break;
				case 2:
					{
					this.state = 181;
					this.empty_staff();
					}
					break;
				}
				}
				}
				this.state = 188;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stavesrow_first_empty(): Stavesrow_first_emptyContext {
		let localctx: Stavesrow_first_emptyContext = new Stavesrow_first_emptyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, MasciiParser.RULE_stavesrow_first_empty);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 189;
			this.empty_staff();
			this.state = 195;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 190;
				this.match(MasciiParser.STAFF_SEPARATOR);
				this.state = 193;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 191;
					this.staff();
					}
					break;
				case 2:
					{
					this.state = 192;
					this.empty_staff();
					}
					break;
				}
				}
				}
				this.state = 197;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public staff(): StaffContext {
		let localctx: StaffContext = new StaffContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, MasciiParser.RULE_staff);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 199;
			this.timed_elements();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public empty_staff(): Empty_staffContext {
		let localctx: Empty_staffContext = new Empty_staffContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, MasciiParser.RULE_empty_staff);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 202;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				{
				this.state = 201;
				this.match(MasciiParser.SPACE);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public timed_elements(): Timed_elementsContext {
		let localctx: Timed_elementsContext = new Timed_elementsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, MasciiParser.RULE_timed_elements);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26) {
				{
				this.state = 204;
				this.match(MasciiParser.SPACE);
				}
			}

			this.state = 207;
			this.timed_element();
			this.state = 212;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 208;
					this.match(MasciiParser.SPACE);
					this.state = 209;
					this.timed_element();
					}
					}
				}
				this.state = 214;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 25, this._ctx);
			}
			this.state = 216;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 215;
				this.match(MasciiParser.SPACE);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public timed_element(): Timed_elementContext {
		let localctx: Timed_elementContext = new Timed_elementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, MasciiParser.RULE_timed_element);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 219;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===20 || _la===21) {
				{
				this.state = 218;
				localctx._inverse_dot = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===20 || _la===21)) {
				    localctx._inverse_dot = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 228;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 3:
			case 7:
			case 22:
				{
				this.state = 223;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						this.state = 223;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case 7:
						case 22:
							{
							this.state = 221;
							this.notes();
							}
							break;
						case 1:
						case 3:
							{
							this.state = 222;
							this.group();
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
					this.state = 225;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 29, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 14:
				{
				this.state = 227;
				this.match(MasciiParser.REST);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 231;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===22) {
				{
				this.state = 230;
				this.duration_doubled();
				}
			}

			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===20 || _la===21) {
				{
				this.state = 233;
				localctx._normal_dot = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===20 || _la===21)) {
				    localctx._normal_dot = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public duration_doubled(): Duration_doubledContext {
		let localctx: Duration_doubledContext = new Duration_doubledContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, MasciiParser.RULE_duration_doubled);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 236;
			this.match(MasciiParser.TIE);
			this.state = 238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 237;
				this.match(MasciiParser.TIE);
				}
				}
				this.state = 240;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===22);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public group(): GroupContext {
		let localctx: GroupContext = new GroupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, MasciiParser.RULE_group);
		try {
			this.state = 244;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 242;
				this.unscoped_group();
				}
				break;
			case 1:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 243;
				this.scoped_group();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public scoped_group(): Scoped_groupContext {
		let localctx: Scoped_groupContext = new Scoped_groupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, MasciiParser.RULE_scoped_group);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 246;
			this.match(MasciiParser.OPEN_SCOPED);
			this.state = 247;
			this.timed_elements();
			this.state = 248;
			this.match(MasciiParser.CLOSE_SCOPED);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unscoped_group(): Unscoped_groupContext {
		let localctx: Unscoped_groupContext = new Unscoped_groupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, MasciiParser.RULE_unscoped_group);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 250;
			this.match(MasciiParser.OPEN_UNSCOPED);
			this.state = 251;
			this.timed_elements();
			this.state = 252;
			this.match(MasciiParser.CLOSE_UNSCOPED);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public notes(): NotesContext {
		let localctx: NotesContext = new NotesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, MasciiParser.RULE_notes);
		try {
			this.state = 259;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 254;
				this.notes_end();
				this.state = 255;
				this.notes_start();
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 257;
				this.notes_end();
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				{
				this.state = 258;
				this.notes_start();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public notes_start(): Notes_startContext {
		let localctx: Notes_startContext = new Notes_startContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, MasciiParser.RULE_notes_start);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 262;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 261;
					this.note_start();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 264;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 36, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public note_start(): Note_startContext {
		let localctx: Note_startContext = new Note_startContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, MasciiParser.RULE_note_start);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 266;
			this.match(MasciiParser.PITCH);
			this.state = 268;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				{
				this.state = 267;
				this.note_tie();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public note_tie(): Note_tieContext {
		let localctx: Note_tieContext = new Note_tieContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, MasciiParser.RULE_note_tie);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 270;
			this.match(MasciiParser.TIE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public notes_end(): Notes_endContext {
		let localctx: Notes_endContext = new Notes_endContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, MasciiParser.RULE_notes_end);
		try {
			let _alt: number;
			this.state = 278;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 272;
				this.note_end_all();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 274;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 273;
						this.note_end_one();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 276;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 38, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public note_end_one(): Note_end_oneContext {
		let localctx: Note_end_oneContext = new Note_end_oneContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, MasciiParser.RULE_note_end_one);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 280;
			this.match(MasciiParser.TIE);
			this.state = 281;
			this.match(MasciiParser.PITCH);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public note_end_all(): Note_end_allContext {
		let localctx: Note_end_allContext = new Note_end_allContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, MasciiParser.RULE_note_end_all);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 283;
			this.match(MasciiParser.TIE);
			this.state = 284;
			this.match(MasciiParser.NOTE_END_ALL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public newline(): NewlineContext {
		let localctx: NewlineContext = new NewlineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, MasciiParser.RULE_newline);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 286;
			_la = this._input.LA(1);
			if(!(_la===25 || _la===42)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lyrics_row(): Lyrics_rowContext {
		let localctx: Lyrics_rowContext = new Lyrics_rowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, MasciiParser.RULE_lyrics_row);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 288;
			this.match(MasciiParser.OPEN_LYRICS);
			this.state = 289;
			this.match(MasciiParser.LYRICS);
			this.state = 291;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===41) {
				{
				this.state = 290;
				this.match(MasciiParser.CLOSE_LYRICS);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,44,294,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,1,0,5,0,62,8,0,10,
	0,12,0,65,9,0,1,0,1,0,1,0,5,0,70,8,0,10,0,12,0,73,9,0,1,0,1,0,1,1,5,1,78,
	8,1,10,1,12,1,81,9,1,1,1,1,1,5,1,85,8,1,10,1,12,1,88,9,1,1,1,1,1,5,1,92,
	8,1,10,1,12,1,95,9,1,1,1,1,1,5,1,99,8,1,10,1,12,1,102,9,1,1,2,1,2,4,2,106,
	8,2,11,2,12,2,107,1,2,1,2,5,2,112,8,2,10,2,12,2,115,9,2,1,2,3,2,118,8,2,
	1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,6,3,6,129,8,6,1,6,1,6,3,6,133,8,6,5,6,
	135,8,6,10,6,12,6,138,9,6,1,7,1,7,1,7,4,7,143,8,7,11,7,12,7,144,1,7,1,7,
	5,7,149,8,7,10,7,12,7,152,9,7,1,8,3,8,155,8,8,1,8,1,8,1,8,1,8,5,8,161,8,
	8,10,8,12,8,164,9,8,1,9,1,9,1,9,1,9,5,9,170,8,9,10,9,12,9,173,9,9,1,10,
	1,10,3,10,177,8,10,1,11,1,11,1,11,1,11,3,11,183,8,11,5,11,185,8,11,10,11,
	12,11,188,9,11,1,12,1,12,1,12,1,12,3,12,194,8,12,4,12,196,8,12,11,12,12,
	12,197,1,13,1,13,1,14,3,14,203,8,14,1,15,3,15,206,8,15,1,15,1,15,1,15,5,
	15,211,8,15,10,15,12,15,214,9,15,1,15,3,15,217,8,15,1,16,3,16,220,8,16,
	1,16,1,16,4,16,224,8,16,11,16,12,16,225,1,16,3,16,229,8,16,1,16,3,16,232,
	8,16,1,16,3,16,235,8,16,1,17,1,17,4,17,239,8,17,11,17,12,17,240,1,18,1,
	18,3,18,245,8,18,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,21,1,21,1,21,
	1,21,1,21,3,21,260,8,21,1,22,4,22,263,8,22,11,22,12,22,264,1,23,1,23,3,
	23,269,8,23,1,24,1,24,1,25,1,25,4,25,275,8,25,11,25,12,25,276,3,25,279,
	8,25,1,26,1,26,1,26,1,27,1,27,1,27,1,28,1,28,1,29,1,29,1,29,3,29,292,8,
	29,1,29,0,0,30,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,
	42,44,46,48,50,52,54,56,58,0,4,1,0,25,26,1,0,38,39,1,0,20,21,2,0,25,25,
	42,42,305,0,63,1,0,0,0,2,79,1,0,0,0,4,103,1,0,0,0,6,119,1,0,0,0,8,121,1,
	0,0,0,10,125,1,0,0,0,12,128,1,0,0,0,14,139,1,0,0,0,16,154,1,0,0,0,18,165,
	1,0,0,0,20,176,1,0,0,0,22,178,1,0,0,0,24,189,1,0,0,0,26,199,1,0,0,0,28,
	202,1,0,0,0,30,205,1,0,0,0,32,219,1,0,0,0,34,236,1,0,0,0,36,244,1,0,0,0,
	38,246,1,0,0,0,40,250,1,0,0,0,42,259,1,0,0,0,44,262,1,0,0,0,46,266,1,0,
	0,0,48,270,1,0,0,0,50,278,1,0,0,0,52,280,1,0,0,0,54,283,1,0,0,0,56,286,
	1,0,0,0,58,288,1,0,0,0,60,62,7,0,0,0,61,60,1,0,0,0,62,65,1,0,0,0,63,61,
	1,0,0,0,63,64,1,0,0,0,64,66,1,0,0,0,65,63,1,0,0,0,66,71,3,14,7,0,67,70,
	5,26,0,0,68,70,3,56,28,0,69,67,1,0,0,0,69,68,1,0,0,0,70,73,1,0,0,0,71,69,
	1,0,0,0,71,72,1,0,0,0,72,74,1,0,0,0,73,71,1,0,0,0,74,75,5,0,0,1,75,1,1,
	0,0,0,76,78,7,0,0,0,77,76,1,0,0,0,78,81,1,0,0,0,79,77,1,0,0,0,79,80,1,0,
	0,0,80,82,1,0,0,0,81,79,1,0,0,0,82,86,5,27,0,0,83,85,5,38,0,0,84,83,1,0,
	0,0,85,88,1,0,0,0,86,84,1,0,0,0,86,87,1,0,0,0,87,89,1,0,0,0,88,86,1,0,0,
	0,89,93,3,4,2,0,90,92,5,38,0,0,91,90,1,0,0,0,92,95,1,0,0,0,93,91,1,0,0,
	0,93,94,1,0,0,0,94,96,1,0,0,0,95,93,1,0,0,0,96,100,5,33,0,0,97,99,7,0,0,
	0,98,97,1,0,0,0,99,102,1,0,0,0,100,98,1,0,0,0,100,101,1,0,0,0,101,3,1,0,
	0,0,102,100,1,0,0,0,103,113,3,8,4,0,104,106,3,6,3,0,105,104,1,0,0,0,106,
	107,1,0,0,0,107,105,1,0,0,0,107,108,1,0,0,0,108,109,1,0,0,0,109,110,3,8,
	4,0,110,112,1,0,0,0,111,105,1,0,0,0,112,115,1,0,0,0,113,111,1,0,0,0,113,
	114,1,0,0,0,114,117,1,0,0,0,115,113,1,0,0,0,116,118,3,6,3,0,117,116,1,0,
	0,0,117,118,1,0,0,0,118,5,1,0,0,0,119,120,7,1,0,0,120,7,1,0,0,0,121,122,
	3,10,5,0,122,123,5,34,0,0,123,124,3,12,6,0,124,9,1,0,0,0,125,126,5,35,0,
	0,126,11,1,0,0,0,127,129,5,35,0,0,128,127,1,0,0,0,128,129,1,0,0,0,129,136,
	1,0,0,0,130,132,5,36,0,0,131,133,5,35,0,0,132,131,1,0,0,0,132,133,1,0,0,
	0,133,135,1,0,0,0,134,130,1,0,0,0,135,138,1,0,0,0,136,134,1,0,0,0,136,137,
	1,0,0,0,137,13,1,0,0,0,138,136,1,0,0,0,139,150,3,16,8,0,140,142,3,56,28,
	0,141,143,3,56,28,0,142,141,1,0,0,0,143,144,1,0,0,0,144,142,1,0,0,0,144,
	145,1,0,0,0,145,146,1,0,0,0,146,147,3,16,8,0,147,149,1,0,0,0,148,140,1,
	0,0,0,149,152,1,0,0,0,150,148,1,0,0,0,150,151,1,0,0,0,151,15,1,0,0,0,152,
	150,1,0,0,0,153,155,3,2,1,0,154,153,1,0,0,0,154,155,1,0,0,0,155,156,1,0,
	0,0,156,162,3,18,9,0,157,158,3,56,28,0,158,159,3,18,9,0,159,161,1,0,0,0,
	160,157,1,0,0,0,161,164,1,0,0,0,162,160,1,0,0,0,162,163,1,0,0,0,163,17,
	1,0,0,0,164,162,1,0,0,0,165,171,3,20,10,0,166,167,3,56,28,0,167,168,3,58,
	29,0,168,170,1,0,0,0,169,166,1,0,0,0,170,173,1,0,0,0,171,169,1,0,0,0,171,
	172,1,0,0,0,172,19,1,0,0,0,173,171,1,0,0,0,174,177,3,22,11,0,175,177,3,
	24,12,0,176,174,1,0,0,0,176,175,1,0,0,0,177,21,1,0,0,0,178,186,3,26,13,
	0,179,182,5,6,0,0,180,183,3,26,13,0,181,183,3,28,14,0,182,180,1,0,0,0,182,
	181,1,0,0,0,183,185,1,0,0,0,184,179,1,0,0,0,185,188,1,0,0,0,186,184,1,0,
	0,0,186,187,1,0,0,0,187,23,1,0,0,0,188,186,1,0,0,0,189,195,3,28,14,0,190,
	193,5,6,0,0,191,194,3,26,13,0,192,194,3,28,14,0,193,191,1,0,0,0,193,192,
	1,0,0,0,194,196,1,0,0,0,195,190,1,0,0,0,196,197,1,0,0,0,197,195,1,0,0,0,
	197,198,1,0,0,0,198,25,1,0,0,0,199,200,3,30,15,0,200,27,1,0,0,0,201,203,
	5,26,0,0,202,201,1,0,0,0,202,203,1,0,0,0,203,29,1,0,0,0,204,206,5,26,0,
	0,205,204,1,0,0,0,205,206,1,0,0,0,206,207,1,0,0,0,207,212,3,32,16,0,208,
	209,5,26,0,0,209,211,3,32,16,0,210,208,1,0,0,0,211,214,1,0,0,0,212,210,
	1,0,0,0,212,213,1,0,0,0,213,216,1,0,0,0,214,212,1,0,0,0,215,217,5,26,0,
	0,216,215,1,0,0,0,216,217,1,0,0,0,217,31,1,0,0,0,218,220,7,2,0,0,219,218,
	1,0,0,0,219,220,1,0,0,0,220,228,1,0,0,0,221,224,3,42,21,0,222,224,3,36,
	18,0,223,221,1,0,0,0,223,222,1,0,0,0,224,225,1,0,0,0,225,223,1,0,0,0,225,
	226,1,0,0,0,226,229,1,0,0,0,227,229,5,14,0,0,228,223,1,0,0,0,228,227,1,
	0,0,0,229,231,1,0,0,0,230,232,3,34,17,0,231,230,1,0,0,0,231,232,1,0,0,0,
	232,234,1,0,0,0,233,235,7,2,0,0,234,233,1,0,0,0,234,235,1,0,0,0,235,33,
	1,0,0,0,236,238,5,22,0,0,237,239,5,22,0,0,238,237,1,0,0,0,239,240,1,0,0,
	0,240,238,1,0,0,0,240,241,1,0,0,0,241,35,1,0,0,0,242,245,3,40,20,0,243,
	245,3,38,19,0,244,242,1,0,0,0,244,243,1,0,0,0,245,37,1,0,0,0,246,247,5,
	1,0,0,247,248,3,30,15,0,248,249,5,2,0,0,249,39,1,0,0,0,250,251,5,3,0,0,
	251,252,3,30,15,0,252,253,5,4,0,0,253,41,1,0,0,0,254,255,3,50,25,0,255,
	256,3,44,22,0,256,260,1,0,0,0,257,260,3,50,25,0,258,260,3,44,22,0,259,254,
	1,0,0,0,259,257,1,0,0,0,259,258,1,0,0,0,260,43,1,0,0,0,261,263,3,46,23,
	0,262,261,1,0,0,0,263,264,1,0,0,0,264,262,1,0,0,0,264,265,1,0,0,0,265,45,
	1,0,0,0,266,268,5,7,0,0,267,269,3,48,24,0,268,267,1,0,0,0,268,269,1,0,0,
	0,269,47,1,0,0,0,270,271,5,22,0,0,271,49,1,0,0,0,272,279,3,54,27,0,273,
	275,3,52,26,0,274,273,1,0,0,0,275,276,1,0,0,0,276,274,1,0,0,0,276,277,1,
	0,0,0,277,279,1,0,0,0,278,272,1,0,0,0,278,274,1,0,0,0,279,51,1,0,0,0,280,
	281,5,22,0,0,281,282,5,7,0,0,282,53,1,0,0,0,283,284,5,22,0,0,284,285,5,
	23,0,0,285,55,1,0,0,0,286,287,7,3,0,0,287,57,1,0,0,0,288,289,5,28,0,0,289,
	291,5,43,0,0,290,292,5,41,0,0,291,290,1,0,0,0,291,292,1,0,0,0,292,59,1,
	0,0,0,41,63,69,71,79,86,93,100,107,113,117,128,132,136,144,150,154,162,
	171,176,182,186,193,197,202,205,212,216,219,223,225,228,231,234,240,244,
	259,264,268,276,278,291];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MasciiParser.__ATN) {
			MasciiParser.__ATN = new ATNDeserializer().deserialize(MasciiParser._serializedATN);
		}

		return MasciiParser.__ATN;
	}


	static DecisionsToDFA = MasciiParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class MusicContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public bars(): BarsContext {
		return this.getTypedRuleContext(BarsContext, 0) as BarsContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(MasciiParser.EOF, 0);
	}
	public SPACE_list(): TerminalNode[] {
	    	return this.getTokens(MasciiParser.SPACE);
	}
	public SPACE(i: number): TerminalNode {
		return this.getToken(MasciiParser.SPACE, i);
	}
	public newline_list(): NewlineContext[] {
		return this.getTypedRuleContexts(NewlineContext) as NewlineContext[];
	}
	public newline(i: number): NewlineContext {
		return this.getTypedRuleContext(NewlineContext, i) as NewlineContext;
	}
	public NEWLINE_list(): TerminalNode[] {
	    	return this.getTokens(MasciiParser.NEWLINE);
	}
	public NEWLINE(i: number): TerminalNode {
		return this.getToken(MasciiParser.NEWLINE, i);
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_music;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterMusic) {
	 		listener.enterMusic(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitMusic) {
	 		listener.exitMusic(this);
		}
	}
}


export class MetainfoContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_META(): TerminalNode {
		return this.getToken(MasciiParser.OPEN_META, 0);
	}
	public headers(): HeadersContext {
		return this.getTypedRuleContext(HeadersContext, 0) as HeadersContext;
	}
	public CLOSE_META(): TerminalNode {
		return this.getToken(MasciiParser.CLOSE_META, 0);
	}
	public M_NEWLINE_list(): TerminalNode[] {
	    	return this.getTokens(MasciiParser.M_NEWLINE);
	}
	public M_NEWLINE(i: number): TerminalNode {
		return this.getToken(MasciiParser.M_NEWLINE, i);
	}
	public SPACE_list(): TerminalNode[] {
	    	return this.getTokens(MasciiParser.SPACE);
	}
	public SPACE(i: number): TerminalNode {
		return this.getToken(MasciiParser.SPACE, i);
	}
	public NEWLINE_list(): TerminalNode[] {
	    	return this.getTokens(MasciiParser.NEWLINE);
	}
	public NEWLINE(i: number): TerminalNode {
		return this.getToken(MasciiParser.NEWLINE, i);
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_metainfo;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterMetainfo) {
	 		listener.enterMetainfo(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitMetainfo) {
	 		listener.exitMetainfo(this);
		}
	}
}


export class HeadersContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public header_list(): HeaderContext[] {
		return this.getTypedRuleContexts(HeaderContext) as HeaderContext[];
	}
	public header(i: number): HeaderContext {
		return this.getTypedRuleContext(HeaderContext, i) as HeaderContext;
	}
	public header_delim_list(): Header_delimContext[] {
		return this.getTypedRuleContexts(Header_delimContext) as Header_delimContext[];
	}
	public header_delim(i: number): Header_delimContext {
		return this.getTypedRuleContext(Header_delimContext, i) as Header_delimContext;
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_headers;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterHeaders) {
	 		listener.enterHeaders(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitHeaders) {
	 		listener.exitHeaders(this);
		}
	}
}


export class Header_delimContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public M_NEWLINE(): TerminalNode {
		return this.getToken(MasciiParser.M_NEWLINE, 0);
	}
	public M_INLINE_SEP(): TerminalNode {
		return this.getToken(MasciiParser.M_INLINE_SEP, 0);
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_header_delim;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterHeader_delim) {
	 		listener.enterHeader_delim(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitHeader_delim) {
	 		listener.exitHeader_delim(this);
		}
	}
}


export class HeaderContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public header_name(): Header_nameContext {
		return this.getTypedRuleContext(Header_nameContext, 0) as Header_nameContext;
	}
	public HEADER_NAME_VAL_SEP(): TerminalNode {
		return this.getToken(MasciiParser.HEADER_NAME_VAL_SEP, 0);
	}
	public header_values(): Header_valuesContext {
		return this.getTypedRuleContext(Header_valuesContext, 0) as Header_valuesContext;
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_header;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterHeader) {
	 		listener.enterHeader(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitHeader) {
	 		listener.exitHeader(this);
		}
	}
}


export class Header_nameContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public HEADER_ENTITY(): TerminalNode {
		return this.getToken(MasciiParser.HEADER_ENTITY, 0);
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_header_name;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterHeader_name) {
	 		listener.enterHeader_name(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitHeader_name) {
	 		listener.exitHeader_name(this);
		}
	}
}


export class Header_valuesContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public HEADER_ENTITY_list(): TerminalNode[] {
	    	return this.getTokens(MasciiParser.HEADER_ENTITY);
	}
	public HEADER_ENTITY(i: number): TerminalNode {
		return this.getToken(MasciiParser.HEADER_ENTITY, i);
	}
	public HEADER_VAL_SEP_list(): TerminalNode[] {
	    	return this.getTokens(MasciiParser.HEADER_VAL_SEP);
	}
	public HEADER_VAL_SEP(i: number): TerminalNode {
		return this.getToken(MasciiParser.HEADER_VAL_SEP, i);
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_header_values;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterHeader_values) {
	 		listener.enterHeader_values(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitHeader_values) {
	 		listener.exitHeader_values(this);
		}
	}
}


export class BarsContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public concurrent_block_list(): Concurrent_blockContext[] {
		return this.getTypedRuleContexts(Concurrent_blockContext) as Concurrent_blockContext[];
	}
	public concurrent_block(i: number): Concurrent_blockContext {
		return this.getTypedRuleContext(Concurrent_blockContext, i) as Concurrent_blockContext;
	}
	public newline_list(): NewlineContext[] {
		return this.getTypedRuleContexts(NewlineContext) as NewlineContext[];
	}
	public newline(i: number): NewlineContext {
		return this.getTypedRuleContext(NewlineContext, i) as NewlineContext;
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_bars;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterBars) {
	 		listener.enterBars(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitBars) {
	 		listener.exitBars(this);
		}
	}
}


export class Concurrent_blockContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public staves_n_lyricsrow_list(): Staves_n_lyricsrowContext[] {
		return this.getTypedRuleContexts(Staves_n_lyricsrowContext) as Staves_n_lyricsrowContext[];
	}
	public staves_n_lyricsrow(i: number): Staves_n_lyricsrowContext {
		return this.getTypedRuleContext(Staves_n_lyricsrowContext, i) as Staves_n_lyricsrowContext;
	}
	public metainfo(): MetainfoContext {
		return this.getTypedRuleContext(MetainfoContext, 0) as MetainfoContext;
	}
	public newline_list(): NewlineContext[] {
		return this.getTypedRuleContexts(NewlineContext) as NewlineContext[];
	}
	public newline(i: number): NewlineContext {
		return this.getTypedRuleContext(NewlineContext, i) as NewlineContext;
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_concurrent_block;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterConcurrent_block) {
	 		listener.enterConcurrent_block(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitConcurrent_block) {
	 		listener.exitConcurrent_block(this);
		}
	}
}


export class Staves_n_lyricsrowContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public stavesrow(): StavesrowContext {
		return this.getTypedRuleContext(StavesrowContext, 0) as StavesrowContext;
	}
	public newline_list(): NewlineContext[] {
		return this.getTypedRuleContexts(NewlineContext) as NewlineContext[];
	}
	public newline(i: number): NewlineContext {
		return this.getTypedRuleContext(NewlineContext, i) as NewlineContext;
	}
	public lyrics_row_list(): Lyrics_rowContext[] {
		return this.getTypedRuleContexts(Lyrics_rowContext) as Lyrics_rowContext[];
	}
	public lyrics_row(i: number): Lyrics_rowContext {
		return this.getTypedRuleContext(Lyrics_rowContext, i) as Lyrics_rowContext;
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_staves_n_lyricsrow;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterStaves_n_lyricsrow) {
	 		listener.enterStaves_n_lyricsrow(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitStaves_n_lyricsrow) {
	 		listener.exitStaves_n_lyricsrow(this);
		}
	}
}


export class StavesrowContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public stavesrow_first_notempty(): Stavesrow_first_notemptyContext {
		return this.getTypedRuleContext(Stavesrow_first_notemptyContext, 0) as Stavesrow_first_notemptyContext;
	}
	public stavesrow_first_empty(): Stavesrow_first_emptyContext {
		return this.getTypedRuleContext(Stavesrow_first_emptyContext, 0) as Stavesrow_first_emptyContext;
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_stavesrow;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterStavesrow) {
	 		listener.enterStavesrow(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitStavesrow) {
	 		listener.exitStavesrow(this);
		}
	}
}


export class Stavesrow_first_notemptyContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public staff_list(): StaffContext[] {
		return this.getTypedRuleContexts(StaffContext) as StaffContext[];
	}
	public staff(i: number): StaffContext {
		return this.getTypedRuleContext(StaffContext, i) as StaffContext;
	}
	public STAFF_SEPARATOR_list(): TerminalNode[] {
	    	return this.getTokens(MasciiParser.STAFF_SEPARATOR);
	}
	public STAFF_SEPARATOR(i: number): TerminalNode {
		return this.getToken(MasciiParser.STAFF_SEPARATOR, i);
	}
	public empty_staff_list(): Empty_staffContext[] {
		return this.getTypedRuleContexts(Empty_staffContext) as Empty_staffContext[];
	}
	public empty_staff(i: number): Empty_staffContext {
		return this.getTypedRuleContext(Empty_staffContext, i) as Empty_staffContext;
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_stavesrow_first_notempty;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterStavesrow_first_notempty) {
	 		listener.enterStavesrow_first_notempty(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitStavesrow_first_notempty) {
	 		listener.exitStavesrow_first_notempty(this);
		}
	}
}


export class Stavesrow_first_emptyContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public empty_staff_list(): Empty_staffContext[] {
		return this.getTypedRuleContexts(Empty_staffContext) as Empty_staffContext[];
	}
	public empty_staff(i: number): Empty_staffContext {
		return this.getTypedRuleContext(Empty_staffContext, i) as Empty_staffContext;
	}
	public STAFF_SEPARATOR_list(): TerminalNode[] {
	    	return this.getTokens(MasciiParser.STAFF_SEPARATOR);
	}
	public STAFF_SEPARATOR(i: number): TerminalNode {
		return this.getToken(MasciiParser.STAFF_SEPARATOR, i);
	}
	public staff_list(): StaffContext[] {
		return this.getTypedRuleContexts(StaffContext) as StaffContext[];
	}
	public staff(i: number): StaffContext {
		return this.getTypedRuleContext(StaffContext, i) as StaffContext;
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_stavesrow_first_empty;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterStavesrow_first_empty) {
	 		listener.enterStavesrow_first_empty(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitStavesrow_first_empty) {
	 		listener.exitStavesrow_first_empty(this);
		}
	}
}


export class StaffContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public timed_elements(): Timed_elementsContext {
		return this.getTypedRuleContext(Timed_elementsContext, 0) as Timed_elementsContext;
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_staff;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterStaff) {
	 		listener.enterStaff(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitStaff) {
	 		listener.exitStaff(this);
		}
	}
}


export class Empty_staffContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SPACE(): TerminalNode {
		return this.getToken(MasciiParser.SPACE, 0);
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_empty_staff;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterEmpty_staff) {
	 		listener.enterEmpty_staff(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitEmpty_staff) {
	 		listener.exitEmpty_staff(this);
		}
	}
}


export class Timed_elementsContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public timed_element_list(): Timed_elementContext[] {
		return this.getTypedRuleContexts(Timed_elementContext) as Timed_elementContext[];
	}
	public timed_element(i: number): Timed_elementContext {
		return this.getTypedRuleContext(Timed_elementContext, i) as Timed_elementContext;
	}
	public SPACE_list(): TerminalNode[] {
	    	return this.getTokens(MasciiParser.SPACE);
	}
	public SPACE(i: number): TerminalNode {
		return this.getToken(MasciiParser.SPACE, i);
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_timed_elements;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterTimed_elements) {
	 		listener.enterTimed_elements(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitTimed_elements) {
	 		listener.exitTimed_elements(this);
		}
	}
}


export class Timed_elementContext extends ParserRuleContext {
	public _inverse_dot!: Token;
	public _normal_dot!: Token;
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public REST(): TerminalNode {
		return this.getToken(MasciiParser.REST, 0);
	}
	public duration_doubled(): Duration_doubledContext {
		return this.getTypedRuleContext(Duration_doubledContext, 0) as Duration_doubledContext;
	}
	public DBL_DOTTED_list(): TerminalNode[] {
	    	return this.getTokens(MasciiParser.DBL_DOTTED);
	}
	public DBL_DOTTED(i: number): TerminalNode {
		return this.getToken(MasciiParser.DBL_DOTTED, i);
	}
	public DOTTED_list(): TerminalNode[] {
	    	return this.getTokens(MasciiParser.DOTTED);
	}
	public DOTTED(i: number): TerminalNode {
		return this.getToken(MasciiParser.DOTTED, i);
	}
	public notes_list(): NotesContext[] {
		return this.getTypedRuleContexts(NotesContext) as NotesContext[];
	}
	public notes(i: number): NotesContext {
		return this.getTypedRuleContext(NotesContext, i) as NotesContext;
	}
	public group_list(): GroupContext[] {
		return this.getTypedRuleContexts(GroupContext) as GroupContext[];
	}
	public group(i: number): GroupContext {
		return this.getTypedRuleContext(GroupContext, i) as GroupContext;
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_timed_element;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterTimed_element) {
	 		listener.enterTimed_element(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitTimed_element) {
	 		listener.exitTimed_element(this);
		}
	}
}


export class Duration_doubledContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TIE_list(): TerminalNode[] {
	    	return this.getTokens(MasciiParser.TIE);
	}
	public TIE(i: number): TerminalNode {
		return this.getToken(MasciiParser.TIE, i);
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_duration_doubled;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterDuration_doubled) {
	 		listener.enterDuration_doubled(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitDuration_doubled) {
	 		listener.exitDuration_doubled(this);
		}
	}
}


export class GroupContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unscoped_group(): Unscoped_groupContext {
		return this.getTypedRuleContext(Unscoped_groupContext, 0) as Unscoped_groupContext;
	}
	public scoped_group(): Scoped_groupContext {
		return this.getTypedRuleContext(Scoped_groupContext, 0) as Scoped_groupContext;
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_group;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterGroup) {
	 		listener.enterGroup(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitGroup) {
	 		listener.exitGroup(this);
		}
	}
}


export class Scoped_groupContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_SCOPED(): TerminalNode {
		return this.getToken(MasciiParser.OPEN_SCOPED, 0);
	}
	public timed_elements(): Timed_elementsContext {
		return this.getTypedRuleContext(Timed_elementsContext, 0) as Timed_elementsContext;
	}
	public CLOSE_SCOPED(): TerminalNode {
		return this.getToken(MasciiParser.CLOSE_SCOPED, 0);
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_scoped_group;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterScoped_group) {
	 		listener.enterScoped_group(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitScoped_group) {
	 		listener.exitScoped_group(this);
		}
	}
}


export class Unscoped_groupContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_UNSCOPED(): TerminalNode {
		return this.getToken(MasciiParser.OPEN_UNSCOPED, 0);
	}
	public timed_elements(): Timed_elementsContext {
		return this.getTypedRuleContext(Timed_elementsContext, 0) as Timed_elementsContext;
	}
	public CLOSE_UNSCOPED(): TerminalNode {
		return this.getToken(MasciiParser.CLOSE_UNSCOPED, 0);
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_unscoped_group;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterUnscoped_group) {
	 		listener.enterUnscoped_group(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitUnscoped_group) {
	 		listener.exitUnscoped_group(this);
		}
	}
}


export class NotesContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public notes_end(): Notes_endContext {
		return this.getTypedRuleContext(Notes_endContext, 0) as Notes_endContext;
	}
	public notes_start(): Notes_startContext {
		return this.getTypedRuleContext(Notes_startContext, 0) as Notes_startContext;
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_notes;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterNotes) {
	 		listener.enterNotes(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitNotes) {
	 		listener.exitNotes(this);
		}
	}
}


export class Notes_startContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public note_start_list(): Note_startContext[] {
		return this.getTypedRuleContexts(Note_startContext) as Note_startContext[];
	}
	public note_start(i: number): Note_startContext {
		return this.getTypedRuleContext(Note_startContext, i) as Note_startContext;
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_notes_start;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterNotes_start) {
	 		listener.enterNotes_start(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitNotes_start) {
	 		listener.exitNotes_start(this);
		}
	}
}


export class Note_startContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PITCH(): TerminalNode {
		return this.getToken(MasciiParser.PITCH, 0);
	}
	public note_tie(): Note_tieContext {
		return this.getTypedRuleContext(Note_tieContext, 0) as Note_tieContext;
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_note_start;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterNote_start) {
	 		listener.enterNote_start(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitNote_start) {
	 		listener.exitNote_start(this);
		}
	}
}


export class Note_tieContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TIE(): TerminalNode {
		return this.getToken(MasciiParser.TIE, 0);
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_note_tie;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterNote_tie) {
	 		listener.enterNote_tie(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitNote_tie) {
	 		listener.exitNote_tie(this);
		}
	}
}


export class Notes_endContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public note_end_all(): Note_end_allContext {
		return this.getTypedRuleContext(Note_end_allContext, 0) as Note_end_allContext;
	}
	public note_end_one_list(): Note_end_oneContext[] {
		return this.getTypedRuleContexts(Note_end_oneContext) as Note_end_oneContext[];
	}
	public note_end_one(i: number): Note_end_oneContext {
		return this.getTypedRuleContext(Note_end_oneContext, i) as Note_end_oneContext;
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_notes_end;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterNotes_end) {
	 		listener.enterNotes_end(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitNotes_end) {
	 		listener.exitNotes_end(this);
		}
	}
}


export class Note_end_oneContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TIE(): TerminalNode {
		return this.getToken(MasciiParser.TIE, 0);
	}
	public PITCH(): TerminalNode {
		return this.getToken(MasciiParser.PITCH, 0);
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_note_end_one;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterNote_end_one) {
	 		listener.enterNote_end_one(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitNote_end_one) {
	 		listener.exitNote_end_one(this);
		}
	}
}


export class Note_end_allContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TIE(): TerminalNode {
		return this.getToken(MasciiParser.TIE, 0);
	}
	public NOTE_END_ALL(): TerminalNode {
		return this.getToken(MasciiParser.NOTE_END_ALL, 0);
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_note_end_all;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterNote_end_all) {
	 		listener.enterNote_end_all(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitNote_end_all) {
	 		listener.exitNote_end_all(this);
		}
	}
}


export class NewlineContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(MasciiParser.NEWLINE, 0);
	}
	public IMPLICIT_CLOSE_LYRICS(): TerminalNode {
		return this.getToken(MasciiParser.IMPLICIT_CLOSE_LYRICS, 0);
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_newline;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterNewline) {
	 		listener.enterNewline(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitNewline) {
	 		listener.exitNewline(this);
		}
	}
}


export class Lyrics_rowContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_LYRICS(): TerminalNode {
		return this.getToken(MasciiParser.OPEN_LYRICS, 0);
	}
	public LYRICS(): TerminalNode {
		return this.getToken(MasciiParser.LYRICS, 0);
	}
	public CLOSE_LYRICS(): TerminalNode {
		return this.getToken(MasciiParser.CLOSE_LYRICS, 0);
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_lyrics_row;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterLyrics_row) {
	 		listener.enterLyrics_row(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitLyrics_row) {
	 		listener.exitLyrics_row(this);
		}
	}
}
