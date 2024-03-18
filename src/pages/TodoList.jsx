
import useAxiosInstance from "@hooks/useAxiosInstance.mjs";
import ErrorPage from "@pages/ErrorPage";
import TodoListItem from "@pages/TodoListItem";
import '@styles/TodoList.css';
import { useEffect, useState } from "react";
import { ReactCsspin } from "react-csspin";
import 'react-csspin/dist/style.css';
import { Link } from "react-router-dom";


function TodoList() {
  const axios = useAxiosInstance();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  
  async function fetchList() {
    try {
      setIsLoading(true);
      const response = await axios.get('/todolist?delay=500');
      setData(response.data);
    } catch(err) {
      console.error(err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  const itemList = data?.items.map(item => <TodoListItem key={item._id} item={item} handleDelete={handleDelete} />);

  // 삭제 버튼 누른 항목 지우기
  async function handleDelete(_id) {
    try {
      await axios.delete(`/todolist/${_id}`);
      alert('할일이 삭제되었습니다.');
      // 지운다음 바로 렌더링
      fetchList();
    } catch(err) {
      console.error(err);
      alert('할일 삭제에 실패했습니다.')
    }
  }

  return (
    <div id="todolist">
      
      <div className="todo">
        <div className="todo-header">
          <h2 className="todolist-title">할일 목록</h2>
          <Link to="/add" className="button_add"><i className="ir">추가</i></Link>
        </div>

        <div className="search">
          <input className="todolist-search" type="text" autoFocus placeholder="할일을 검색해 보세요." />
          <button type="button" className="button_search"><i className="ir">검색</i></button>
        </div>

        {isLoading && <ReactCsspin message="로딩중..." color="bisque" />}

        {error ? 
          <ErrorPage /> :
          <ul className="todolist">
            {itemList}
          </ul> 
        }
      </div>
    </div>
  )
}

export default TodoList;
