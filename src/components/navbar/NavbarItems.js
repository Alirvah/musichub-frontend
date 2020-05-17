import React, { useContext, useEffect, useState } from 'react';

import { GlobalContext } from '../../config/GlobalContext';
import { NavLink, Redirect } from 'react-router-dom';
import { getGroups } from '../../api/groupsApi';
import mystyles from '../../styles/mystyles.scss';

const NavbarItems = () => {
  const [global, setGlobal] = useContext(GlobalContext);

  const [grps, setGrps] = useState([]);
  const [grpsInit, setGrpsInit] = useState([]);
  const [srch, setSrch] = useState('');

  const iconStyleW = {
    color: mystyles.white,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getGroups();
        const groupName = response.data.results.map((e) => e.name);
        setGrps(groupName);
        setGrpsInit(groupName);
        !global.group
          ? setGlobal({ ...global, group: groupName[0] })
          : setGlobal({ ...global, group: global.group });
        localStorage.setItem('global', JSON.stringify(global));
      } catch (e) {
        console.log('Error(xxx) ' + e);
      }
    };
    fetchData();
    // https://github.com/facebook/create-react-app/issues/6880
    // Next line is not a comment is hack to remove some annoying warnings
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logout = () => {
    setGlobal({});
    localStorage.clear();
    //return(<Redirect to='/' />);
    window.location.href = '/';
  };

  return (
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <NavLink className="navbar-item" to={'/'}>
          O nas
        </NavLink>
        <div className="navbar-item has-dropdown is-hoverable">
          <div className="navbar-link"> Viac </div>
          <div className="navbar-dropdown">
            <NavLink className="navbar-item" to={'/'}>
              O nas
            </NavLink>
            <NavLink className="navbar-item" to={'/'}>
              Kontakt
            </NavLink>
            <hr className="navbar-divider" />
          </div>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item has-dropdown is-hoverable">
          <div className="navbar-link">
            <span className="icon is-small is-left">
              <i className="fas fa-user" style={iconStyleW} />
            </span>
            <div className="navbar-item" style={iconStyleW}>
              {global.user}
            </div>
          </div>

          <div className="navbar-dropdown is-right">
            <div className="button is-white is-fullwidth navbar-item">
              <span className="panel-icon">
                <i className="far fa-address-card" />
              </span>
              <span>Profil</span>
            </div>

            <hr className="navbar-divider" />

            <div
              className="button is-white is-fullwidth navbar-item"
              onClick={logout}
            >
              <span className="panel-icon">
                <i className="fas fa-power-off" />
              </span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarItems;
