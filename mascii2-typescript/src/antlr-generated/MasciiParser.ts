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
	public static readonly STAFF_SEPARATOR = 5;
	public static readonly AMPLIFIERS = 6;
	public static readonly AMPLIFIER = 7;
	public static readonly REL_PITCH = 8;
	public static readonly REL_PITCH_UP = 9;
	public static readonly REL_PITCH_DOWN = 10;
	public static readonly REPEAT_ELEMENT = 11;
	public static readonly REST = 12;
	public static readonly DBL_SHARP = 13;
	public static readonly DBL_FLAT = 14;
	public static readonly SHARP = 15;
	public static readonly FLAT = 16;
	public static readonly NATURAL = 17;
	public static readonly DOTTED = 18;
	public static readonly MULTI_DOTTED = 19;
	public static readonly TIE = 20;
	public static readonly NOTE_END_ALL = 21;
	public static readonly COMMENT = 22;
	public static readonly NEWLINE = 23;
	public static readonly SPACE = 24;
	public static readonly OPEN_META = 25;
	public static readonly OPEN_LYRICS = 26;
	public static readonly ZERO = 27;
	public static readonly NON_ZERO = 28;
	public static readonly F_OPEN_SCOPED = 29;
	public static readonly F_CLOSE_SCOPED = 30;
	public static readonly F_OPEN_UNSCOPED = 31;
	public static readonly F_CLOSE_UNSCOPED = 32;
	public static readonly CHORD_TYPE_MINOR = 33;
	public static readonly CHORD_TYPE_MAJOR = 34;
	public static readonly CHORD_TYPE_AUG = 35;
	public static readonly CHORD_TYPE_HDIM = 36;
	public static readonly CHORD_TYPE_DIM = 37;
	public static readonly CHORD_TYPE_DOM = 38;
	public static readonly CHORD_TYPE_SUS = 39;
	public static readonly CHORD_TYPE_ADD = 40;
	public static readonly SLASH = 41;
	public static readonly COLON = 42;
	public static readonly CLOSE_META = 43;
	public static readonly HEADER_NAME_VAL_SEP = 44;
	public static readonly HEADER_ENTITY = 45;
	public static readonly HEADER_VAL_SEP = 46;
	public static readonly M_COMMENT = 47;
	public static readonly M_NEWLINE = 48;
	public static readonly M_INLINE_SEP = 49;
	public static readonly M_SPACE = 50;
	public static readonly OPEN_QUOTE = 51;
	public static readonly CLOSE_LYRICS = 52;
	public static readonly IMPLICIT_CLOSE_LYRICS = 53;
	public static readonly LYRICS = 54;
	public static readonly L_NEWLINE = 55;
	public static readonly CLOSE_QUOTE = 56;
	public static readonly QUOTED_TEXT = 57;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_music = 0;
	public static readonly RULE_metainfo = 1;
	public static readonly RULE_headers = 2;
	public static readonly RULE_header_delim = 3;
	public static readonly RULE_header = 4;
	public static readonly RULE_header_name = 5;
	public static readonly RULE_header_values = 6;
	public static readonly RULE_header_value = 7;
	public static readonly RULE_bars = 8;
	public static readonly RULE_concurrent_block = 9;
	public static readonly RULE_staves_n_lyricsrow = 10;
	public static readonly RULE_stavesrow = 11;
	public static readonly RULE_stavesrow_first_notempty = 12;
	public static readonly RULE_stavesrow_first_empty = 13;
	public static readonly RULE_staff = 14;
	public static readonly RULE_empty_staff = 15;
	public static readonly RULE_timed_elements = 16;
	public static readonly RULE_timed_element = 17;
	public static readonly RULE_rest = 18;
	public static readonly RULE_duration_doubled = 19;
	public static readonly RULE_group = 20;
	public static readonly RULE_scoped_group = 21;
	public static readonly RULE_unscoped_group = 22;
	public static readonly RULE_notes = 23;
	public static readonly RULE_notes_start = 24;
	public static readonly RULE_note_start = 25;
	public static readonly RULE_note_tie = 26;
	public static readonly RULE_notes_end = 27;
	public static readonly RULE_note_end_one = 28;
	public static readonly RULE_pitch = 29;
	public static readonly RULE_abs_pitch_range = 30;
	public static readonly RULE_accidental = 31;
	public static readonly RULE_note_end_all = 32;
	public static readonly RULE_newline = 33;
	public static readonly RULE_lyrics_row = 34;
	public static readonly RULE_chord_symbol = 35;
	public static readonly RULE_chord_root = 36;
	public static readonly RULE_chord_type = 37;
	public static readonly RULE_chord_type_add = 38;
	public static readonly RULE_chord_type_aug = 39;
	public static readonly RULE_chord_type_dim = 40;
	public static readonly RULE_chord_type_dom = 41;
	public static readonly RULE_chord_type_hdim = 42;
	public static readonly RULE_chord_type_major = 43;
	public static readonly RULE_chord_type_minor = 44;
	public static readonly RULE_chord_type_sus = 45;
	public static readonly RULE_alterations = 46;
	public static readonly RULE_alteration_with_parens = 47;
	public static readonly RULE_alteration = 48;
	public static readonly RULE_chord_accidental = 49;
	public static readonly RULE_slash_bass = 50;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'!'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'#'", 
                                                            "'@'", "'='", 
                                                            null, null, 
                                                            null, "'*'", 
                                                            null, null, 
                                                            null, "'{'", 
                                                            null, "'0'", 
                                                            null, "'('", 
                                                            "')'", "'['", 
                                                            "']'", null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'/'", 
                                                            "':'", "'}'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "OPEN_SCOPED", 
                                                             "CLOSE_SCOPED", 
                                                             "OPEN_UNSCOPED", 
                                                             "CLOSE_UNSCOPED", 
                                                             "STAFF_SEPARATOR", 
                                                             "AMPLIFIERS", 
                                                             "AMPLIFIER", 
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
                                                             "ZERO", "NON_ZERO", 
                                                             "F_OPEN_SCOPED", 
                                                             "F_CLOSE_SCOPED", 
                                                             "F_OPEN_UNSCOPED", 
                                                             "F_CLOSE_UNSCOPED", 
                                                             "CHORD_TYPE_MINOR", 
                                                             "CHORD_TYPE_MAJOR", 
                                                             "CHORD_TYPE_AUG", 
                                                             "CHORD_TYPE_HDIM", 
                                                             "CHORD_TYPE_DIM", 
                                                             "CHORD_TYPE_DOM", 
                                                             "CHORD_TYPE_SUS", 
                                                             "CHORD_TYPE_ADD", 
                                                             "SLASH", "COLON", 
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
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"music", "metainfo", "headers", "header_delim", "header", "header_name", 
		"header_values", "header_value", "bars", "concurrent_block", "staves_n_lyricsrow", 
		"stavesrow", "stavesrow_first_notempty", "stavesrow_first_empty", "staff", 
		"empty_staff", "timed_elements", "timed_element", "rest", "duration_doubled", 
		"group", "scoped_group", "unscoped_group", "notes", "notes_start", "note_start", 
		"note_tie", "notes_end", "note_end_one", "pitch", "abs_pitch_range", "accidental", 
		"note_end_all", "newline", "lyrics_row", "chord_symbol", "chord_root", 
		"chord_type", "chord_type_add", "chord_type_aug", "chord_type_dim", "chord_type_dom", 
		"chord_type_hdim", "chord_type_major", "chord_type_minor", "chord_type_sus", 
		"alterations", "alteration_with_parens", "alteration", "chord_accidental", 
		"slash_bass",
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
			this.state = 105;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 102;
					_la = this._input.LA(1);
					if(!(_la===23 || _la===24)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
				}
				this.state = 107;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 108;
			this.bars();
			this.state = 113;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & 1073741827) !== 0)) {
				{
				this.state = 111;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 24:
					{
					this.state = 109;
					this.match(MasciiParser.SPACE);
					}
					break;
				case 23:
				case 53:
					{
					this.state = 110;
					this.newline();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 115;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 116;
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
			this.state = 121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===23 || _la===24) {
				{
				{
				this.state = 118;
				_la = this._input.LA(1);
				if(!(_la===23 || _la===24)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				}
				this.state = 123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 124;
			this.match(MasciiParser.OPEN_META);
			this.state = 128;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===48) {
				{
				{
				this.state = 125;
				this.match(MasciiParser.M_NEWLINE);
				}
				}
				this.state = 130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 131;
			this.headers();
			this.state = 135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===48) {
				{
				{
				this.state = 132;
				this.match(MasciiParser.M_NEWLINE);
				}
				}
				this.state = 137;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 138;
			this.match(MasciiParser.CLOSE_META);
			this.state = 142;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 139;
					_la = this._input.LA(1);
					if(!(_la===23 || _la===24)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
				}
				this.state = 144;
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
			this.state = 145;
			this.header();
			this.state = 155;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 147;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 146;
						this.header_delim();
						}
						}
						this.state = 149;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la===48 || _la===49);
					this.state = 151;
					this.header();
					}
					}
				}
				this.state = 157;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
			}
			this.state = 159;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 158;
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
			this.state = 161;
			_la = this._input.LA(1);
			if(!(_la===48 || _la===49)) {
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
			this.state = 163;
			this.header_name();
			this.state = 164;
			this.match(MasciiParser.HEADER_NAME_VAL_SEP);
			this.state = 165;
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
			this.state = 167;
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
			this.state = 170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===45 || _la===57) {
				{
				this.state = 169;
				this.header_value();
				}
			}

			this.state = 178;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===46) {
				{
				{
				this.state = 172;
				this.match(MasciiParser.HEADER_VAL_SEP);
				this.state = 174;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===45 || _la===57) {
					{
					this.state = 173;
					this.header_value();
					}
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
	public header_value(): Header_valueContext {
		let localctx: Header_valueContext = new Header_valueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, MasciiParser.RULE_header_value);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 181;
			_la = this._input.LA(1);
			if(!(_la===45 || _la===57)) {
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
	public bars(): BarsContext {
		let localctx: BarsContext = new BarsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, MasciiParser.RULE_bars);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 183;
			this.concurrent_block();
			this.state = 194;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 184;
					this.newline();
					this.state = 186;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 185;
							this.newline();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 188;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					this.state = 190;
					this.concurrent_block();
					}
					}
				}
				this.state = 196;
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
		this.enterRule(localctx, 18, MasciiParser.RULE_concurrent_block);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 198;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 197;
				this.metainfo();
				}
				break;
			}
			this.state = 200;
			this.staves_n_lyricsrow();
			this.state = 206;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 201;
					this.newline();
					this.state = 202;
					this.staves_n_lyricsrow();
					}
					}
				}
				this.state = 208;
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
		this.enterRule(localctx, 20, MasciiParser.RULE_staves_n_lyricsrow);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 209;
			this.stavesrow();
			this.state = 215;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 210;
					this.newline();
					this.state = 211;
					this.lyrics_row();
					}
					}
				}
				this.state = 217;
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
		this.enterRule(localctx, 22, MasciiParser.RULE_stavesrow);
		try {
			this.state = 220;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 218;
				this.stavesrow_first_notempty();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 219;
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
		this.enterRule(localctx, 24, MasciiParser.RULE_stavesrow_first_notempty);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 222;
			this.staff();
			this.state = 230;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 223;
				this.match(MasciiParser.STAFF_SEPARATOR);
				this.state = 226;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
				case 1:
					{
					this.state = 224;
					this.staff();
					}
					break;
				case 2:
					{
					this.state = 225;
					this.empty_staff();
					}
					break;
				}
				}
				}
				this.state = 232;
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
		this.enterRule(localctx, 26, MasciiParser.RULE_stavesrow_first_empty);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 233;
			this.empty_staff();
			this.state = 239;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 234;
				this.match(MasciiParser.STAFF_SEPARATOR);
				this.state = 237;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 235;
					this.staff();
					}
					break;
				case 2:
					{
					this.state = 236;
					this.empty_staff();
					}
					break;
				}
				}
				}
				this.state = 241;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===5);
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
		this.enterRule(localctx, 28, MasciiParser.RULE_staff);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 243;
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
		this.enterRule(localctx, 30, MasciiParser.RULE_empty_staff);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 246;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				{
				this.state = 245;
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
		this.enterRule(localctx, 32, MasciiParser.RULE_timed_elements);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===24) {
				{
				this.state = 248;
				this.match(MasciiParser.SPACE);
				}
			}

			this.state = 251;
			this.timed_element();
			this.state = 256;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 252;
					this.match(MasciiParser.SPACE);
					this.state = 253;
					this.timed_element();
					}
					}
				}
				this.state = 258;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 25, this._ctx);
			}
			this.state = 260;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 259;
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
		this.enterRule(localctx, 34, MasciiParser.RULE_timed_element);
		let _la: number;
		try {
			let _alt: number;
			this.state = 284;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 262;
				this.chord_symbol();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 264;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
				case 1:
					{
					this.state = 263;
					this.chord_symbol();
					}
					break;
				}
				{
				this.state = 267;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
				case 1:
					{
					this.state = 266;
					localctx._inverse_dot = this._input.LT(1);
					_la = this._input.LA(1);
					if(!(_la===18 || _la===19)) {
					    localctx._inverse_dot = this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					break;
				}
				this.state = 276;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 1:
				case 3:
				case 6:
				case 8:
				case 11:
				case 20:
				case 27:
				case 28:
					{
					this.state = 271;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							this.state = 271;
							this._errHandler.sync(this);
							switch (this._input.LA(1)) {
							case 6:
							case 8:
							case 11:
							case 20:
							case 27:
							case 28:
								{
								this.state = 269;
								this.notes();
								}
								break;
							case 1:
							case 3:
								{
								this.state = 270;
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
						this.state = 273;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 30, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					break;
				case 12:
				case 18:
					{
					this.state = 275;
					this.rest();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 279;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===20) {
					{
					this.state = 278;
					this.duration_doubled();
					}
				}

				this.state = 282;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===18 || _la===19) {
					{
					this.state = 281;
					localctx._normal_dot = this._input.LT(1);
					_la = this._input.LA(1);
					if(!(_la===18 || _la===19)) {
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
	public rest(): RestContext {
		let localctx: RestContext = new RestContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, MasciiParser.RULE_rest);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 286;
			_la = this._input.LA(1);
			if(!(_la===12 || _la===18)) {
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
	public duration_doubled(): Duration_doubledContext {
		let localctx: Duration_doubledContext = new Duration_doubledContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, MasciiParser.RULE_duration_doubled);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 288;
			this.match(MasciiParser.TIE);
			this.state = 290;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 289;
				this.match(MasciiParser.TIE);
				}
				}
				this.state = 292;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===20);
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
		this.enterRule(localctx, 40, MasciiParser.RULE_group);
		try {
			this.state = 296;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 294;
				this.unscoped_group();
				}
				break;
			case 1:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 295;
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
		this.enterRule(localctx, 42, MasciiParser.RULE_scoped_group);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 298;
			this.match(MasciiParser.OPEN_SCOPED);
			this.state = 299;
			this.timed_elements();
			this.state = 300;
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
		this.enterRule(localctx, 44, MasciiParser.RULE_unscoped_group);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 302;
			this.match(MasciiParser.OPEN_UNSCOPED);
			this.state = 303;
			this.timed_elements();
			this.state = 304;
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
		this.enterRule(localctx, 46, MasciiParser.RULE_notes);
		try {
			this.state = 311;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 306;
				this.notes_end();
				this.state = 307;
				this.notes_start();
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 309;
				this.notes_end();
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				{
				this.state = 310;
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
		this.enterRule(localctx, 48, MasciiParser.RULE_notes_start);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 314;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 313;
					this.note_start();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 316;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 38, this._ctx);
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
		this.enterRule(localctx, 50, MasciiParser.RULE_note_start);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 318;
			this.pitch();
			this.state = 320;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				this.state = 319;
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
		this.enterRule(localctx, 52, MasciiParser.RULE_note_tie);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 322;
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
		this.enterRule(localctx, 54, MasciiParser.RULE_notes_end);
		try {
			let _alt: number;
			this.state = 330;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 324;
				this.note_end_all();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 326;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 325;
						this.note_end_one();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 328;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
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
		this.enterRule(localctx, 56, MasciiParser.RULE_note_end_one);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 332;
			this.match(MasciiParser.TIE);
			this.state = 333;
			this.pitch();
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
	public pitch(): PitchContext {
		let localctx: PitchContext = new PitchContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, MasciiParser.RULE_pitch);
		let _la: number;
		try {
			this.state = 344;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 6:
			case 8:
			case 27:
			case 28:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 337;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 27:
				case 28:
					{
					this.state = 335;
					this.abs_pitch_range();
					}
					break;
				case 6:
					{
					this.state = 336;
					this.match(MasciiParser.AMPLIFIERS);
					}
					break;
				case 8:
					break;
				default:
					break;
				}
				this.state = 339;
				this.match(MasciiParser.REL_PITCH);
				this.state = 341;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 253952) !== 0)) {
					{
					this.state = 340;
					this.accidental();
					}
				}

				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 343;
				this.match(MasciiParser.REPEAT_ELEMENT);
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
	public abs_pitch_range(): Abs_pitch_rangeContext {
		let localctx: Abs_pitch_rangeContext = new Abs_pitch_rangeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, MasciiParser.RULE_abs_pitch_range);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 346;
			_la = this._input.LA(1);
			if(!(_la===27 || _la===28)) {
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
	public accidental(): AccidentalContext {
		let localctx: AccidentalContext = new AccidentalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, MasciiParser.RULE_accidental);
		try {
			this.state = 357;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 348;
				this.match(MasciiParser.DBL_FLAT);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 349;
				this.match(MasciiParser.DBL_SHARP);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 350;
				this.match(MasciiParser.NATURAL);
				this.state = 351;
				this.match(MasciiParser.SHARP);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 352;
				this.match(MasciiParser.NATURAL);
				this.state = 353;
				this.match(MasciiParser.FLAT);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 354;
				this.match(MasciiParser.SHARP);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 355;
				this.match(MasciiParser.FLAT);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 356;
				this.match(MasciiParser.NATURAL);
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
	public note_end_all(): Note_end_allContext {
		let localctx: Note_end_allContext = new Note_end_allContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, MasciiParser.RULE_note_end_all);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 359;
			this.match(MasciiParser.TIE);
			this.state = 360;
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
		this.enterRule(localctx, 66, MasciiParser.RULE_newline);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 362;
			_la = this._input.LA(1);
			if(!(_la===23 || _la===53)) {
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
		this.enterRule(localctx, 68, MasciiParser.RULE_lyrics_row);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 364;
			this.match(MasciiParser.OPEN_LYRICS);
			this.state = 365;
			this.match(MasciiParser.LYRICS);
			this.state = 367;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===52) {
				{
				this.state = 366;
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
	// @RuleVersion(0)
	public chord_symbol(): Chord_symbolContext {
		let localctx: Chord_symbolContext = new Chord_symbolContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, MasciiParser.RULE_chord_symbol);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 369;
			this.chord_root();
			this.state = 371;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & 16321) !== 0)) {
				{
				this.state = 370;
				this.chord_type();
				}
			}

			this.state = 374;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 268533762) !== 0)) {
				{
				this.state = 373;
				this.alterations();
				}
			}

			this.state = 377;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===41) {
				{
				this.state = 376;
				this.slash_bass();
				}
			}

			this.state = 379;
			this.match(MasciiParser.COLON);
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
	public chord_root(): Chord_rootContext {
		let localctx: Chord_rootContext = new Chord_rootContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, MasciiParser.RULE_chord_root);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 381;
			this.match(MasciiParser.REL_PITCH);
			this.state = 383;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				{
				this.state = 382;
				this.chord_accidental();
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
	public chord_type(): Chord_typeContext {
		let localctx: Chord_typeContext = new Chord_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, MasciiParser.RULE_chord_type);
		try {
			this.state = 393;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 34:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 385;
				this.chord_type_major();
				}
				break;
			case 33:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 386;
				this.chord_type_minor();
				}
				break;
			case 35:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 387;
				this.chord_type_aug();
				}
				break;
			case 27:
			case 36:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 388;
				this.chord_type_hdim();
				}
				break;
			case 37:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 389;
				this.chord_type_dim();
				}
				break;
			case 38:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 390;
				this.chord_type_dom();
				}
				break;
			case 39:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 391;
				this.chord_type_sus();
				}
				break;
			case 40:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 392;
				this.chord_type_add();
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
	public chord_type_add(): Chord_type_addContext {
		let localctx: Chord_type_addContext = new Chord_type_addContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, MasciiParser.RULE_chord_type_add);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 395;
			this.match(MasciiParser.CHORD_TYPE_ADD);
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
	public chord_type_aug(): Chord_type_augContext {
		let localctx: Chord_type_augContext = new Chord_type_augContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, MasciiParser.RULE_chord_type_aug);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 397;
			this.match(MasciiParser.CHORD_TYPE_AUG);
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
	public chord_type_dim(): Chord_type_dimContext {
		let localctx: Chord_type_dimContext = new Chord_type_dimContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, MasciiParser.RULE_chord_type_dim);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 399;
			this.match(MasciiParser.CHORD_TYPE_DIM);
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
	public chord_type_dom(): Chord_type_domContext {
		let localctx: Chord_type_domContext = new Chord_type_domContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, MasciiParser.RULE_chord_type_dom);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 401;
			this.match(MasciiParser.CHORD_TYPE_DOM);
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
	public chord_type_hdim(): Chord_type_hdimContext {
		let localctx: Chord_type_hdimContext = new Chord_type_hdimContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, MasciiParser.RULE_chord_type_hdim);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 403;
			_la = this._input.LA(1);
			if(!(_la===27 || _la===36)) {
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
	public chord_type_major(): Chord_type_majorContext {
		let localctx: Chord_type_majorContext = new Chord_type_majorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, MasciiParser.RULE_chord_type_major);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 405;
			this.match(MasciiParser.CHORD_TYPE_MAJOR);
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
	public chord_type_minor(): Chord_type_minorContext {
		let localctx: Chord_type_minorContext = new Chord_type_minorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, MasciiParser.RULE_chord_type_minor);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 407;
			this.match(MasciiParser.CHORD_TYPE_MINOR);
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
	public chord_type_sus(): Chord_type_susContext {
		let localctx: Chord_type_susContext = new Chord_type_susContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, MasciiParser.RULE_chord_type_sus);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 409;
			this.match(MasciiParser.CHORD_TYPE_SUS);
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
	public alterations(): AlterationsContext {
		let localctx: AlterationsContext = new AlterationsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, MasciiParser.RULE_alterations);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 413;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 413;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 15:
				case 16:
				case 28:
					{
					this.state = 411;
					this.alteration();
					}
					break;
				case 1:
					{
					this.state = 412;
					this.alteration_with_parens();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 415;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 268533762) !== 0));
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
	public alteration_with_parens(): Alteration_with_parensContext {
		let localctx: Alteration_with_parensContext = new Alteration_with_parensContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, MasciiParser.RULE_alteration_with_parens);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 417;
			this.match(MasciiParser.OPEN_SCOPED);
			this.state = 418;
			this.alteration();
			this.state = 425;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 285310976) !== 0)) {
				{
				{
				this.state = 420;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===24) {
					{
					this.state = 419;
					this.match(MasciiParser.SPACE);
					}
				}

				this.state = 422;
				this.alteration();
				}
				}
				this.state = 427;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 428;
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
	public alteration(): AlterationContext {
		let localctx: AlterationContext = new AlterationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, MasciiParser.RULE_alteration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 431;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15 || _la===16) {
				{
				this.state = 430;
				this.chord_accidental();
				}
			}

			this.state = 433;
			this.match(MasciiParser.NON_ZERO);
			this.state = 435;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				{
				this.state = 434;
				this.match(MasciiParser.NON_ZERO);
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
	public chord_accidental(): Chord_accidentalContext {
		let localctx: Chord_accidentalContext = new Chord_accidentalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, MasciiParser.RULE_chord_accidental);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 437;
			_la = this._input.LA(1);
			if(!(_la===15 || _la===16)) {
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
	public slash_bass(): Slash_bassContext {
		let localctx: Slash_bassContext = new Slash_bassContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, MasciiParser.RULE_slash_bass);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 439;
			this.match(MasciiParser.SLASH);
			this.state = 440;
			this.match(MasciiParser.REL_PITCH);
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

	public static readonly _serializedATN: number[] = [4,1,57,443,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,
	39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,
	7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,1,0,5,0,104,8,0,10,0,12,0,
	107,9,0,1,0,1,0,1,0,5,0,112,8,0,10,0,12,0,115,9,0,1,0,1,0,1,1,5,1,120,8,
	1,10,1,12,1,123,9,1,1,1,1,1,5,1,127,8,1,10,1,12,1,130,9,1,1,1,1,1,5,1,134,
	8,1,10,1,12,1,137,9,1,1,1,1,1,5,1,141,8,1,10,1,12,1,144,9,1,1,2,1,2,4,2,
	148,8,2,11,2,12,2,149,1,2,1,2,5,2,154,8,2,10,2,12,2,157,9,2,1,2,3,2,160,
	8,2,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,6,3,6,171,8,6,1,6,1,6,3,6,175,8,6,
	5,6,177,8,6,10,6,12,6,180,9,6,1,7,1,7,1,8,1,8,1,8,4,8,187,8,8,11,8,12,8,
	188,1,8,1,8,5,8,193,8,8,10,8,12,8,196,9,8,1,9,3,9,199,8,9,1,9,1,9,1,9,1,
	9,5,9,205,8,9,10,9,12,9,208,9,9,1,10,1,10,1,10,1,10,5,10,214,8,10,10,10,
	12,10,217,9,10,1,11,1,11,3,11,221,8,11,1,12,1,12,1,12,1,12,3,12,227,8,12,
	5,12,229,8,12,10,12,12,12,232,9,12,1,13,1,13,1,13,1,13,3,13,238,8,13,4,
	13,240,8,13,11,13,12,13,241,1,14,1,14,1,15,3,15,247,8,15,1,16,3,16,250,
	8,16,1,16,1,16,1,16,5,16,255,8,16,10,16,12,16,258,9,16,1,16,3,16,261,8,
	16,1,17,1,17,3,17,265,8,17,1,17,3,17,268,8,17,1,17,1,17,4,17,272,8,17,11,
	17,12,17,273,1,17,3,17,277,8,17,1,17,3,17,280,8,17,1,17,3,17,283,8,17,3,
	17,285,8,17,1,18,1,18,1,19,1,19,4,19,291,8,19,11,19,12,19,292,1,20,1,20,
	3,20,297,8,20,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,
	23,1,23,3,23,312,8,23,1,24,4,24,315,8,24,11,24,12,24,316,1,25,1,25,3,25,
	321,8,25,1,26,1,26,1,27,1,27,4,27,327,8,27,11,27,12,27,328,3,27,331,8,27,
	1,28,1,28,1,28,1,29,1,29,3,29,338,8,29,1,29,1,29,3,29,342,8,29,1,29,3,29,
	345,8,29,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,3,31,358,
	8,31,1,32,1,32,1,32,1,33,1,33,1,34,1,34,1,34,3,34,368,8,34,1,35,1,35,3,
	35,372,8,35,1,35,3,35,375,8,35,1,35,3,35,378,8,35,1,35,1,35,1,36,1,36,3,
	36,384,8,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,3,37,394,8,37,1,38,
	1,38,1,39,1,39,1,40,1,40,1,41,1,41,1,42,1,42,1,43,1,43,1,44,1,44,1,45,1,
	45,1,46,1,46,4,46,414,8,46,11,46,12,46,415,1,47,1,47,1,47,3,47,421,8,47,
	1,47,5,47,424,8,47,10,47,12,47,427,9,47,1,47,1,47,1,48,3,48,432,8,48,1,
	48,1,48,3,48,436,8,48,1,49,1,49,1,50,1,50,1,50,1,50,0,0,51,0,2,4,6,8,10,
	12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,
	60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,0,9,1,0,
	23,24,1,0,48,49,2,0,45,45,57,57,1,0,18,19,2,0,12,12,18,18,1,0,27,28,2,0,
	23,23,53,53,2,0,27,27,36,36,1,0,15,16,462,0,105,1,0,0,0,2,121,1,0,0,0,4,
	145,1,0,0,0,6,161,1,0,0,0,8,163,1,0,0,0,10,167,1,0,0,0,12,170,1,0,0,0,14,
	181,1,0,0,0,16,183,1,0,0,0,18,198,1,0,0,0,20,209,1,0,0,0,22,220,1,0,0,0,
	24,222,1,0,0,0,26,233,1,0,0,0,28,243,1,0,0,0,30,246,1,0,0,0,32,249,1,0,
	0,0,34,284,1,0,0,0,36,286,1,0,0,0,38,288,1,0,0,0,40,296,1,0,0,0,42,298,
	1,0,0,0,44,302,1,0,0,0,46,311,1,0,0,0,48,314,1,0,0,0,50,318,1,0,0,0,52,
	322,1,0,0,0,54,330,1,0,0,0,56,332,1,0,0,0,58,344,1,0,0,0,60,346,1,0,0,0,
	62,357,1,0,0,0,64,359,1,0,0,0,66,362,1,0,0,0,68,364,1,0,0,0,70,369,1,0,
	0,0,72,381,1,0,0,0,74,393,1,0,0,0,76,395,1,0,0,0,78,397,1,0,0,0,80,399,
	1,0,0,0,82,401,1,0,0,0,84,403,1,0,0,0,86,405,1,0,0,0,88,407,1,0,0,0,90,
	409,1,0,0,0,92,413,1,0,0,0,94,417,1,0,0,0,96,431,1,0,0,0,98,437,1,0,0,0,
	100,439,1,0,0,0,102,104,7,0,0,0,103,102,1,0,0,0,104,107,1,0,0,0,105,103,
	1,0,0,0,105,106,1,0,0,0,106,108,1,0,0,0,107,105,1,0,0,0,108,113,3,16,8,
	0,109,112,5,24,0,0,110,112,3,66,33,0,111,109,1,0,0,0,111,110,1,0,0,0,112,
	115,1,0,0,0,113,111,1,0,0,0,113,114,1,0,0,0,114,116,1,0,0,0,115,113,1,0,
	0,0,116,117,5,0,0,1,117,1,1,0,0,0,118,120,7,0,0,0,119,118,1,0,0,0,120,123,
	1,0,0,0,121,119,1,0,0,0,121,122,1,0,0,0,122,124,1,0,0,0,123,121,1,0,0,0,
	124,128,5,25,0,0,125,127,5,48,0,0,126,125,1,0,0,0,127,130,1,0,0,0,128,126,
	1,0,0,0,128,129,1,0,0,0,129,131,1,0,0,0,130,128,1,0,0,0,131,135,3,4,2,0,
	132,134,5,48,0,0,133,132,1,0,0,0,134,137,1,0,0,0,135,133,1,0,0,0,135,136,
	1,0,0,0,136,138,1,0,0,0,137,135,1,0,0,0,138,142,5,43,0,0,139,141,7,0,0,
	0,140,139,1,0,0,0,141,144,1,0,0,0,142,140,1,0,0,0,142,143,1,0,0,0,143,3,
	1,0,0,0,144,142,1,0,0,0,145,155,3,8,4,0,146,148,3,6,3,0,147,146,1,0,0,0,
	148,149,1,0,0,0,149,147,1,0,0,0,149,150,1,0,0,0,150,151,1,0,0,0,151,152,
	3,8,4,0,152,154,1,0,0,0,153,147,1,0,0,0,154,157,1,0,0,0,155,153,1,0,0,0,
	155,156,1,0,0,0,156,159,1,0,0,0,157,155,1,0,0,0,158,160,3,6,3,0,159,158,
	1,0,0,0,159,160,1,0,0,0,160,5,1,0,0,0,161,162,7,1,0,0,162,7,1,0,0,0,163,
	164,3,10,5,0,164,165,5,44,0,0,165,166,3,12,6,0,166,9,1,0,0,0,167,168,5,
	45,0,0,168,11,1,0,0,0,169,171,3,14,7,0,170,169,1,0,0,0,170,171,1,0,0,0,
	171,178,1,0,0,0,172,174,5,46,0,0,173,175,3,14,7,0,174,173,1,0,0,0,174,175,
	1,0,0,0,175,177,1,0,0,0,176,172,1,0,0,0,177,180,1,0,0,0,178,176,1,0,0,0,
	178,179,1,0,0,0,179,13,1,0,0,0,180,178,1,0,0,0,181,182,7,2,0,0,182,15,1,
	0,0,0,183,194,3,18,9,0,184,186,3,66,33,0,185,187,3,66,33,0,186,185,1,0,
	0,0,187,188,1,0,0,0,188,186,1,0,0,0,188,189,1,0,0,0,189,190,1,0,0,0,190,
	191,3,18,9,0,191,193,1,0,0,0,192,184,1,0,0,0,193,196,1,0,0,0,194,192,1,
	0,0,0,194,195,1,0,0,0,195,17,1,0,0,0,196,194,1,0,0,0,197,199,3,2,1,0,198,
	197,1,0,0,0,198,199,1,0,0,0,199,200,1,0,0,0,200,206,3,20,10,0,201,202,3,
	66,33,0,202,203,3,20,10,0,203,205,1,0,0,0,204,201,1,0,0,0,205,208,1,0,0,
	0,206,204,1,0,0,0,206,207,1,0,0,0,207,19,1,0,0,0,208,206,1,0,0,0,209,215,
	3,22,11,0,210,211,3,66,33,0,211,212,3,68,34,0,212,214,1,0,0,0,213,210,1,
	0,0,0,214,217,1,0,0,0,215,213,1,0,0,0,215,216,1,0,0,0,216,21,1,0,0,0,217,
	215,1,0,0,0,218,221,3,24,12,0,219,221,3,26,13,0,220,218,1,0,0,0,220,219,
	1,0,0,0,221,23,1,0,0,0,222,230,3,28,14,0,223,226,5,5,0,0,224,227,3,28,14,
	0,225,227,3,30,15,0,226,224,1,0,0,0,226,225,1,0,0,0,227,229,1,0,0,0,228,
	223,1,0,0,0,229,232,1,0,0,0,230,228,1,0,0,0,230,231,1,0,0,0,231,25,1,0,
	0,0,232,230,1,0,0,0,233,239,3,30,15,0,234,237,5,5,0,0,235,238,3,28,14,0,
	236,238,3,30,15,0,237,235,1,0,0,0,237,236,1,0,0,0,238,240,1,0,0,0,239,234,
	1,0,0,0,240,241,1,0,0,0,241,239,1,0,0,0,241,242,1,0,0,0,242,27,1,0,0,0,
	243,244,3,32,16,0,244,29,1,0,0,0,245,247,5,24,0,0,246,245,1,0,0,0,246,247,
	1,0,0,0,247,31,1,0,0,0,248,250,5,24,0,0,249,248,1,0,0,0,249,250,1,0,0,0,
	250,251,1,0,0,0,251,256,3,34,17,0,252,253,5,24,0,0,253,255,3,34,17,0,254,
	252,1,0,0,0,255,258,1,0,0,0,256,254,1,0,0,0,256,257,1,0,0,0,257,260,1,0,
	0,0,258,256,1,0,0,0,259,261,5,24,0,0,260,259,1,0,0,0,260,261,1,0,0,0,261,
	33,1,0,0,0,262,285,3,70,35,0,263,265,3,70,35,0,264,263,1,0,0,0,264,265,
	1,0,0,0,265,267,1,0,0,0,266,268,7,3,0,0,267,266,1,0,0,0,267,268,1,0,0,0,
	268,276,1,0,0,0,269,272,3,46,23,0,270,272,3,40,20,0,271,269,1,0,0,0,271,
	270,1,0,0,0,272,273,1,0,0,0,273,271,1,0,0,0,273,274,1,0,0,0,274,277,1,0,
	0,0,275,277,3,36,18,0,276,271,1,0,0,0,276,275,1,0,0,0,277,279,1,0,0,0,278,
	280,3,38,19,0,279,278,1,0,0,0,279,280,1,0,0,0,280,282,1,0,0,0,281,283,7,
	3,0,0,282,281,1,0,0,0,282,283,1,0,0,0,283,285,1,0,0,0,284,262,1,0,0,0,284,
	264,1,0,0,0,285,35,1,0,0,0,286,287,7,4,0,0,287,37,1,0,0,0,288,290,5,20,
	0,0,289,291,5,20,0,0,290,289,1,0,0,0,291,292,1,0,0,0,292,290,1,0,0,0,292,
	293,1,0,0,0,293,39,1,0,0,0,294,297,3,44,22,0,295,297,3,42,21,0,296,294,
	1,0,0,0,296,295,1,0,0,0,297,41,1,0,0,0,298,299,5,1,0,0,299,300,3,32,16,
	0,300,301,5,2,0,0,301,43,1,0,0,0,302,303,5,3,0,0,303,304,3,32,16,0,304,
	305,5,4,0,0,305,45,1,0,0,0,306,307,3,54,27,0,307,308,3,48,24,0,308,312,
	1,0,0,0,309,312,3,54,27,0,310,312,3,48,24,0,311,306,1,0,0,0,311,309,1,0,
	0,0,311,310,1,0,0,0,312,47,1,0,0,0,313,315,3,50,25,0,314,313,1,0,0,0,315,
	316,1,0,0,0,316,314,1,0,0,0,316,317,1,0,0,0,317,49,1,0,0,0,318,320,3,58,
	29,0,319,321,3,52,26,0,320,319,1,0,0,0,320,321,1,0,0,0,321,51,1,0,0,0,322,
	323,5,20,0,0,323,53,1,0,0,0,324,331,3,64,32,0,325,327,3,56,28,0,326,325,
	1,0,0,0,327,328,1,0,0,0,328,326,1,0,0,0,328,329,1,0,0,0,329,331,1,0,0,0,
	330,324,1,0,0,0,330,326,1,0,0,0,331,55,1,0,0,0,332,333,5,20,0,0,333,334,
	3,58,29,0,334,57,1,0,0,0,335,338,3,60,30,0,336,338,5,6,0,0,337,335,1,0,
	0,0,337,336,1,0,0,0,337,338,1,0,0,0,338,339,1,0,0,0,339,341,5,8,0,0,340,
	342,3,62,31,0,341,340,1,0,0,0,341,342,1,0,0,0,342,345,1,0,0,0,343,345,5,
	11,0,0,344,337,1,0,0,0,344,343,1,0,0,0,345,59,1,0,0,0,346,347,7,5,0,0,347,
	61,1,0,0,0,348,358,5,14,0,0,349,358,5,13,0,0,350,351,5,17,0,0,351,358,5,
	15,0,0,352,353,5,17,0,0,353,358,5,16,0,0,354,358,5,15,0,0,355,358,5,16,
	0,0,356,358,5,17,0,0,357,348,1,0,0,0,357,349,1,0,0,0,357,350,1,0,0,0,357,
	352,1,0,0,0,357,354,1,0,0,0,357,355,1,0,0,0,357,356,1,0,0,0,358,63,1,0,
	0,0,359,360,5,20,0,0,360,361,5,21,0,0,361,65,1,0,0,0,362,363,7,6,0,0,363,
	67,1,0,0,0,364,365,5,26,0,0,365,367,5,54,0,0,366,368,5,52,0,0,367,366,1,
	0,0,0,367,368,1,0,0,0,368,69,1,0,0,0,369,371,3,72,36,0,370,372,3,74,37,
	0,371,370,1,0,0,0,371,372,1,0,0,0,372,374,1,0,0,0,373,375,3,92,46,0,374,
	373,1,0,0,0,374,375,1,0,0,0,375,377,1,0,0,0,376,378,3,100,50,0,377,376,
	1,0,0,0,377,378,1,0,0,0,378,379,1,0,0,0,379,380,5,42,0,0,380,71,1,0,0,0,
	381,383,5,8,0,0,382,384,3,98,49,0,383,382,1,0,0,0,383,384,1,0,0,0,384,73,
	1,0,0,0,385,394,3,86,43,0,386,394,3,88,44,0,387,394,3,78,39,0,388,394,3,
	84,42,0,389,394,3,80,40,0,390,394,3,82,41,0,391,394,3,90,45,0,392,394,3,
	76,38,0,393,385,1,0,0,0,393,386,1,0,0,0,393,387,1,0,0,0,393,388,1,0,0,0,
	393,389,1,0,0,0,393,390,1,0,0,0,393,391,1,0,0,0,393,392,1,0,0,0,394,75,
	1,0,0,0,395,396,5,40,0,0,396,77,1,0,0,0,397,398,5,35,0,0,398,79,1,0,0,0,
	399,400,5,37,0,0,400,81,1,0,0,0,401,402,5,38,0,0,402,83,1,0,0,0,403,404,
	7,7,0,0,404,85,1,0,0,0,405,406,5,34,0,0,406,87,1,0,0,0,407,408,5,33,0,0,
	408,89,1,0,0,0,409,410,5,39,0,0,410,91,1,0,0,0,411,414,3,96,48,0,412,414,
	3,94,47,0,413,411,1,0,0,0,413,412,1,0,0,0,414,415,1,0,0,0,415,413,1,0,0,
	0,415,416,1,0,0,0,416,93,1,0,0,0,417,418,5,1,0,0,418,425,3,96,48,0,419,
	421,5,24,0,0,420,419,1,0,0,0,420,421,1,0,0,0,421,422,1,0,0,0,422,424,3,
	96,48,0,423,420,1,0,0,0,424,427,1,0,0,0,425,423,1,0,0,0,425,426,1,0,0,0,
	426,428,1,0,0,0,427,425,1,0,0,0,428,429,5,2,0,0,429,95,1,0,0,0,430,432,
	3,98,49,0,431,430,1,0,0,0,431,432,1,0,0,0,432,433,1,0,0,0,433,435,5,28,
	0,0,434,436,5,28,0,0,435,434,1,0,0,0,435,436,1,0,0,0,436,97,1,0,0,0,437,
	438,7,8,0,0,438,99,1,0,0,0,439,440,5,41,0,0,440,441,5,8,0,0,441,101,1,0,
	0,0,58,105,111,113,121,128,135,142,149,155,159,170,174,178,188,194,198,
	206,215,220,226,230,237,241,246,249,256,260,264,267,271,273,276,279,282,
	284,292,296,311,316,320,328,330,337,341,344,357,367,371,374,377,383,393,
	413,415,420,425,431,435];

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
	public header_value_list(): Header_valueContext[] {
		return this.getTypedRuleContexts(Header_valueContext) as Header_valueContext[];
	}
	public header_value(i: number): Header_valueContext {
		return this.getTypedRuleContext(Header_valueContext, i) as Header_valueContext;
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


export class Header_valueContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public HEADER_ENTITY(): TerminalNode {
		return this.getToken(MasciiParser.HEADER_ENTITY, 0);
	}
	public QUOTED_TEXT(): TerminalNode {
		return this.getToken(MasciiParser.QUOTED_TEXT, 0);
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_header_value;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterHeader_value) {
	 		listener.enterHeader_value(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitHeader_value) {
	 		listener.exitHeader_value(this);
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
	public chord_symbol(): Chord_symbolContext {
		return this.getTypedRuleContext(Chord_symbolContext, 0) as Chord_symbolContext;
	}
	public rest(): RestContext {
		return this.getTypedRuleContext(RestContext, 0) as RestContext;
	}
	public duration_doubled(): Duration_doubledContext {
		return this.getTypedRuleContext(Duration_doubledContext, 0) as Duration_doubledContext;
	}
	public DOTTED_list(): TerminalNode[] {
	    	return this.getTokens(MasciiParser.DOTTED);
	}
	public DOTTED(i: number): TerminalNode {
		return this.getToken(MasciiParser.DOTTED, i);
	}
	public MULTI_DOTTED_list(): TerminalNode[] {
	    	return this.getTokens(MasciiParser.MULTI_DOTTED);
	}
	public MULTI_DOTTED(i: number): TerminalNode {
		return this.getToken(MasciiParser.MULTI_DOTTED, i);
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


export class RestContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public REST(): TerminalNode {
		return this.getToken(MasciiParser.REST, 0);
	}
	public DOTTED(): TerminalNode {
		return this.getToken(MasciiParser.DOTTED, 0);
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_rest;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterRest) {
	 		listener.enterRest(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitRest) {
	 		listener.exitRest(this);
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
	public pitch(): PitchContext {
		return this.getTypedRuleContext(PitchContext, 0) as PitchContext;
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
	public pitch(): PitchContext {
		return this.getTypedRuleContext(PitchContext, 0) as PitchContext;
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


export class PitchContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public REL_PITCH(): TerminalNode {
		return this.getToken(MasciiParser.REL_PITCH, 0);
	}
	public abs_pitch_range(): Abs_pitch_rangeContext {
		return this.getTypedRuleContext(Abs_pitch_rangeContext, 0) as Abs_pitch_rangeContext;
	}
	public AMPLIFIERS(): TerminalNode {
		return this.getToken(MasciiParser.AMPLIFIERS, 0);
	}
	public accidental(): AccidentalContext {
		return this.getTypedRuleContext(AccidentalContext, 0) as AccidentalContext;
	}
	public REPEAT_ELEMENT(): TerminalNode {
		return this.getToken(MasciiParser.REPEAT_ELEMENT, 0);
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_pitch;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterPitch) {
	 		listener.enterPitch(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitPitch) {
	 		listener.exitPitch(this);
		}
	}
}


export class Abs_pitch_rangeContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ZERO(): TerminalNode {
		return this.getToken(MasciiParser.ZERO, 0);
	}
	public NON_ZERO(): TerminalNode {
		return this.getToken(MasciiParser.NON_ZERO, 0);
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_abs_pitch_range;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterAbs_pitch_range) {
	 		listener.enterAbs_pitch_range(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitAbs_pitch_range) {
	 		listener.exitAbs_pitch_range(this);
		}
	}
}


export class AccidentalContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DBL_FLAT(): TerminalNode {
		return this.getToken(MasciiParser.DBL_FLAT, 0);
	}
	public DBL_SHARP(): TerminalNode {
		return this.getToken(MasciiParser.DBL_SHARP, 0);
	}
	public NATURAL(): TerminalNode {
		return this.getToken(MasciiParser.NATURAL, 0);
	}
	public SHARP(): TerminalNode {
		return this.getToken(MasciiParser.SHARP, 0);
	}
	public FLAT(): TerminalNode {
		return this.getToken(MasciiParser.FLAT, 0);
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_accidental;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterAccidental) {
	 		listener.enterAccidental(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitAccidental) {
	 		listener.exitAccidental(this);
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


export class Chord_symbolContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public chord_root(): Chord_rootContext {
		return this.getTypedRuleContext(Chord_rootContext, 0) as Chord_rootContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(MasciiParser.COLON, 0);
	}
	public chord_type(): Chord_typeContext {
		return this.getTypedRuleContext(Chord_typeContext, 0) as Chord_typeContext;
	}
	public alterations(): AlterationsContext {
		return this.getTypedRuleContext(AlterationsContext, 0) as AlterationsContext;
	}
	public slash_bass(): Slash_bassContext {
		return this.getTypedRuleContext(Slash_bassContext, 0) as Slash_bassContext;
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_chord_symbol;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterChord_symbol) {
	 		listener.enterChord_symbol(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitChord_symbol) {
	 		listener.exitChord_symbol(this);
		}
	}
}


export class Chord_rootContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public REL_PITCH(): TerminalNode {
		return this.getToken(MasciiParser.REL_PITCH, 0);
	}
	public chord_accidental(): Chord_accidentalContext {
		return this.getTypedRuleContext(Chord_accidentalContext, 0) as Chord_accidentalContext;
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_chord_root;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterChord_root) {
	 		listener.enterChord_root(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitChord_root) {
	 		listener.exitChord_root(this);
		}
	}
}


export class Chord_typeContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public chord_type_major(): Chord_type_majorContext {
		return this.getTypedRuleContext(Chord_type_majorContext, 0) as Chord_type_majorContext;
	}
	public chord_type_minor(): Chord_type_minorContext {
		return this.getTypedRuleContext(Chord_type_minorContext, 0) as Chord_type_minorContext;
	}
	public chord_type_aug(): Chord_type_augContext {
		return this.getTypedRuleContext(Chord_type_augContext, 0) as Chord_type_augContext;
	}
	public chord_type_hdim(): Chord_type_hdimContext {
		return this.getTypedRuleContext(Chord_type_hdimContext, 0) as Chord_type_hdimContext;
	}
	public chord_type_dim(): Chord_type_dimContext {
		return this.getTypedRuleContext(Chord_type_dimContext, 0) as Chord_type_dimContext;
	}
	public chord_type_dom(): Chord_type_domContext {
		return this.getTypedRuleContext(Chord_type_domContext, 0) as Chord_type_domContext;
	}
	public chord_type_sus(): Chord_type_susContext {
		return this.getTypedRuleContext(Chord_type_susContext, 0) as Chord_type_susContext;
	}
	public chord_type_add(): Chord_type_addContext {
		return this.getTypedRuleContext(Chord_type_addContext, 0) as Chord_type_addContext;
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_chord_type;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterChord_type) {
	 		listener.enterChord_type(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitChord_type) {
	 		listener.exitChord_type(this);
		}
	}
}


export class Chord_type_addContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHORD_TYPE_ADD(): TerminalNode {
		return this.getToken(MasciiParser.CHORD_TYPE_ADD, 0);
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_chord_type_add;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterChord_type_add) {
	 		listener.enterChord_type_add(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitChord_type_add) {
	 		listener.exitChord_type_add(this);
		}
	}
}


export class Chord_type_augContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHORD_TYPE_AUG(): TerminalNode {
		return this.getToken(MasciiParser.CHORD_TYPE_AUG, 0);
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_chord_type_aug;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterChord_type_aug) {
	 		listener.enterChord_type_aug(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitChord_type_aug) {
	 		listener.exitChord_type_aug(this);
		}
	}
}


export class Chord_type_dimContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHORD_TYPE_DIM(): TerminalNode {
		return this.getToken(MasciiParser.CHORD_TYPE_DIM, 0);
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_chord_type_dim;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterChord_type_dim) {
	 		listener.enterChord_type_dim(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitChord_type_dim) {
	 		listener.exitChord_type_dim(this);
		}
	}
}


export class Chord_type_domContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHORD_TYPE_DOM(): TerminalNode {
		return this.getToken(MasciiParser.CHORD_TYPE_DOM, 0);
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_chord_type_dom;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterChord_type_dom) {
	 		listener.enterChord_type_dom(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitChord_type_dom) {
	 		listener.exitChord_type_dom(this);
		}
	}
}


export class Chord_type_hdimContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHORD_TYPE_HDIM(): TerminalNode {
		return this.getToken(MasciiParser.CHORD_TYPE_HDIM, 0);
	}
	public ZERO(): TerminalNode {
		return this.getToken(MasciiParser.ZERO, 0);
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_chord_type_hdim;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterChord_type_hdim) {
	 		listener.enterChord_type_hdim(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitChord_type_hdim) {
	 		listener.exitChord_type_hdim(this);
		}
	}
}


export class Chord_type_majorContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHORD_TYPE_MAJOR(): TerminalNode {
		return this.getToken(MasciiParser.CHORD_TYPE_MAJOR, 0);
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_chord_type_major;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterChord_type_major) {
	 		listener.enterChord_type_major(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitChord_type_major) {
	 		listener.exitChord_type_major(this);
		}
	}
}


export class Chord_type_minorContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHORD_TYPE_MINOR(): TerminalNode {
		return this.getToken(MasciiParser.CHORD_TYPE_MINOR, 0);
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_chord_type_minor;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterChord_type_minor) {
	 		listener.enterChord_type_minor(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitChord_type_minor) {
	 		listener.exitChord_type_minor(this);
		}
	}
}


export class Chord_type_susContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHORD_TYPE_SUS(): TerminalNode {
		return this.getToken(MasciiParser.CHORD_TYPE_SUS, 0);
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_chord_type_sus;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterChord_type_sus) {
	 		listener.enterChord_type_sus(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitChord_type_sus) {
	 		listener.exitChord_type_sus(this);
		}
	}
}


export class AlterationsContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public alteration_list(): AlterationContext[] {
		return this.getTypedRuleContexts(AlterationContext) as AlterationContext[];
	}
	public alteration(i: number): AlterationContext {
		return this.getTypedRuleContext(AlterationContext, i) as AlterationContext;
	}
	public alteration_with_parens_list(): Alteration_with_parensContext[] {
		return this.getTypedRuleContexts(Alteration_with_parensContext) as Alteration_with_parensContext[];
	}
	public alteration_with_parens(i: number): Alteration_with_parensContext {
		return this.getTypedRuleContext(Alteration_with_parensContext, i) as Alteration_with_parensContext;
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_alterations;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterAlterations) {
	 		listener.enterAlterations(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitAlterations) {
	 		listener.exitAlterations(this);
		}
	}
}


export class Alteration_with_parensContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_SCOPED(): TerminalNode {
		return this.getToken(MasciiParser.OPEN_SCOPED, 0);
	}
	public alteration_list(): AlterationContext[] {
		return this.getTypedRuleContexts(AlterationContext) as AlterationContext[];
	}
	public alteration(i: number): AlterationContext {
		return this.getTypedRuleContext(AlterationContext, i) as AlterationContext;
	}
	public CLOSE_SCOPED(): TerminalNode {
		return this.getToken(MasciiParser.CLOSE_SCOPED, 0);
	}
	public SPACE_list(): TerminalNode[] {
	    	return this.getTokens(MasciiParser.SPACE);
	}
	public SPACE(i: number): TerminalNode {
		return this.getToken(MasciiParser.SPACE, i);
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_alteration_with_parens;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterAlteration_with_parens) {
	 		listener.enterAlteration_with_parens(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitAlteration_with_parens) {
	 		listener.exitAlteration_with_parens(this);
		}
	}
}


export class AlterationContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NON_ZERO_list(): TerminalNode[] {
	    	return this.getTokens(MasciiParser.NON_ZERO);
	}
	public NON_ZERO(i: number): TerminalNode {
		return this.getToken(MasciiParser.NON_ZERO, i);
	}
	public chord_accidental(): Chord_accidentalContext {
		return this.getTypedRuleContext(Chord_accidentalContext, 0) as Chord_accidentalContext;
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_alteration;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterAlteration) {
	 		listener.enterAlteration(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitAlteration) {
	 		listener.exitAlteration(this);
		}
	}
}


export class Chord_accidentalContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SHARP(): TerminalNode {
		return this.getToken(MasciiParser.SHARP, 0);
	}
	public FLAT(): TerminalNode {
		return this.getToken(MasciiParser.FLAT, 0);
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_chord_accidental;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterChord_accidental) {
	 		listener.enterChord_accidental(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitChord_accidental) {
	 		listener.exitChord_accidental(this);
		}
	}
}


export class Slash_bassContext extends ParserRuleContext {
	constructor(parser?: MasciiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SLASH(): TerminalNode {
		return this.getToken(MasciiParser.SLASH, 0);
	}
	public REL_PITCH(): TerminalNode {
		return this.getToken(MasciiParser.REL_PITCH, 0);
	}
    public get ruleIndex(): number {
    	return MasciiParser.RULE_slash_bass;
	}
	public enterRule(listener: MasciiParserListener): void {
	    if(listener.enterSlash_bass) {
	 		listener.enterSlash_bass(this);
		}
	}
	public exitRule(listener: MasciiParserListener): void {
	    if(listener.exitSlash_bass) {
	 		listener.exitSlash_bass(this);
		}
	}
}
