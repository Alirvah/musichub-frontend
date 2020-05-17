import { API_URL, HOST } from '../../config/constants';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { GlobalContext } from '../../config/GlobalContext';
import axios from 'axios';
import tokenStorage from '../../helper/tokenStorage';

const Login = () => {
  const [global, setGlobal] = useContext(GlobalContext);

  const [pwd, setPwd] = useState('');
  const [pwd2, setPwd2] = useState('');
  const [email, setEmail] = useState('');
  const [usr, setUsr] = useState('');
  const [loading, setLoading] = useState(false);
  const [wrongPwd, setWrongPwd] = useState(false);
  const [match, setMatch] = useState(true);

  const login = (e) => {
    e.preventDefault();

    if(pwd!==pwd2){
      setMatch(false)
      return false;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const url = HOST + API_URL.REGISTER;
        const data = {
          username: usr,
          password: pwd,
          password_confirm: pwd2,
          email: email,
        };
        const r = await axios.post(url, data);
        setUsr('');
        setPwd('');
        setPwd2('');
        setEmail('');
				window.location.href = '/';
      } catch (e) {
					console.log('Error: ', e)
          if('response' in e){
            alert(JSON.stringify(e.response.data));
          }
          setWrongPwd('true');
      }
      setLoading(false);
    };

    fetchData();
  };

  const onChange = (e) => {
    if (e.target.name === 'usr') {
      setUsr(e.target.value);
    }
    if (e.target.name === 'pwd') {
      setPwd(e.target.value);
    }
    if (e.target.name === "pwd2") {
      setPwd2(e.target.value);
      setMatch(true)
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
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
              <p>Username:</p>
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    placeholder="Username"
                    onChange={onChange}
                    name="usr"
                    required
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user" />
                  </span>
                </p>
              </div>
              <p>E-Mail:</p>
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    placeholder="Email"
                    onChange={onChange}
                    name="email"
                    type="email"
                    required
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user" />
                  </span>
                </p>
              </div>

              <p>Password:</p>
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    onChange={onChange}
                    name="pwd"
                    required
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock" />
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    className="input"
                    type="password"
                    placeholder="Password repeat"
                    onChange={onChange}
                    name="pwd2"
                    required
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock" />
                  </span>
                </p>
              </div>
              {(!match &&  
                <article className="message is-danger">
                    <div className="message-body">
                      Password does not match!
                    </div>
                  </article>
              )}


              <div className="field">
                <p className="control">
                  <button
                    className={`button is-danger ${loading && 'is-loading'}`}
                    type="submit"
                  >
                    Login
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
