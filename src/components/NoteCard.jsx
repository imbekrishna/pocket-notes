import { dateTimeFormatter } from '../utils/helpers';

const NoteCard = (props) => {
  const { date, time } = dateTimeFormatter(props?.createdAt ?? new Date());
  return (
    <li className="note__item">
      <p>{props.note}</p>
      <p className="note__item__meta">
        {/* TODO: Fix date formatting */}
        <span>{date}</span>&bull;<span>{time}</span>
      </p>
    </li>
  );
};

export default NoteCard;
