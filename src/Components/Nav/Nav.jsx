import logo from '../../images/dm_white_logo.png';
import './Nav.css';

export default function Nav() {
  return (
    <div className="Nav">
      <div>
        <img src={logo} alt="dm logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>Topics</li>
      </ul>
    </div>
  );
}
