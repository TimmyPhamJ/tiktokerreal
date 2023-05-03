import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import config from '~/config';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'tiếng anh',
          code: 'en',
          title: 'English',
        },
        {
          type: 'Vietnamess',
          code: 'vi',
          title: 'Tiếng Việt',
          children: {
            title: 'Vùng Miềng',
            data: [
              {
                code: 'vin',
                title: 'Tiếng Việt Bắc',
              },
              {
                code: 'vis',
                title: 'Tiếng Việt Nam',
              },
            ],
          },
        },
        {
          type: 'tiếng nhật',
          code: 'JP',
          title: 'Japaness',
        },
        {
          type: 'tiếng trung',
          code: 'cn',
          title: 'Tàu Khựa',
        },
        {
          type: 'tiếng anh',
          code: 'en',
          title: 'English',
        },
        {
          type: 'Vietnamess',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'tiếng nhật',
          code: 'JP',
          title: 'Japaness',
        },
        {
          type: 'tiếng trung',
          code: 'cn',
          title: 'Tàu Khựa',
        },
        {
          type: 'tiếng anh',
          code: 'en',
          title: 'English',
        },
        {
          type: 'Vietnamess',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'tiếng nhật',
          code: 'JP',
          title: 'Japaness',
        },
        {
          type: 'tiếng trung',
          code: 'cn',
          title: 'Tàu Khựa',
        },
        {
          type: 'tiếng anh',
          code: 'en',
          title: 'English',
        },
        {
          type: 'Vietnamess',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'tiếng nhật',
          code: 'JP',
          title: 'Japaness',
        },
        {
          type: 'tiếng trung',
          code: 'cn',
          title: 'Tàu Khựa',
        },
        {
          type: 'tiếng anh',
          code: 'en',
          title: 'English',
        },
        {
          type: 'Vietnamess',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'tiếng nhật',
          code: 'JP',
          title: 'Japaness',
        },
        {
          type: 'tiếng trung',
          code: 'cn',
          title: 'Tàu Khựa',
        },
        {
          type: 'tiếng anh',
          code: 'en',
          title: 'English',
        },
        {
          type: 'Vietnamess',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and Help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard Shortcuts',
  },
];

function Header() {
  const currentUser = true;

  //Handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'Vietnamess':
        //Handle change language
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/@thanhmeo.18',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coins',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Setting',
      to: '/setting',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.routes.home} className={cx('logo-link')}>
          <img src={images.logo} alt="TikTok" />
        </Link>

        <Search />

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Upload Video" placement="bottom">
                <button className={cx('action-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content="Message" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content="Upload Video" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}

          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/1644797333016577.jpeg?x-expires=1683295200&x-signature=fKrBqrokUFLlRpIGQiVNsEI61L0%3D"
                className={cx('user-avatar')}
                alt="ThaoHentai"
                //fallback="http://files.fullstack.edu.vn/user_avatars/623b4b2d95cec.png"
              />
            ) : (
              <button trigger="click" className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
