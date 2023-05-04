import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div>
      <Tippy interactive delay={[800, 0]} offset={[-20, -8]} placement="bottom" render={renderPreview}>
        <div className={cx('account-item')}>
          <img
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/082d64bcfb39f8a18294794f75fbee17~c5_100x100.jpeg?x-expires=1683378000&x-signature=xJKik9shjHYwx1ltUSB82a4AnYM%3D"
            alt=""
            className={cx('avatar')}
          />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>GaiChan🍌</strong>
              <FontAwesomeIcon className={cx('tickb')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>Võ Thị Hương Giang</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default AccountItem;
