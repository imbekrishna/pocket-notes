import { dateTimeFormatter } from '../utils/helpers';
import separator from '../assets/separator.svg';
import { deleteNoteFromGroup } from '../utils/helpers';
import React from 'react';

const NoteCard = (props) => {
  console.count('Notes rendered');
  const { date, time } = dateTimeFormatter(props?.createdAt ?? new Date());
  const handleDelete = () => {
    deleteNoteFromGroup(props.groupId, props.id);
  };
  return (
    <li className="note__item" onDoubleClick={handleDelete}>
      <p>{props.note}</p>
      <p className="note__item__meta">
        <span>{date}</span>
        <img src={separator} className="date__separator" />
        <span>{time}</span>
      </p>
    </li>
  );
};
const MemoizedNoteCard = React.memo(NoteCard)
export default MemoizedNoteCard;
