import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/4abd3d07ddea0f1c636aec1bba9cf997~c5_100x100.jpeg?x-expires=1682524800&x-signature=7L6g4kvIdlbeqZBQAkzAKSg4iOA%3D"
        alt="Roisee"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Roisee</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>Hoàng Thị Hằng Phượng</span>
      </div>
    </div>
  );
}

export default AccountItem;
