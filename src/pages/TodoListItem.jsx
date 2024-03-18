import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import '@styles/TodoListItem.css';

function TodoListItem({ item, handleDelete }) {
  return (
    <li className="todolist-item">
      <span className="item_id">{item._id}</span>
      <Link to={"/list/" + item._id} className="item_title">{item.done ? <s>{item.title}</s> : item.title}</Link>
      <button type="button" className="button_delete" onClick={() => handleDelete(item._id)}><i className="ir">삭제</i></button>
    </li>
  )
}

TodoListItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.number,
    title: PropTypes.string,
    done: PropTypes.bool
  }),
  handleDelete: PropTypes.func
}

export default TodoListItem;