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
	public static readonly HEADER_SEP = 34;
	public static readonly HEADER_ENTITY = 35;
	public static readonly HEADER_VAL_SEP = 36;
	public static readonly M_COMMENT = 37;
	public static readonly M_NEWLINE = 38;
	public static readonly M_SPACE = 39;
	public static readonly CLOSE_LYRICS = 40;
	public static readonly IMPLICIT_CLOSE_LYRICS = 41;
	public static readonly LYRICS = 42;
	public static readonly L_NEWLINE = 43;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_music = 0;
	public static readonly RULE_metainfo = 1;
	public static readonly RULE_headers = 2;
	public static readonly RULE_header = 3;
	public static readonly RULE_header_name = 4;
	public static readonly RULE_header_values = 5;
	public static readonly RULE_bars = 6;
	public static readonly RULE_concurrent_block = 7;
	public static readonly RULE_staves_n_lyricsrow = 8;
	public static readonly RULE_stavesrow = 9;
	public static readonly RULE_stavesrow_first_notempty = 10;
	public static readonly RULE_stavesrow_first_empty = 11;
	public static readonly RULE_staff = 12;
	public static readonly RULE_empty_staff = 13;
	public static readonly RULE_timed_elements = 14;
	public static readonly RULE_timed_element = 15;
	public static readonly RULE_duration_doubled = 16;
	public static readonly RULE_group = 17;
	public static readonly RULE_scoped_group = 18;
	public static readonly RULE_unscoped_group = 19;
	public static readonly RULE_notes = 20;
	public static readonly RULE_notes_start = 21;
	public static readonly RULE_note_start = 22;
	public static readonly RULE_note_tie = 23;
	public static readonly RULE_notes_end = 24;
	public static readonly RULE_note_end_one = 25;
	public static readonly RULE_note_end_all = 26;
	public static readonly RULE_newline = 27;
	public static readonly RULE_lyrics_row = 28;
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
                                                             "HEADER_SEP", 
                                                             "HEADER_ENTITY", 
                                                             "HEADER_VAL_SEP", 
                                                             "M_COMMENT", 
                                                             "M_NEWLINE", 
                                                             "M_SPACE", 
                                                             "CLOSE_LYRICS", 
                                                             "IMPLICIT_CLOSE_LYRICS", 
                                                             "LYRICS", "L_NEWLINE" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"music", "metainfo", "headers", "header", "header_name", "header_values", 
		"bars", "concurrent_block", "staves_n_lyricsrow", "stavesrow", "stavesrow_first_notempty", 
		"stavesrow_first_empty", "staff", "empty_staff", "timed_elements", "timed_element", 
		"duration_doubled", "group", "scoped_group", "unscoped_group", "notes", 
		"notes_start", "note_start", "note_tie", "notes_end", "note_end_one", 
		"note_end_all", "newline", "lyrics_row",
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
			this.state = 61;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 58;
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
				this.state = 63;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 64;
			this.bars();
			this.state = 69;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 65539) !== 0)) {
				{
				this.state = 67;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 26:
					{
					this.state = 65;
					this.match(MasciiParser.SPACE);
					}
					break;
				case 25:
				case 41:
					{
					this.state = 66;
					this.newline();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 71;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 72;
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
			this.state = 77;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25 || _la===26) {
				{
				{
				this.state = 74;
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
				this.state = 79;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 80;
			this.match(MasciiParser.OPEN_META);
			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===38) {
				{
				{
				this.state = 81;
				this.match(MasciiParser.M_NEWLINE);
				}
				}
				this.state = 86;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 87;
			this.headers();
			this.state = 91;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===38) {
				{
				{
				this.state = 88;
				this.match(MasciiParser.M_NEWLINE);
				}
				}
				this.state = 93;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 94;
			this.match(MasciiParser.CLOSE_META);
			this.state = 98;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 95;
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
				this.state = 100;
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
			this.state = 101;
			this.header();
			this.state = 110;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 103;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 102;
						this.match(MasciiParser.M_NEWLINE);
						}
						}
						this.state = 105;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la===38);
					this.state = 107;
					this.header();
					}
					}
				}
				this.state = 112;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
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
		this.enterRule(localctx, 6, MasciiParser.RULE_header);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 113;
			this.header_name();
			this.state = 114;
			this.match(MasciiParser.HEADER_SEP);
			this.state = 115;
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
		this.enterRule(localctx, 8, MasciiParser.RULE_header_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 117;
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
		this.enterRule(localctx, 10, MasciiParser.RULE_header_values);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===35) {
				{
				this.state = 119;
				this.match(MasciiParser.HEADER_ENTITY);
				}
			}

			this.state = 128;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===36) {
				{
				{
				this.state = 122;
				this.match(MasciiParser.HEADER_VAL_SEP);
				this.state = 124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===35) {
					{
					this.state = 123;
					this.match(MasciiParser.HEADER_ENTITY);
					}
				}

				}
				}
				this.state = 130;
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
		this.enterRule(localctx, 12, MasciiParser.RULE_bars);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 131;
			this.concurrent_block();
			this.state = 142;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 132;
					this.newline();
					this.state = 134;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 133;
							this.newline();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 136;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					this.state = 138;
					this.concurrent_block();
					}
					}
				}
				this.state = 144;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
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
		this.enterRule(localctx, 14, MasciiParser.RULE_concurrent_block);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 146;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 145;
				this.metainfo();
				}
				break;
			}
			this.state = 148;
			this.staves_n_lyricsrow();
			this.state = 154;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 15, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 149;
					this.newline();
					this.state = 150;
					this.staves_n_lyricsrow();
					}
					}
				}
				this.state = 156;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 15, this._ctx);
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
		this.enterRule(localctx, 16, MasciiParser.RULE_staves_n_lyricsrow);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 157;
			this.stavesrow();
			this.state = 163;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 158;
					this.newline();
					this.state = 159;
					this.lyrics_row();
					}
					}
				}
				this.state = 165;
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
	public stavesrow(): StavesrowContext {
		let localctx: StavesrowContext = new StavesrowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, MasciiParser.RULE_stavesrow);
		try {
			this.state = 168;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 166;
				this.stavesrow_first_notempty();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 167;
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
		this.enterRule(localctx, 20, MasciiParser.RULE_stavesrow_first_notempty);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 170;
			this.staff();
			this.state = 178;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===6) {
				{
				{
				this.state = 171;
				this.match(MasciiParser.STAFF_SEPARATOR);
				this.state = 174;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
				case 1:
					{
					this.state = 172;
					this.staff();
					}
					break;
				case 2:
					{
					this.state = 173;
					this.empty_staff();
					}
					break;
				}
				}
				}
				this.state = 180;
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
		this.enterRule(localctx, 22, MasciiParser.RULE_stavesrow_first_empty);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 181;
			this.empty_staff();
			this.state = 187;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 182;
				this.match(MasciiParser.STAFF_SEPARATOR);
				this.state = 185;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
				case 1:
					{
					this.state = 183;
					this.staff();
					}
					break;
				case 2:
					{
					this.state = 184;
					this.empty_staff();
					}
					break;
				}
				}
				}
				this.state = 189;
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
		this.enterRule(localctx, 24, MasciiParser.RULE_staff);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 191;
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
		this.enterRule(localctx, 26, MasciiParser.RULE_empty_staff);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 194;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				this.state = 193;
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
		this.enterRule(localctx, 28, MasciiParser.RULE_timed_elements);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26) {
				{
				this.state = 196;
				this.match(MasciiParser.SPACE);
				}
			}

			this.state = 199;
			this.timed_element();
			this.state = 204;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 200;
					this.match(MasciiParser.SPACE);
					this.state = 201;
					this.timed_element();
					}
					}
				}
				this.state = 206;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
			}
			this.state = 208;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 207;
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
		this.enterRule(localctx, 30, MasciiParser.RULE_timed_element);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===20 || _la===21) {
				{
				this.state = 210;
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

			this.state = 220;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 3:
			case 7:
			case 22:
				{
				this.state = 215;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						this.state = 215;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case 7:
						case 22:
							{
							this.state = 213;
							this.notes();
							}
							break;
						case 1:
						case 3:
							{
							this.state = 214;
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
					this.state = 217;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 14:
				{
				this.state = 219;
				this.match(MasciiParser.REST);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 223;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===22) {
				{
				this.state = 222;
				this.duration_doubled();
				}
			}

			this.state = 226;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===20 || _la===21) {
				{
				this.state = 225;
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
		this.enterRule(localctx, 32, MasciiParser.RULE_duration_doubled);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 228;
			this.match(MasciiParser.TIE);
			this.state = 230;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 229;
				this.match(MasciiParser.TIE);
				}
				}
				this.state = 232;
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
		this.enterRule(localctx, 34, MasciiParser.RULE_group);
		try {
			this.state = 236;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 234;
				this.unscoped_group();
				}
				break;
			case 1:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 235;
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
		this.enterRule(localctx, 36, MasciiParser.RULE_scoped_group);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 238;
			this.match(MasciiParser.OPEN_SCOPED);
			this.state = 239;
			this.timed_elements();
			this.state = 240;
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
		this.enterRule(localctx, 38, MasciiParser.RULE_unscoped_group);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 242;
			this.match(MasciiParser.OPEN_UNSCOPED);
			this.state = 243;
			this.timed_elements();
			this.state = 244;
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
		this.enterRule(localctx, 40, MasciiParser.RULE_notes);
		try {
			this.state = 251;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 246;
				this.notes_end();
				this.state = 247;
				this.notes_start();
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 249;
				this.notes_end();
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				{
				this.state = 250;
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
		this.enterRule(localctx, 42, MasciiParser.RULE_notes_start);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 254;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 253;
					this.note_start();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 256;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 35, this._ctx);
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
		this.enterRule(localctx, 44, MasciiParser.RULE_note_start);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 258;
			this.match(MasciiParser.PITCH);
			this.state = 260;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				{
				this.state = 259;
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
		this.enterRule(localctx, 46, MasciiParser.RULE_note_tie);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 262;
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
		this.enterRule(localctx, 48, MasciiParser.RULE_notes_end);
		try {
			let _alt: number;
			this.state = 270;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 264;
				this.note_end_all();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 266;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 265;
						this.note_end_one();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 268;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
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
		this.enterRule(localctx, 50, MasciiParser.RULE_note_end_one);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 272;
			this.match(MasciiParser.TIE);
			this.state = 273;
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
		this.enterRule(localctx, 52, MasciiParser.RULE_note_end_all);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 275;
			this.match(MasciiParser.TIE);
			this.state = 276;
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
		this.enterRule(localctx, 54, MasciiParser.RULE_newline);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 278;
			_la = this._input.LA(1);
			if(!(_la===25 || _la===41)) {
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
		this.enterRule(localctx, 56, MasciiParser.RULE_lyrics_row);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 280;
			this.match(MasciiParser.OPEN_LYRICS);
			this.state = 281;
			this.match(MasciiParser.LYRICS);
			this.state = 283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===40) {
				{
				this.state = 282;
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

	public static readonly _serializedATN: number[] = [4,1,43,286,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,1,0,5,0,60,8,0,10,0,12,0,63,
	9,0,1,0,1,0,1,0,5,0,68,8,0,10,0,12,0,71,9,0,1,0,1,0,1,1,5,1,76,8,1,10,1,
	12,1,79,9,1,1,1,1,1,5,1,83,8,1,10,1,12,1,86,9,1,1,1,1,1,5,1,90,8,1,10,1,
	12,1,93,9,1,1,1,1,1,5,1,97,8,1,10,1,12,1,100,9,1,1,2,1,2,4,2,104,8,2,11,
	2,12,2,105,1,2,5,2,109,8,2,10,2,12,2,112,9,2,1,3,1,3,1,3,1,3,1,4,1,4,1,
	5,3,5,121,8,5,1,5,1,5,3,5,125,8,5,5,5,127,8,5,10,5,12,5,130,9,5,1,6,1,6,
	1,6,4,6,135,8,6,11,6,12,6,136,1,6,1,6,5,6,141,8,6,10,6,12,6,144,9,6,1,7,
	3,7,147,8,7,1,7,1,7,1,7,1,7,5,7,153,8,7,10,7,12,7,156,9,7,1,8,1,8,1,8,1,
	8,5,8,162,8,8,10,8,12,8,165,9,8,1,9,1,9,3,9,169,8,9,1,10,1,10,1,10,1,10,
	3,10,175,8,10,5,10,177,8,10,10,10,12,10,180,9,10,1,11,1,11,1,11,1,11,3,
	11,186,8,11,4,11,188,8,11,11,11,12,11,189,1,12,1,12,1,13,3,13,195,8,13,
	1,14,3,14,198,8,14,1,14,1,14,1,14,5,14,203,8,14,10,14,12,14,206,9,14,1,
	14,3,14,209,8,14,1,15,3,15,212,8,15,1,15,1,15,4,15,216,8,15,11,15,12,15,
	217,1,15,3,15,221,8,15,1,15,3,15,224,8,15,1,15,3,15,227,8,15,1,16,1,16,
	4,16,231,8,16,11,16,12,16,232,1,17,1,17,3,17,237,8,17,1,18,1,18,1,18,1,
	18,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,3,20,252,8,20,1,21,4,21,
	255,8,21,11,21,12,21,256,1,22,1,22,3,22,261,8,22,1,23,1,23,1,24,1,24,4,
	24,267,8,24,11,24,12,24,268,3,24,271,8,24,1,25,1,25,1,25,1,26,1,26,1,26,
	1,27,1,27,1,28,1,28,1,28,3,28,284,8,28,1,28,0,0,29,0,2,4,6,8,10,12,14,16,
	18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,0,3,1,0,25,
	26,1,0,20,21,2,0,25,25,41,41,297,0,61,1,0,0,0,2,77,1,0,0,0,4,101,1,0,0,
	0,6,113,1,0,0,0,8,117,1,0,0,0,10,120,1,0,0,0,12,131,1,0,0,0,14,146,1,0,
	0,0,16,157,1,0,0,0,18,168,1,0,0,0,20,170,1,0,0,0,22,181,1,0,0,0,24,191,
	1,0,0,0,26,194,1,0,0,0,28,197,1,0,0,0,30,211,1,0,0,0,32,228,1,0,0,0,34,
	236,1,0,0,0,36,238,1,0,0,0,38,242,1,0,0,0,40,251,1,0,0,0,42,254,1,0,0,0,
	44,258,1,0,0,0,46,262,1,0,0,0,48,270,1,0,0,0,50,272,1,0,0,0,52,275,1,0,
	0,0,54,278,1,0,0,0,56,280,1,0,0,0,58,60,7,0,0,0,59,58,1,0,0,0,60,63,1,0,
	0,0,61,59,1,0,0,0,61,62,1,0,0,0,62,64,1,0,0,0,63,61,1,0,0,0,64,69,3,12,
	6,0,65,68,5,26,0,0,66,68,3,54,27,0,67,65,1,0,0,0,67,66,1,0,0,0,68,71,1,
	0,0,0,69,67,1,0,0,0,69,70,1,0,0,0,70,72,1,0,0,0,71,69,1,0,0,0,72,73,5,0,
	0,1,73,1,1,0,0,0,74,76,7,0,0,0,75,74,1,0,0,0,76,79,1,0,0,0,77,75,1,0,0,
	0,77,78,1,0,0,0,78,80,1,0,0,0,79,77,1,0,0,0,80,84,5,27,0,0,81,83,5,38,0,
	0,82,81,1,0,0,0,83,86,1,0,0,0,84,82,1,0,0,0,84,85,1,0,0,0,85,87,1,0,0,0,
	86,84,1,0,0,0,87,91,3,4,2,0,88,90,5,38,0,0,89,88,1,0,0,0,90,93,1,0,0,0,
	91,89,1,0,0,0,91,92,1,0,0,0,92,94,1,0,0,0,93,91,1,0,0,0,94,98,5,33,0,0,
	95,97,7,0,0,0,96,95,1,0,0,0,97,100,1,0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,
	99,3,1,0,0,0,100,98,1,0,0,0,101,110,3,6,3,0,102,104,5,38,0,0,103,102,1,
	0,0,0,104,105,1,0,0,0,105,103,1,0,0,0,105,106,1,0,0,0,106,107,1,0,0,0,107,
	109,3,6,3,0,108,103,1,0,0,0,109,112,1,0,0,0,110,108,1,0,0,0,110,111,1,0,
	0,0,111,5,1,0,0,0,112,110,1,0,0,0,113,114,3,8,4,0,114,115,5,34,0,0,115,
	116,3,10,5,0,116,7,1,0,0,0,117,118,5,35,0,0,118,9,1,0,0,0,119,121,5,35,
	0,0,120,119,1,0,0,0,120,121,1,0,0,0,121,128,1,0,0,0,122,124,5,36,0,0,123,
	125,5,35,0,0,124,123,1,0,0,0,124,125,1,0,0,0,125,127,1,0,0,0,126,122,1,
	0,0,0,127,130,1,0,0,0,128,126,1,0,0,0,128,129,1,0,0,0,129,11,1,0,0,0,130,
	128,1,0,0,0,131,142,3,14,7,0,132,134,3,54,27,0,133,135,3,54,27,0,134,133,
	1,0,0,0,135,136,1,0,0,0,136,134,1,0,0,0,136,137,1,0,0,0,137,138,1,0,0,0,
	138,139,3,14,7,0,139,141,1,0,0,0,140,132,1,0,0,0,141,144,1,0,0,0,142,140,
	1,0,0,0,142,143,1,0,0,0,143,13,1,0,0,0,144,142,1,0,0,0,145,147,3,2,1,0,
	146,145,1,0,0,0,146,147,1,0,0,0,147,148,1,0,0,0,148,154,3,16,8,0,149,150,
	3,54,27,0,150,151,3,16,8,0,151,153,1,0,0,0,152,149,1,0,0,0,153,156,1,0,
	0,0,154,152,1,0,0,0,154,155,1,0,0,0,155,15,1,0,0,0,156,154,1,0,0,0,157,
	163,3,18,9,0,158,159,3,54,27,0,159,160,3,56,28,0,160,162,1,0,0,0,161,158,
	1,0,0,0,162,165,1,0,0,0,163,161,1,0,0,0,163,164,1,0,0,0,164,17,1,0,0,0,
	165,163,1,0,0,0,166,169,3,20,10,0,167,169,3,22,11,0,168,166,1,0,0,0,168,
	167,1,0,0,0,169,19,1,0,0,0,170,178,3,24,12,0,171,174,5,6,0,0,172,175,3,
	24,12,0,173,175,3,26,13,0,174,172,1,0,0,0,174,173,1,0,0,0,175,177,1,0,0,
	0,176,171,1,0,0,0,177,180,1,0,0,0,178,176,1,0,0,0,178,179,1,0,0,0,179,21,
	1,0,0,0,180,178,1,0,0,0,181,187,3,26,13,0,182,185,5,6,0,0,183,186,3,24,
	12,0,184,186,3,26,13,0,185,183,1,0,0,0,185,184,1,0,0,0,186,188,1,0,0,0,
	187,182,1,0,0,0,188,189,1,0,0,0,189,187,1,0,0,0,189,190,1,0,0,0,190,23,
	1,0,0,0,191,192,3,28,14,0,192,25,1,0,0,0,193,195,5,26,0,0,194,193,1,0,0,
	0,194,195,1,0,0,0,195,27,1,0,0,0,196,198,5,26,0,0,197,196,1,0,0,0,197,198,
	1,0,0,0,198,199,1,0,0,0,199,204,3,30,15,0,200,201,5,26,0,0,201,203,3,30,
	15,0,202,200,1,0,0,0,203,206,1,0,0,0,204,202,1,0,0,0,204,205,1,0,0,0,205,
	208,1,0,0,0,206,204,1,0,0,0,207,209,5,26,0,0,208,207,1,0,0,0,208,209,1,
	0,0,0,209,29,1,0,0,0,210,212,7,1,0,0,211,210,1,0,0,0,211,212,1,0,0,0,212,
	220,1,0,0,0,213,216,3,40,20,0,214,216,3,34,17,0,215,213,1,0,0,0,215,214,
	1,0,0,0,216,217,1,0,0,0,217,215,1,0,0,0,217,218,1,0,0,0,218,221,1,0,0,0,
	219,221,5,14,0,0,220,215,1,0,0,0,220,219,1,0,0,0,221,223,1,0,0,0,222,224,
	3,32,16,0,223,222,1,0,0,0,223,224,1,0,0,0,224,226,1,0,0,0,225,227,7,1,0,
	0,226,225,1,0,0,0,226,227,1,0,0,0,227,31,1,0,0,0,228,230,5,22,0,0,229,231,
	5,22,0,0,230,229,1,0,0,0,231,232,1,0,0,0,232,230,1,0,0,0,232,233,1,0,0,
	0,233,33,1,0,0,0,234,237,3,38,19,0,235,237,3,36,18,0,236,234,1,0,0,0,236,
	235,1,0,0,0,237,35,1,0,0,0,238,239,5,1,0,0,239,240,3,28,14,0,240,241,5,
	2,0,0,241,37,1,0,0,0,242,243,5,3,0,0,243,244,3,28,14,0,244,245,5,4,0,0,
	245,39,1,0,0,0,246,247,3,48,24,0,247,248,3,42,21,0,248,252,1,0,0,0,249,
	252,3,48,24,0,250,252,3,42,21,0,251,246,1,0,0,0,251,249,1,0,0,0,251,250,
	1,0,0,0,252,41,1,0,0,0,253,255,3,44,22,0,254,253,1,0,0,0,255,256,1,0,0,
	0,256,254,1,0,0,0,256,257,1,0,0,0,257,43,1,0,0,0,258,260,5,7,0,0,259,261,
	3,46,23,0,260,259,1,0,0,0,260,261,1,0,0,0,261,45,1,0,0,0,262,263,5,22,0,
	0,263,47,1,0,0,0,264,271,3,52,26,0,265,267,3,50,25,0,266,265,1,0,0,0,267,
	268,1,0,0,0,268,266,1,0,0,0,268,269,1,0,0,0,269,271,1,0,0,0,270,264,1,0,
	0,0,270,266,1,0,0,0,271,49,1,0,0,0,272,273,5,22,0,0,273,274,5,7,0,0,274,
	51,1,0,0,0,275,276,5,22,0,0,276,277,5,23,0,0,277,53,1,0,0,0,278,279,7,2,
	0,0,279,55,1,0,0,0,280,281,5,28,0,0,281,283,5,42,0,0,282,284,5,40,0,0,283,
	282,1,0,0,0,283,284,1,0,0,0,284,57,1,0,0,0,40,61,67,69,77,84,91,98,105,
	110,120,124,128,136,142,146,154,163,168,174,178,185,189,194,197,204,208,
	211,215,217,220,223,226,232,236,251,256,260,268,270,283];

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
	public M_NEWLINE_list(): TerminalNode[] {
	    	return this.getTokens(MasciiParser.M_NEWLINE);
	}
	public M_NEWLINE(i: number): TerminalNode {
		return this.getToken(MasciiParser.M_NEWLINE, i);
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


export class HeaderContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public header_name(): Header_nameContext {
		return this.getTypedRuleContext(Header_nameContext, 0) as Header_nameContext;
	}
	public HEADER_SEP(): TerminalNode {
		return this.getToken(MasciiParser.HEADER_SEP, 0);
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
