import { Link, useParams } from "react-router-dom";
import { ReactCsspin } from "react-csspin";
import 'react-csspin/dist/style.css';
import useAxios from "@hooks/useAxios.mjs";
import ErrorPage from "@pages/ErrorPage";
import '@styles/TodoDetail.css';


function TodoDetail() {
  const { _id } = useParams();
  const { isLoading, data, error } = useAxios({url: `/todolist/${_id}?delay=1000`})
  const { title, content, done, createdAt, updatedAt } = data?.item || {};

  function toLocalTime(utc) {
    if (utc) {
      const date = new Date(utc);
      return (
        date.getFullYear().toString().padStart(2, '0') + '.' + 
        (date.getMonth() + 1).toString().padStart(2, '0') + '.' + 
        date.getDate().toString().padStart(2, '0') + ' ' + 
        (date.getHours() + 9).toString().padStart(2, '0') + ':' + 
        date.getMinutes().toString().padStart(2, '0') + ':' + 
        date.getSeconds().toString().padStart(2, '0')
      );
    }
  }

  return (
    <div id="tododetail">
      <div className="detail-header">
        <h2 className="detail-title">할일 상세 보기</h2>
        <Link to={`/list/${_id}/edit`} className="button_edit"><i className="ir">수정</i></Link>
        <Link to="/list" className="button_list"><i className="ir">목록</i></Link>
      </div>
      {isLoading && <ReactCsspin message="로딩중..." color="bisque" />}
      
      {error ? 
        <ErrorPage /> : 
        <div className="contents">
          <div className="contents-header">
            <div className="contents-title">
              {title}
            </div>
            <div className="contents-done">
              {done ? '완료' : '미완료'}
            </div>
          </div>

          <div className="contents-detail">
            <div className="contents_date type_createdAt">
              작성일 : {toLocalTime(createdAt)}
            </div>
            <div className="contents_date type_updatedAt">
              수정일 : {toLocalTime(updatedAt)}
            </div>
          </div>

          <div className="contents-content">
            {content}
          </div>

        </div>
      }

    </div>
  )
}

export default TodoDetail;