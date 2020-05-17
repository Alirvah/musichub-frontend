import { API_URL, HOST } from '../../config/constants';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { GlobalContext } from '../../config/GlobalContext';
import axios from 'axios';
import tokenStorage from '../../helper/tokenStorage';

const Login = () => {
  const [global, setGlobal] = useContext(GlobalContext);

  const [pwd, setPwd] = useState('');
  const [usr, setUsr] = useState('');
  const [wrongPwd, setWrongPwd] = useState(false);
  const [loading, setLoading] = useState(false);

  const login = (e) => {
    e.preventDefault();
    const fetchData = async () => {
      try {
        setLoading(true);
        const url = HOST + API_URL.TOKEN;
        const data = {
          username: usr,
          password: pwd,
        };
        const r = await axios.post(url, data);
        r.data.access && tokenStorage.setToken(r.data);
        if (!tokenStorage.getToken())
          throw new Error('wrong username or password');
        if (!r.data) throw new Error('no data received!');
        setGlobal({
          ...global,
          user: usr,
          route: '/'
        });
     		localStorage.setItem( 'global', JSON.stringify({ ...global, user: usr, route: '/' }));
        setUsr('');
        setPwd('');
      } catch (e) {
        setLoading(false);
        setWrongPwd(true);
      }
    };

    fetchData();
  };

  const onChange = (e) => {
    setWrongPwd(false);
    if (e.target.name === 'usr') {
      setUsr(e.target.value);
    }
    if (e.target.name === 'pwd') {
      setPwd(e.target.value);
    }
  };

  return (
    <>
      <section className="section">
        <div className="columns is-centered">
          <div className="column is-2">
            <div className="column"></div>
            <div className="column"></div>
            <div className="column"></div>
            <div className="column has-text-centered">
              <label className="label is-large">Sign In</label>
            </div>
            <form onSubmit={login}>
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    placeholder="username"
                    onChange={onChange}
                    name="usr"
                    required
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user" />
                  </span>
                </p>
              </div>

              <div className="field">
                <p className="control has-icons-left">
                  <input
                    className="input"
                    type="password"
                    placeholder="password"
                    onChange={onChange}
                    name="pwd"
                    required
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock" />
                  </span>
                </p>
              </div>

              {(wrongPwd &&  
                <article className="message is-danger">
                    <div className="message-body">
                       Wrong usename or password
                    </div>
                  </article>
              )}

              <div className="field">
                <p className="control">
                  <button
                    className={`button is-link ${loading && 'is-loading'}`}
                    type="submit"
                  >
                    Login
                  </button>
                </p>
								<Link to="/register">Register</Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
