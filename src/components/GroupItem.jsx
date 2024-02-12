import React from 'react';
import { Link } from 'react-router-dom';
import GroupLogo from './GroupLogo';

export function GroupItem({ group }) {
  return (
    <Link to={`${group.id}`} className="grp__item__link">
      <GroupLogo name={group.name} color={group.color} />
      <span className="grp__name">{group.name}</span>
    </Link>
  );
}

const MemoizedGroupItem = React.memo(GroupItem);
export default MemoizedGroupItem;
