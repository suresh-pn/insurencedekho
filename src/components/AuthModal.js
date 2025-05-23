import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ForgotPasswordForm from './ForgotPasswordForm';

const AuthModal = ({ show, handleClose, setUser }) => {
  const [activeTab, setActiveTab] = useState('login');

  const switchTo = (tab) => {
    setActiveTab(tab);
  };

  if (!show) return null;

  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      onClick={handleClose}
    >
      <div className="modal-dialog modal-dialog-centered" onClick={e => e.stopPropagation()}>
        <div className="modal-content p-3 rounded-4">
          <div className="modal-header border-0">
            <h5 className="modal-title text-capitalize">{activeTab === 'login' ? 'Login' : activeTab === 'register' ? 'Register' : 'Forgot Password'}</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={handleClose} />
          </div>

          <div className="modal-body">
            {activeTab === 'login' && (
              <>
                <LoginForm
                  switchTo={switchTo}
                  onLoginSuccess={(user) => {
                    setUser(user);
                    handleClose();
                  }}
                />
                <div className="text-center mt-3">
                  <small>
                    Don’t have an account?{' '}
                    <span
                      className="text-primary fw-bold"
                      style={{ cursor: 'pointer' }}
                      onClick={() => switchTo('register')}
                    >
                      Register
                    </span>
                  </small>
                  <br />
                  <small>
                    <span
                      className="text-secondary"
                      style={{ cursor: 'pointer' }}
                      onClick={() => switchTo('forgot')}
                    >
                      Forgot Password?
                    </span>
                  </small>
                </div>
              </>
            )}

            {activeTab === 'register' && (
              <>
                <RegisterForm switchTo={switchTo} />
                <div className="text-center mt-3">
                  <small>
                    Already have an account?{' '}
                    <span
                      className="text-primary fw-bold"
                      style={{ cursor: 'pointer' }}
                      onClick={() => switchTo('login')}
                    >
                      Login
                    </span>
                  </small>
                </div>
              </>
            )}

            {activeTab === 'forgot' && (
              <>
                <ForgotPasswordForm switchTo={switchTo} />
                <div className="text-center mt-3">
                  <small>
                    Remember your password?{' '}
                    <span
                      className="text-primary fw-bold"
                      style={{ cursor: 'pointer' }}
                      onClick={() => switchTo('login')}
                    >
                      Login
                    </span>
                  </small>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
