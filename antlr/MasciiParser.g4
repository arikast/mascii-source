// the mascii 2.0 grammar
parser grammar MasciiParser;
options { tokenVocab=MasciiLexer; }

music:                              (SPACE|NEWLINE)* bars (SPACE|newline)* EOF;
metainfo:                           (SPACE|NEWLINE)* OPEN_META M_NEWLINE* headers M_NEWLINE* CLOSE_META (SPACE|NEWLINE)* ; 
headers:                            header (header_delim+ header)* header_delim? ;
header_delim:                       M_NEWLINE|M_INLINE_SEP ;
header:                             header_name HEADER_NAME_VAL_SEP header_values;
header_name:                        HEADER_ENTITY;
header_values:                      header_value? (HEADER_VAL_SEP header_value?)* ;
header_value:                       HEADER_ENTITY | QUOTED_TEXT;
bars:                               concurrent_block (newline newline+ concurrent_block)*; //a collection of blocks which together form the piece
concurrent_block:                   metainfo? staves_n_lyricsrow (newline staves_n_lyricsrow)* ; //a block of several vertically stacked musical parts to be played simultaneously
staves_n_lyricsrow:                 stavesrow (newline lyrics_row)* ;
stavesrow:                          stavesrow_first_notempty | stavesrow_first_empty; //a single horizontal musical part consisting of 1 or more (staff) measures 
stavesrow_first_notempty:           staff (STAFF_SEPARATOR (staff | empty_staff) )* ; 
stavesrow_first_empty:              empty_staff (STAFF_SEPARATOR (staff | empty_staff))+ ;
staff:                              timed_elements ; //ie a single measure of music
empty_staff:                        SPACE? ;
timed_elements:                     SPACE? timed_element (SPACE timed_element)* SPACE?; 
timed_element:                      chord_symbol | chord_symbol? (inverse_dot=(DOTTED|MULTI_DOTTED)? ((notes | group)+ | rest) duration_doubled? normal_dot=(DOTTED|MULTI_DOTTED)?);
rest:                               REST | DOTTED ;
duration_doubled:                   TIE TIE+ ;
group:                              unscoped_group | scoped_group ;
scoped_group:                       OPEN_SCOPED timed_elements CLOSE_SCOPED;
unscoped_group:                     OPEN_UNSCOPED timed_elements CLOSE_UNSCOPED; 
notes:                              (notes_end notes_start) | (notes_end) | (notes_start) ;        
notes_start:                        note_start+ ;        
note_start:                         pitch note_tie? ;
note_tie:                           TIE ;
notes_end:                          note_end_all | note_end_one+ ;
note_end_one:                       TIE pitch ;
pitch:                              (abs_pitch_range | AMPLIFIERS)? REL_PITCH accidental? | REPEAT_ELEMENT ;
abs_pitch_range:                    ZERO | NON_ZERO ;
accidental:                         DBL_FLAT | DBL_SHARP | NATURAL SHARP | NATURAL FLAT | SHARP | FLAT | NATURAL ;
note_end_all:                       TIE NOTE_END_ALL;        
newline:                            NEWLINE | IMPLICIT_CLOSE_LYRICS ;
lyrics_row:                         OPEN_LYRICS LYRICS CLOSE_LYRICS?; //a single horizontal musical part consisting of 1 or more (staff) measures 

chord_symbol:                       chord_root chord_type? alterations? slash_bass? COLON;
chord_root:                         REL_PITCH chord_accidental?;
chord_type:                         chord_type_major | chord_type_minor | chord_type_aug 
                                    | chord_type_hdim | chord_type_dim | chord_type_dom 
                                    | chord_type_sus | chord_type_add;
chord_type_major:                   CHORD_TYPE_MAJOR;
chord_type_minor:                   CHORD_TYPE_MINOR;
chord_type_aug:                     CHORD_TYPE_AUG;
chord_type_hdim:                    CHORD_TYPE_HDIM | ZERO;
chord_type_dim:                     CHORD_TYPE_DIM;
chord_type_dom:                     CHORD_TYPE_DOM;
chord_type_sus:                     CHORD_TYPE_SUS;
chord_type_add:                     CHORD_TYPE_ADD;
alterations:                        (alteration | alteration_with_parens)+;
alteration_with_parens:             OPEN_SCOPED alteration (SPACE? alteration)* CLOSE_SCOPED;
alteration:                         chord_accidental? NON_ZERO NON_ZERO?;
chord_accidental:                   SHARP | FLAT;
slash_bass:                         SLASH REL_PITCH;
