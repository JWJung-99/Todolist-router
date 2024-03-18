


function ErrorPage() {
  return (
    <div style={{border: '2px solid red', padding: '30px', borderRadius: '4px'}} id="main">
      <div className="todo">
        <h2 style={{color: 'red', fontWeight: 'bold', fontSize: '2rem'}}>에러 발생</h2>
        <p style={{fontWeight: 'bold', fontSize: '1.6rem' }}>잠시 후 다시 이용해 주세요.</p>
      </div>
    </div>
  )
}

export default ErrorPage;