import { useState } from 'react';
import { COLOR_MAP } from '../utils/constants';
import { addGroup } from '../utils/helpers';

const AddGroup = (props) => {
  const initGroup = {
    name: '',
    color: '',
  };
  const [colors, setColors] = useState(COLOR_MAP);
  const [group, setGroup] = useState(initGroup);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGroup((prev) => ({ ...prev, [name]: value }));
  };

  const handleSetColor = (color) => {
    setColors((prevColors) =>
      prevColors.map((i) =>
        i.value === color ? { ...i, selected: true } : { ...i, selected: false }
      )
    );

    setGroup((prev) => ({ ...prev, color }));
  };

  const handleSubmit = () => {
    addGroup(group);
    props.closeModal();
    setColors(COLOR_MAP);
    setGroup(initGroup);
  };
  return (
    <div className="add_group__card" onClick={(e) => e.stopPropagation()}>
      <h1 className="add_group__header">Create New Group</h1>
      <div className="add_group__edit">
        <span>Group Name</span>
        <input
          type="text"
          placeholder="Enter group name"
          name="name"
          value={group.name}
          onChange={handleChange}
        />
      </div>
      <div className="add_group__colors">
        <span>Choose colour</span>
        <div className="colors__container">
          {colors.map((color) => (
            <span
              key={color.value}
              style={{ backgroundColor: color.value }}
              className="group__color"
              onClick={() => handleSetColor(color.value)}
            >
              <span
                className={`selected_indicator ${color.selected && 'selected'}`}
              ></span>
            </span>
          ))}
        </div>
      </div>
      <button onClick={handleSubmit} className="add_group__btn">
        Create
      </button>
    </div>
  );
};

export default AddGroup;
