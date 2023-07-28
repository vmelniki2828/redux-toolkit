import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../redux/actions';

const TaskList = () => {
  const store = useSelector(store => store.tasks);
  const dispatch = useDispatch();

  const handleDel = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    <div>
      {store.map(({ id, text, completed }) => {
        return (
          <div key={id}>
            <p>{id}</p>
            <p>{text}</p>
            <p>{completed}</p>
            <button onClick={() => handleDel(id)}>Del</button>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
