import clsx from 'clsx';
import css from './FriendsListItem.module.css';
export default function FriendListItem({ avatar, name, isOnline }) {
  const status = clsx(css.online, !isOnline && css.offline);
  return (
    <>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={status}>{isOnline ? 'Online' : 'Offline'}</p>
    </>
  );
}
