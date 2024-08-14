import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './Message.module.css';

function Message({ type, msg }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!msg) {
      setVisible(false);
      return;
    }

    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [msg]);

  return (
    <>
      {visible && (
        <div className={`${styles.message} ${styles[type]}`}>
          {msg}
        </div>
      )}
    </>
  );
}

Message.propTypes = {
  type: PropTypes.oneOf(['success', 'error']).isRequired,
  msg: PropTypes.string,
};

export default Message;
