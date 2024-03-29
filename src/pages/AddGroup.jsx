import { useState, useRef, useEffect, useContext } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { GROUP_COLORS } from '../utils/constants';
import { addGroup } from '../utils/helpers';
import { GroupContext } from '../App';
import { redirect, useNavigate } from 'react-router-dom';
const initGroup = {
  name: '',
  color: '',
};

const AddGroup = (props) => {
  const [colors, setColors] = useState(GROUP_COLORS);
  const [group, setGroup] = useState(initGroup);
  const [error, setError] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const { setGroups } = useContext(GroupContext);
  const navigate = useNavigate();

  const divRef = useRef();
  const inputRef = useRef();
  const onScreen = useOnScreen(divRef);

  useEffect(() => {
    const clearState = () => {
      setColors(GROUP_COLORS);
      setGroup(initGroup);
      setError(null);
      setSelectedColor(null);
    };

    clearState();

    inputRef?.current.focus();
  }, [onScreen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGroup((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const isInvalid = error || group.name.length < 3 || group.color.length <= 0;

  const handleSetColor = (color) => {
    setSelectedColor(color);

    setGroup((prev) => ({ ...prev, color }));
  };

  const handleSubmit = () => {
    if (isInvalid) return;

    try {
      const newGroups = addGroup(group);
      setGroups(newGroups);
      navigate(newGroups[0].id, { replace: true });
      props.closeModal();
      setColors(GROUP_COLORS);
      setGroup(initGroup);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };
  return (
    <div
      ref={divRef}
      className="add_group__card"
      onClick={(e) => e.stopPropagation()}
    >
      <h1 className="add_group__header">Create New Group</h1>
      <div className="add_group__edit">
        <span>Group Name</span>
        <input
          ref={inputRef}
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
              key={color}
              style={{ backgroundColor: color }}
              className="group__color"
              onClick={() => handleSetColor(color)}
            >
              <span
                className={`selected_indicator ${
                  selectedColor === color ? 'selected' : ''
                }`}
              ></span>
            </span>
          ))}
        </div>
      </div>
      {error && <p className="add_group__error">{error}</p>}
      <button
        disabled={isInvalid}
        onClick={handleSubmit}
        className="add_group__btn"
      >
        Create
      </button>
    </div>
  );
};

export default AddGroup;
