import { getGroupInitials } from '../utils/helpers';

const GroupLogo = (props) => {
  return <span className="grp__logo">{getGroupInitials(props.name)}</span>;
};

export default GroupLogo;
