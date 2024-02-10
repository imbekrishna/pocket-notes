export const LS_GROUP_KEY = 'pocket_note_groups';
export const LS_NOTES_KEY = 'pocket_note_notes';

export const GROUP_COLORS = [
  '#B38BFA',
  '#FF79F2',
  '#43E6FC',
  '#F19576',
  '#0047FF',
  '#6691FF',
];

export const COLOR_MAP = GROUP_COLORS.map((color) => ({
  value: color,
  selected: false,
}));
