// the mascii 2.0 grammar
parser grammar MasciiParser;
options { tokenVocab=MasciiLexer; }

music:                              (SPACE|NEWLINE)* bars (SPACE|newline)* EOF;
metainfo:                           (SPACE|NEWLINE)* OPEN_META M_NEWLINE* headers M_NEWLINE* CLOSE_META (SPACE|NEWLINE)* ; 
headers:                            header (M_NEWLINE+ header)* ;
header:                             header_name HEADER_SEP header_values;
header_name:                        HEADER_ENTITY;
header_values:                      HEADER_ENTITY? (HEADER_VAL_SEP HEADER_ENTITY?)* ;
bars:                               concurrent_block (newline newline+ concurrent_block)*; //a collection of blocks which together form the piece
concurrent_block:                   metainfo? staves_n_lyricsrow (newline staves_n_lyricsrow)* ; //a block of several vertically stacked musical parts to be played simultaneously
staves_n_lyricsrow:                 stavesrow (newline lyrics_row)* ;
stavesrow:                          stavesrow_first_notempty | stavesrow_first_empty; //a single horizontal musical part consisting of 1 or more (staff) measures 
stavesrow_first_notempty:           staff (STAFF_SEPARATOR (staff | empty_staff) )* ; 
stavesrow_first_empty:              empty_staff (STAFF_SEPARATOR (staff | empty_staff))+ ;
staff:                              timed_elements ; //ie a single measure of music
empty_staff:                        SPACE? ;
timed_elements:                     SPACE? timed_element (SPACE timed_element)* SPACE?; 
timed_element:                      inverse_dot=(DBL_DOTTED | DOTTED)? ((notes | group)+ | REST) duration_doubled? normal_dot=(DBL_DOTTED | DOTTED)?; 
duration_doubled:                   TIE TIE+ ;
group:                              unscoped_group | scoped_group ;
scoped_group:                       OPEN_SCOPED timed_elements CLOSE_SCOPED;
unscoped_group:                     OPEN_UNSCOPED timed_elements CLOSE_UNSCOPED; 
notes:                              (notes_end notes_start) | (notes_end) | (notes_start) ;        
notes_start:                        note_start+ ;        
note_start:                         PITCH note_tie? ;  
note_tie:                           TIE ;     
notes_end:                          note_end_all | note_end_one+ ;
note_end_one:                       TIE PITCH ;        
note_end_all:                       TIE NOTE_END_ALL;        
newline:                            NEWLINE | IMPLICIT_CLOSE_LYRICS ;
lyrics_row:                         OPEN_LYRICS LYRICS CLOSE_LYRICS?; //a single horizontal musical part consisting of 1 or more (staff) measures 
