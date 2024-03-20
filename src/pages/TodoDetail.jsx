import { Link, Outlet, useParams } from "react-router-dom";
import { ReactCsspin } from "react-csspin";
import 'react-csspin/dist/style.css';
import ErrorPage from "@pages/ErrorPage";
import '@styles/TodoDetail.css';
import { useEffect, useState } from "react";
import useAxiosInstance from "@hooks/useAxiosInstance.mjs";
import { saveIPState } from "@recoil/atoms.mjs";
import { useRecoilValue } from "recoil";


function TodoDetail() {
  const { _id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const axios = useAxiosInstance();
  const saveip = useRecoilValue(saveIPState);

  useEffect(() => {
    fetchDetail();
  }, [])

  async function fetchDetail() {
    try {
      setIsLoading(true);
      const response = await axios.get(`/todolist/${_id}?delay=1000`);
      setData(response.data);
    } catch(err) {
      console.error(err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  const { title, content, done, createdAt, updatedAt, ip } = data?.item || {};

  return (
    <>
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
                작성일 : {createdAt}
              </div>
              <div className="contents_date type_updatedAt">
                수정일 : {updatedAt}
              </div>
            </div>

            <div className="contents-content">
              {content}
            </div>

            <div>
              {saveip && ip && <span>IP : {ip}</span>}
            </div>

          </div>
        }
        <Outlet context={{reFetch: fetchDetail}} />
      </div>
      
    </>
    
  )
}

export default TodoDetail;