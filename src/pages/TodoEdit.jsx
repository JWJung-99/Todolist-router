
import useAxiosInstance from "@hooks/useAxiosInstance.mjs";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import '@styles/TodoEdit.css';


function TodoEdit () {
  const [item, setItem] = useState();
  const {_id} = useParams();
  const axios = useAxiosInstance();
  const {register, handleSubmit, reset} = useForm();
  const navigate = useNavigate();
  const {reFetch} = useOutletContext();

  // 렌더링할 때 기존 데이터 불러오기
  useEffect(() => {
    fetchData();
  }, []);

  // useForm의 reset이 input 값이 변할 때마다 자동으로 상태 변경
  useEffect(() => {
    if (item) {
      reset({
        title: item.title,
        content: item.content,
        done: item.done
      })
    }
  }, [item]);

  async function fetchData() {
    const response = await axios.get(`/todolist/${_id}`);
    setItem(response.data.item);
  }

  async function onSubmit(formData) {
    try {
      await axios.patch(`/todolist/${_id}`, formData);
      alert('할일을 수정했습니다.');
      reset();
      navigate(-1);
      reFetch();
    }
    catch(err) {
      console.error(err);
      alert('할일 수정에 실패했습니다.');
    }
  }

  return (
    <div id="todoedit">
      <div className="todo">
        <div className="edit-header">
          <h2 className="edit-title">할일 수정</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="todo-form">

          <div className="todo-edit-buttons">
            <button type="submit" className="button_ok"><i className="ir">수정</i></button>
            <button type="reset" className="button_back" onClick={() => navigate(-1)}><i className="ir">뒤로가기</i></button>
          </div>

          <div className="todo-form-input">
            <label htmlFor="title" className="todo-form-label">제목</label>
            <input 
              type="text"
              id="title" 
              autoFocus
              {...register('title', {required: '제목을 입력해야 합니다.'})}
            />
          </div>
          
          <div className="todo-form-text">
            <label htmlFor="content" className="todo-form-label">내용</label>
            <textarea 
              id="content"  
              {...register('content', {required: '내용을 입력해야 합니다.'})}
            />
          </div>

          <div className="todo-form-check">
            <label htmlFor="done" className="todo-form-label">완료</label>
            <input
              type="checkbox" 
              id="done" 
              defaultChecked
              {...register('done')}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default TodoEdit;