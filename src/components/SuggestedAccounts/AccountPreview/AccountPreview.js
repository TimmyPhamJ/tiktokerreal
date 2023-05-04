import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <img
          className={cx('avatar')}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/082d64bcfb39f8a18294794f75fbee17~c5_100x100.jpeg?x-expires=1683378000&x-signature=xJKik9shjHYwx1ltUSB82a4AnYM%3D"
          alt=""
        />
        <Button primary>Follow</Button>
      </div>
      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>GaiChan🍌</strong>
          <FontAwesomeIcon className={cx('tickb')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>Võ Thị Hương Giang</p>
        <p className={cx('analytics')}>
          <strong className={cx('value')}>8.2M </strong>
          <span className={cx('label')}>Follower</span>
          <strong className={cx('value')}>10.2B </strong>
          <span className={cx('label')}>Likes</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
