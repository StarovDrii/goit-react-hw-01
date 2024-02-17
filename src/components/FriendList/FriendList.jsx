import css from './FriendList.module.css';
import FriendListItem from '../FriendsListItem/FriendsListItem';
export default function FriendList({ friends }) {
  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {friends.map(friend => (
          <li key={friend.id} className={css.item}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
