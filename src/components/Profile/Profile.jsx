import css from './Profile.module.css';

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.wrapper}>
      <div className={css.user}>
        <img src={image} alt="User avatar" className={css.avatar} />
        <p className={css.nick}>{name}</p>
        <p className={css.inf}>@{tag}</p>
        <p className={css.inf}>{location}</p>
      </div>

      <ul className={css.list}>
        <li key="li1" className={css.item}>
          <span>Followers</span>
          <span className={css.data}>{followers}</span>
        </li>
        <li key="li2" className={css.item}>
          <span>Views</span>
          <span className={css.data}>{views}</span>
        </li>
        <li key="li3" className={css.item}>
          <span>Likes</span>
          <span className={css.data}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
