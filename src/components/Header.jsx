import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { saveIPState } from "@recoil/atoms.mjs";

function Header() {

  const [saveip, setSaveip] = useRecoilState(saveIPState);

  return (
    <header>
      <h1>Todo List :)</h1>
      <nav>
        <div>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/list">TodoList</Link></li>
          </ul>
        </div>
      </nav>

      <div>
        <label htmlFor="saveip">IP 공개</label>
        <input type="checkbox" id="saveip" checked={saveip} onChange={() => setSaveip(!saveip)} />
      </div>


    </header>
  )
}

export default Header;