// Generated from MasciiParser.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { MusicContext } from "./MasciiParser.js";
import { MetainfoContext } from "./MasciiParser.js";
import { HeadersContext } from "./MasciiParser.js";
import { Header_delimContext } from "./MasciiParser.js";
import { HeaderContext } from "./MasciiParser.js";
import { Header_nameContext } from "./MasciiParser.js";
import { Header_valuesContext } from "./MasciiParser.js";
import { BarsContext } from "./MasciiParser.js";
import { Concurrent_blockContext } from "./MasciiParser.js";
import { Staves_n_lyricsrowContext } from "./MasciiParser.js";
import { StavesrowContext } from "./MasciiParser.js";
import { Stavesrow_first_notemptyContext } from "./MasciiParser.js";
import { Stavesrow_first_emptyContext } from "./MasciiParser.js";
import { StaffContext } from "./MasciiParser.js";
import { Empty_staffContext } from "./MasciiParser.js";
import { Timed_elementsContext } from "./MasciiParser.js";
import { Timed_elementContext } from "./MasciiParser.js";
import { Duration_doubledContext } from "./MasciiParser.js";
import { GroupContext } from "./MasciiParser.js";
import { Scoped_groupContext } from "./MasciiParser.js";
import { Unscoped_groupContext } from "./MasciiParser.js";
import { NotesContext } from "./MasciiParser.js";
import { Notes_startContext } from "./MasciiParser.js";
import { Note_startContext } from "./MasciiParser.js";
import { Note_tieContext } from "./MasciiParser.js";
import { Notes_endContext } from "./MasciiParser.js";
import { Note_end_oneContext } from "./MasciiParser.js";
import { Note_end_allContext } from "./MasciiParser.js";
import { NewlineContext } from "./MasciiParser.js";
import { Lyrics_rowContext } from "./MasciiParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MasciiParser`.
 */
export default class MasciiParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `MasciiParser.music`.
	 * @param ctx the parse tree
	 */
	enterMusic?: (ctx: MusicContext) => void;
	/**
	 * Exit a parse tree produced by `MasciiParser.music`.
	 * @param ctx the parse tree
	 */
	exitMusic?: (ctx: MusicContext) => void;
	/**
	 * Enter a parse tree produced by `MasciiParser.metainfo`.
	 * @param ctx the parse tree
	 */
	enterMetainfo?: (ctx: MetainfoContext) => void;
	/**
	 * Exit a parse tree produced by `MasciiParser.metainfo`.
	 * @param ctx the parse tree
	 */
	exitMetainfo?: (ctx: MetainfoContext) => void;
	/**
	 * Enter a parse tree produced by `MasciiParser.headers`.
	 * @param ctx the parse tree
	 */
	enterHeaders?: (ctx: HeadersContext) => void;
	/**
	 * Exit a parse tree produced by `MasciiParser.headers`.
	 * @param ctx the parse tree
	 */
	exitHeaders?: (ctx: HeadersContext) => void;
	/**
	 * Enter a parse tree produced by `MasciiParser.header_delim`.
	 * @param ctx the parse tree
	 */
	enterHeader_delim?: (ctx: Header_delimContext) => void;
	/**
	 * Exit a parse tree produced by `MasciiParser.header_delim`.
	 * @param ctx the parse tree
	 */
	exitHeader_delim?: (ctx: Header_delimContext) => void;
	/**
	 * Enter a parse tree produced by `MasciiParser.header`.
	 * @param ctx the parse tree
	 */
	enterHeader?: (ctx: HeaderContext) => void;
	/**
	 * Exit a parse tree produced by `MasciiParser.header`.
	 * @param ctx the parse tree
	 */
	exitHeader?: (ctx: HeaderContext) => void;
	/**
	 * Enter a parse tree produced by `MasciiParser.header_name`.
	 * @param ctx the parse tree
	 */
	enterHeader_name?: (ctx: Header_nameContext) => void;
	/**
	 * Exit a parse tree produced by `MasciiParser.header_name`.
	 * @param ctx the parse tree
	 */
	exitHeader_name?: (ctx: Header_nameContext) => void;
	/**
	 * Enter a parse tree produced by `MasciiParser.header_values`.
	 * @param ctx the parse tree
	 */
	enterHeader_values?: (ctx: Header_valuesContext) => void;
	/**
	 * Exit a parse tree produced by `MasciiParser.header_values`.
	 * @param ctx the parse tree
	 */
	exitHeader_values?: (ctx: Header_valuesContext) => void;
	/**
	 * Enter a parse tree produced by `MasciiParser.bars`.
	 * @param ctx the parse tree
	 */
	enterBars?: (ctx: BarsContext) => void;
	/**
	 * Exit a parse tree produced by `MasciiParser.bars`.
	 * @param ctx the parse tree
	 */
	exitBars?: (ctx: BarsContext) => void;
	/**
	 * Enter a parse tree produced by `MasciiParser.concurrent_block`.
	 * @param ctx the parse tree
	 */
	enterConcurrent_block?: (ctx: Concurrent_blockContext) => void;
	/**
	 * Exit a parse tree produced by `MasciiParser.concurrent_block`.
	 * @param ctx the parse tree
	 */
	exitConcurrent_block?: (ctx: Concurrent_blockContext) => void;
	/**
	 * Enter a parse tree produced by `MasciiParser.staves_n_lyricsrow`.
	 * @param ctx the parse tree
	 */
	enterStaves_n_lyricsrow?: (ctx: Staves_n_lyricsrowContext) => void;
	/**
	 * Exit a parse tree produced by `MasciiParser.staves_n_lyricsrow`.
	 * @param ctx the parse tree
	 */
	exitStaves_n_lyricsrow?: (ctx: Staves_n_lyricsrowContext) => void;
	/**
	 * Enter a parse tree produced by `MasciiParser.stavesrow`.
	 * @param ctx the parse tree
	 */
	enterStavesrow?: (ctx: StavesrowContext) => void;
	/**
	 * Exit a parse tree produced by `MasciiParser.stavesrow`.
	 * @param ctx the parse tree
	 */
	exitStavesrow?: (ctx: StavesrowContext) => void;
	/**
	 * Enter a parse tree produced by `MasciiParser.stavesrow_first_notempty`.
	 * @param ctx the parse tree
	 */
	enterStavesrow_first_notempty?: (ctx: Stavesrow_first_notemptyContext) => void;
	/**
	 * Exit a parse tree produced by `MasciiParser.stavesrow_first_notempty`.
	 * @param ctx the parse tree
	 */
	exitStavesrow_first_notempty?: (ctx: Stavesrow_first_notemptyContext) => void;
	/**
	 * Enter a parse tree produced by `MasciiParser.stavesrow_first_empty`.
	 * @param ctx the parse tree
	 */
	enterStavesrow_first_empty?: (ctx: Stavesrow_first_emptyContext) => void;
	/**
	 * Exit a parse tree produced by `MasciiParser.stavesrow_first_empty`.
	 * @param ctx the parse tree
	 */
	exitStavesrow_first_empty?: (ctx: Stavesrow_first_emptyContext) => void;
	/**
	 * Enter a parse tree produced by `MasciiParser.staff`.
	 * @param ctx the parse tree
	 */
	enterStaff?: (ctx: StaffContext) => void;
	/**
	 * Exit a parse tree produced by `MasciiParser.staff`.
	 * @param ctx the parse tree
	 */
	exitStaff?: (ctx: StaffContext) => void;
	/**
	 * Enter a parse tree produced by `MasciiParser.empty_staff`.
	 * @param ctx the parse tree
	 */
	enterEmpty_staff?: (ctx: Empty_staffContext) => void;
	/**
	 * Exit a parse tree produced by `MasciiParser.empty_staff`.
	 * @param ctx the parse tree
	 */
	exitEmpty_staff?: (ctx: Empty_staffContext) => void;
	/**
	 * Enter a parse tree produced by `MasciiParser.timed_elements`.
	 * @param ctx the parse tree
	 */
	enterTimed_elements?: (ctx: Timed_elementsContext) => void;
	/**
	 * Exit a parse tree produced by `MasciiParser.timed_elements`.
	 * @param ctx the parse tree
	 */
	exitTimed_elements?: (ctx: Timed_elementsContext) => void;
	/**
	 * Enter a parse tree produced by `MasciiParser.timed_element`.
	 * @param ctx the parse tree
	 */
	enterTimed_element?: (ctx: Timed_elementContext) => void;
	/**
	 * Exit a parse tree produced by `MasciiParser.timed_element`.
	 * @param ctx the parse tree
	 */
	exitTimed_element?: (ctx: Timed_elementContext) => void;
	/**
	 * Enter a parse tree produced by `MasciiParser.duration_doubled`.
	 * @param ctx the parse tree
	 */
	enterDuration_doubled?: (ctx: Duration_doubledContext) => void;
	/**
	 * Exit a parse tree produced by `MasciiParser.duration_doubled`.
	 * @param ctx the parse tree
	 */
	exitDuration_doubled?: (ctx: Duration_doubledContext) => void;
	/**
	 * Enter a parse tree produced by `MasciiParser.group`.
	 * @param ctx the parse tree
	 */
	enterGroup?: (ctx: GroupContext) => void;
	/**
	 * Exit a parse tree produced by `MasciiParser.group`.
	 * @param ctx the parse tree
	 */
	exitGroup?: (ctx: GroupContext) => void;
	/**
	 * Enter a parse tree produced by `MasciiParser.scoped_group`.
	 * @param ctx the parse tree
	 */
	enterScoped_group?: (ctx: Scoped_groupContext) => void;
	/**
	 * Exit a parse tree produced by `MasciiParser.scoped_group`.
	 * @param ctx the parse tree
	 */
	exitScoped_group?: (ctx: Scoped_groupContext) => void;
	/**
	 * Enter a parse tree produced by `MasciiParser.unscoped_group`.
	 * @param ctx the parse tree
	 */
	enterUnscoped_group?: (ctx: Unscoped_groupContext) => void;
	/**
	 * Exit a parse tree produced by `MasciiParser.unscoped_group`.
	 * @param ctx the parse tree
	 */
	exitUnscoped_group?: (ctx: Unscoped_groupContext) => void;
	/**
	 * Enter a parse tree produced by `MasciiParser.notes`.
	 * @param ctx the parse tree
	 */
	enterNotes?: (ctx: NotesContext) => void;
	/**
	 * Exit a parse tree produced by `MasciiParser.notes`.
	 * @param ctx the parse tree
	 */
	exitNotes?: (ctx: NotesContext) => void;
	/**
	 * Enter a parse tree produced by `MasciiParser.notes_start`.
	 * @param ctx the parse tree
	 */
	enterNotes_start?: (ctx: Notes_startContext) => void;
	/**
	 * Exit a parse tree produced by `MasciiParser.notes_start`.
	 * @param ctx the parse tree
	 */
	exitNotes_start?: (ctx: Notes_startContext) => void;
	/**
	 * Enter a parse tree produced by `MasciiParser.note_start`.
	 * @param ctx the parse tree
	 */
	enterNote_start?: (ctx: Note_startContext) => void;
	/**
	 * Exit a parse tree produced by `MasciiParser.note_start`.
	 * @param ctx the parse tree
	 */
	exitNote_start?: (ctx: Note_startContext) => void;
	/**
	 * Enter a parse tree produced by `MasciiParser.note_tie`.
	 * @param ctx the parse tree
	 */
	enterNote_tie?: (ctx: Note_tieContext) => void;
	/**
	 * Exit a parse tree produced by `MasciiParser.note_tie`.
	 * @param ctx the parse tree
	 */
	exitNote_tie?: (ctx: Note_tieContext) => void;
	/**
	 * Enter a parse tree produced by `MasciiParser.notes_end`.
	 * @param ctx the parse tree
	 */
	enterNotes_end?: (ctx: Notes_endContext) => void;
	/**
	 * Exit a parse tree produced by `MasciiParser.notes_end`.
	 * @param ctx the parse tree
	 */
	exitNotes_end?: (ctx: Notes_endContext) => void;
	/**
	 * Enter a parse tree produced by `MasciiParser.note_end_one`.
	 * @param ctx the parse tree
	 */
	enterNote_end_one?: (ctx: Note_end_oneContext) => void;
	/**
	 * Exit a parse tree produced by `MasciiParser.note_end_one`.
	 * @param ctx the parse tree
	 */
	exitNote_end_one?: (ctx: Note_end_oneContext) => void;
	/**
	 * Enter a parse tree produced by `MasciiParser.note_end_all`.
	 * @param ctx the parse tree
	 */
	enterNote_end_all?: (ctx: Note_end_allContext) => void;
	/**
	 * Exit a parse tree produced by `MasciiParser.note_end_all`.
	 * @param ctx the parse tree
	 */
	exitNote_end_all?: (ctx: Note_end_allContext) => void;
	/**
	 * Enter a parse tree produced by `MasciiParser.newline`.
	 * @param ctx the parse tree
	 */
	enterNewline?: (ctx: NewlineContext) => void;
	/**
	 * Exit a parse tree produced by `MasciiParser.newline`.
	 * @param ctx the parse tree
	 */
	exitNewline?: (ctx: NewlineContext) => void;
	/**
	 * Enter a parse tree produced by `MasciiParser.lyrics_row`.
	 * @param ctx the parse tree
	 */
	enterLyrics_row?: (ctx: Lyrics_rowContext) => void;
	/**
	 * Exit a parse tree produced by `MasciiParser.lyrics_row`.
	 * @param ctx the parse tree
	 */
	exitLyrics_row?: (ctx: Lyrics_rowContext) => void;
}

