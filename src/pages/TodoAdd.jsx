import useAxiosInstance from "@hooks/useAxiosInstance.mjs";
import '@styles/TodoAdd.css';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function TodoAdd() {
  const axios = useAxiosInstance();
                  // input 입력값을 받을 수 있음.
  const {register, handleSubmit, reset, setFocus} = useForm();
  const navigate = useNavigate();

  async function onSubmit(formData) {
    try {
      await axios.post('/todolist', formData)
      alert("할일을 추가했습니다.");
      setFocus('title');
      reset();
      navigate(-1);
    } catch (err) {
      console.error(err);
      alert("할일 추가에 실패했습니다.")
    }
  }

  return (
    <div id="todoadd">
      <div className="todo">
        <div className="add-header">
          <h2 className="add-title">할일 추가</h2>
        </div>
      
        <form onSubmit={handleSubmit(onSubmit)} className="todo-form">
          <div className="todo-add-buttons">
            <button type="submit" className="button_add"><i className="ir">추가</i></button>
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

        </form>
      </div>
    </div>
  );
}

export default TodoAdd;