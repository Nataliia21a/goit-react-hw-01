import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <div>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.username}>{name}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.statsList}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.statsList}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.statsList}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
