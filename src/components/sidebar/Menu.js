import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../../config/GlobalContext';
import React, { useContext } from 'react';
import mystyles from '../../styles/mystyles.scss';

const Menu = () => {
  const [global, setGlobal] = useContext(GlobalContext);
  // const [showInfrastructure, setShowInfrastructure] = useState(false);

  const background = {
    background: mystyles.lgrey,
  };

  const changeMenuItem = (event) => {
    const menuItem = event.target.pathname;
    setGlobal({ ...global, route: menuItem });
    localStorage.setItem( 'global', JSON.stringify({ ...global, route: menuItem })
    );
  };

  return (
    <>
      <aside className="menu" styles={background}>
        <p className="menu-label has-text-link">Eventy</p>
        <ul className="menu-list">
          <li>
            <NavLink
              to={'/'}
              activeClassName="is-active"
              onClick={changeMenuItem}
            >
              <i className="fas fa-columns"></i>&nbsp;&nbsp;Kalendar
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/'}
              onClick={changeMenuItem}
            >
              <i className="fas fa-columns"></i>&nbsp;&nbsp;Kalendar2
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/'}
              onClick={changeMenuItem}
            >
              <i className="fas fa-columns"></i>&nbsp;&nbsp;Kalendar3
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Menu;
