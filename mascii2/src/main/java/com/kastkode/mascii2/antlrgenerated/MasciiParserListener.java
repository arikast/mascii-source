// Generated from MasciiParser.g4 by ANTLR 4.7.2
package com.kastkode.mascii2.antlrgenerated;
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link MasciiParser}.
 */
public interface MasciiParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link MasciiParser#music}.
	 * @param ctx the parse tree
	 */
	void enterMusic(MasciiParser.MusicContext ctx);
	/**
	 * Exit a parse tree produced by {@link MasciiParser#music}.
	 * @param ctx the parse tree
	 */
	void exitMusic(MasciiParser.MusicContext ctx);
	/**
	 * Enter a parse tree produced by {@link MasciiParser#metainfo}.
	 * @param ctx the parse tree
	 */
	void enterMetainfo(MasciiParser.MetainfoContext ctx);
	/**
	 * Exit a parse tree produced by {@link MasciiParser#metainfo}.
	 * @param ctx the parse tree
	 */
	void exitMetainfo(MasciiParser.MetainfoContext ctx);
	/**
	 * Enter a parse tree produced by {@link MasciiParser#headers}.
	 * @param ctx the parse tree
	 */
	void enterHeaders(MasciiParser.HeadersContext ctx);
	/**
	 * Exit a parse tree produced by {@link MasciiParser#headers}.
	 * @param ctx the parse tree
	 */
	void exitHeaders(MasciiParser.HeadersContext ctx);
	/**
	 * Enter a parse tree produced by {@link MasciiParser#header}.
	 * @param ctx the parse tree
	 */
	void enterHeader(MasciiParser.HeaderContext ctx);
	/**
	 * Exit a parse tree produced by {@link MasciiParser#header}.
	 * @param ctx the parse tree
	 */
	void exitHeader(MasciiParser.HeaderContext ctx);
	/**
	 * Enter a parse tree produced by {@link MasciiParser#header_name}.
	 * @param ctx the parse tree
	 */
	void enterHeader_name(MasciiParser.Header_nameContext ctx);
	/**
	 * Exit a parse tree produced by {@link MasciiParser#header_name}.
	 * @param ctx the parse tree
	 */
	void exitHeader_name(MasciiParser.Header_nameContext ctx);
	/**
	 * Enter a parse tree produced by {@link MasciiParser#header_values}.
	 * @param ctx the parse tree
	 */
	void enterHeader_values(MasciiParser.Header_valuesContext ctx);
	/**
	 * Exit a parse tree produced by {@link MasciiParser#header_values}.
	 * @param ctx the parse tree
	 */
	void exitHeader_values(MasciiParser.Header_valuesContext ctx);
	/**
	 * Enter a parse tree produced by {@link MasciiParser#bars}.
	 * @param ctx the parse tree
	 */
	void enterBars(MasciiParser.BarsContext ctx);
	/**
	 * Exit a parse tree produced by {@link MasciiParser#bars}.
	 * @param ctx the parse tree
	 */
	void exitBars(MasciiParser.BarsContext ctx);
	/**
	 * Enter a parse tree produced by {@link MasciiParser#concurrent_block}.
	 * @param ctx the parse tree
	 */
	void enterConcurrent_block(MasciiParser.Concurrent_blockContext ctx);
	/**
	 * Exit a parse tree produced by {@link MasciiParser#concurrent_block}.
	 * @param ctx the parse tree
	 */
	void exitConcurrent_block(MasciiParser.Concurrent_blockContext ctx);
	/**
	 * Enter a parse tree produced by {@link MasciiParser#staves_n_lyricsrow}.
	 * @param ctx the parse tree
	 */
	void enterStaves_n_lyricsrow(MasciiParser.Staves_n_lyricsrowContext ctx);
	/**
	 * Exit a parse tree produced by {@link MasciiParser#staves_n_lyricsrow}.
	 * @param ctx the parse tree
	 */
	void exitStaves_n_lyricsrow(MasciiParser.Staves_n_lyricsrowContext ctx);
	/**
	 * Enter a parse tree produced by {@link MasciiParser#stavesrow}.
	 * @param ctx the parse tree
	 */
	void enterStavesrow(MasciiParser.StavesrowContext ctx);
	/**
	 * Exit a parse tree produced by {@link MasciiParser#stavesrow}.
	 * @param ctx the parse tree
	 */
	void exitStavesrow(MasciiParser.StavesrowContext ctx);
	/**
	 * Enter a parse tree produced by {@link MasciiParser#stavesrow_first_notempty}.
	 * @param ctx the parse tree
	 */
	void enterStavesrow_first_notempty(MasciiParser.Stavesrow_first_notemptyContext ctx);
	/**
	 * Exit a parse tree produced by {@link MasciiParser#stavesrow_first_notempty}.
	 * @param ctx the parse tree
	 */
	void exitStavesrow_first_notempty(MasciiParser.Stavesrow_first_notemptyContext ctx);
	/**
	 * Enter a parse tree produced by {@link MasciiParser#stavesrow_first_empty}.
	 * @param ctx the parse tree
	 */
	void enterStavesrow_first_empty(MasciiParser.Stavesrow_first_emptyContext ctx);
	/**
	 * Exit a parse tree produced by {@link MasciiParser#stavesrow_first_empty}.
	 * @param ctx the parse tree
	 */
	void exitStavesrow_first_empty(MasciiParser.Stavesrow_first_emptyContext ctx);
	/**
	 * Enter a parse tree produced by {@link MasciiParser#staff}.
	 * @param ctx the parse tree
	 */
	void enterStaff(MasciiParser.StaffContext ctx);
	/**
	 * Exit a parse tree produced by {@link MasciiParser#staff}.
	 * @param ctx the parse tree
	 */
	void exitStaff(MasciiParser.StaffContext ctx);
	/**
	 * Enter a parse tree produced by {@link MasciiParser#empty_staff}.
	 * @param ctx the parse tree
	 */
	void enterEmpty_staff(MasciiParser.Empty_staffContext ctx);
	/**
	 * Exit a parse tree produced by {@link MasciiParser#empty_staff}.
	 * @param ctx the parse tree
	 */
	void exitEmpty_staff(MasciiParser.Empty_staffContext ctx);
	/**
	 * Enter a parse tree produced by {@link MasciiParser#timed_elements}.
	 * @param ctx the parse tree
	 */
	void enterTimed_elements(MasciiParser.Timed_elementsContext ctx);
	/**
	 * Exit a parse tree produced by {@link MasciiParser#timed_elements}.
	 * @param ctx the parse tree
	 */
	void exitTimed_elements(MasciiParser.Timed_elementsContext ctx);
	/**
	 * Enter a parse tree produced by {@link MasciiParser#timed_element}.
	 * @param ctx the parse tree
	 */
	void enterTimed_element(MasciiParser.Timed_elementContext ctx);
	/**
	 * Exit a parse tree produced by {@link MasciiParser#timed_element}.
	 * @param ctx the parse tree
	 */
	void exitTimed_element(MasciiParser.Timed_elementContext ctx);
	/**
	 * Enter a parse tree produced by {@link MasciiParser#duration_doubled}.
	 * @param ctx the parse tree
	 */
	void enterDuration_doubled(MasciiParser.Duration_doubledContext ctx);
	/**
	 * Exit a parse tree produced by {@link MasciiParser#duration_doubled}.
	 * @param ctx the parse tree
	 */
	void exitDuration_doubled(MasciiParser.Duration_doubledContext ctx);
	/**
	 * Enter a parse tree produced by {@link MasciiParser#group}.
	 * @param ctx the parse tree
	 */
	void enterGroup(MasciiParser.GroupContext ctx);
	/**
	 * Exit a parse tree produced by {@link MasciiParser#group}.
	 * @param ctx the parse tree
	 */
	void exitGroup(MasciiParser.GroupContext ctx);
	/**
	 * Enter a parse tree produced by {@link MasciiParser#scoped_group}.
	 * @param ctx the parse tree
	 */
	void enterScoped_group(MasciiParser.Scoped_groupContext ctx);
	/**
	 * Exit a parse tree produced by {@link MasciiParser#scoped_group}.
	 * @param ctx the parse tree
	 */
	void exitScoped_group(MasciiParser.Scoped_groupContext ctx);
	/**
	 * Enter a parse tree produced by {@link MasciiParser#unscoped_group}.
	 * @param ctx the parse tree
	 */
	void enterUnscoped_group(MasciiParser.Unscoped_groupContext ctx);
	/**
	 * Exit a parse tree produced by {@link MasciiParser#unscoped_group}.
	 * @param ctx the parse tree
	 */
	void exitUnscoped_group(MasciiParser.Unscoped_groupContext ctx);
	/**
	 * Enter a parse tree produced by {@link MasciiParser#notes}.
	 * @param ctx the parse tree
	 */
	void enterNotes(MasciiParser.NotesContext ctx);
	/**
	 * Exit a parse tree produced by {@link MasciiParser#notes}.
	 * @param ctx the parse tree
	 */
	void exitNotes(MasciiParser.NotesContext ctx);
	/**
	 * Enter a parse tree produced by {@link MasciiParser#notes_start}.
	 * @param ctx the parse tree
	 */
	void enterNotes_start(MasciiParser.Notes_startContext ctx);
	/**
	 * Exit a parse tree produced by {@link MasciiParser#notes_start}.
	 * @param ctx the parse tree
	 */
	void exitNotes_start(MasciiParser.Notes_startContext ctx);
	/**
	 * Enter a parse tree produced by {@link MasciiParser#note_start}.
	 * @param ctx the parse tree
	 */
	void enterNote_start(MasciiParser.Note_startContext ctx);
	/**
	 * Exit a parse tree produced by {@link MasciiParser#note_start}.
	 * @param ctx the parse tree
	 */
	void exitNote_start(MasciiParser.Note_startContext ctx);
	/**
	 * Enter a parse tree produced by {@link MasciiParser#note_tie}.
	 * @param ctx the parse tree
	 */
	void enterNote_tie(MasciiParser.Note_tieContext ctx);
	/**
	 * Exit a parse tree produced by {@link MasciiParser#note_tie}.
	 * @param ctx the parse tree
	 */
	void exitNote_tie(MasciiParser.Note_tieContext ctx);
	/**
	 * Enter a parse tree produced by {@link MasciiParser#notes_end}.
	 * @param ctx the parse tree
	 */
	void enterNotes_end(MasciiParser.Notes_endContext ctx);
	/**
	 * Exit a parse tree produced by {@link MasciiParser#notes_end}.
	 * @param ctx the parse tree
	 */
	void exitNotes_end(MasciiParser.Notes_endContext ctx);
	/**
	 * Enter a parse tree produced by {@link MasciiParser#note_end_one}.
	 * @param ctx the parse tree
	 */
	void enterNote_end_one(MasciiParser.Note_end_oneContext ctx);
	/**
	 * Exit a parse tree produced by {@link MasciiParser#note_end_one}.
	 * @param ctx the parse tree
	 */
	void exitNote_end_one(MasciiParser.Note_end_oneContext ctx);
	/**
	 * Enter a parse tree produced by {@link MasciiParser#note_end_all}.
	 * @param ctx the parse tree
	 */
	void enterNote_end_all(MasciiParser.Note_end_allContext ctx);
	/**
	 * Exit a parse tree produced by {@link MasciiParser#note_end_all}.
	 * @param ctx the parse tree
	 */
	void exitNote_end_all(MasciiParser.Note_end_allContext ctx);
	/**
	 * Enter a parse tree produced by {@link MasciiParser#newline}.
	 * @param ctx the parse tree
	 */
	void enterNewline(MasciiParser.NewlineContext ctx);
	/**
	 * Exit a parse tree produced by {@link MasciiParser#newline}.
	 * @param ctx the parse tree
	 */
	void exitNewline(MasciiParser.NewlineContext ctx);
	/**
	 * Enter a parse tree produced by {@link MasciiParser#lyrics_row}.
	 * @param ctx the parse tree
	 */
	void enterLyrics_row(MasciiParser.Lyrics_rowContext ctx);
	/**
	 * Exit a parse tree produced by {@link MasciiParser#lyrics_row}.
	 * @param ctx the parse tree
	 */
	void exitLyrics_row(MasciiParser.Lyrics_rowContext ctx);
}