import { getGroupInitials } from '../utils/helpers';

const GroupLogo = (props) => {
  return (
    <span className="grp__logo" style={{ backgroundColor: props.color }}>
      {getGroupInitials(props.name)}
    </span>
  );
};

export default GroupLogo;
