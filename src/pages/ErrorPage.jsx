import { useRouteError } from "react-router-dom";



function ErrorPage() {
  const error = useRouteError();
  const message = error.status === 404 ? '존재하지 않는 페이지입니다.' : '에러가 발생했습니다. 잠시 후 다시 이용해주세요.';
  return (
    <div style={{border: '2px solid red', padding: '30px', borderRadius: '4px'}} id="main">
      <div className="todo">
        <h2 style={{color: 'red', fontWeight: 'bold', fontSize: '2rem'}}>에러 발생</h2>
        <p style={{fontWeight: 'bold', fontSize: '1.6rem' }}>{message}</p>
      </div>
    </div>
  )
}

export default ErrorPage;