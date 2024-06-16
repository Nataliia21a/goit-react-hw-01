import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ friend }) {
  const statusClass = clsx(friend.isOnline ? css.isOnline : css.isOffline);

  return (
    <div className={css.friendListItem}>
      <img
        className={css.image}
        src={friend.avatar}
        alt="Avatar"
        width="100"
        height="100"
      />
      <p className={css.friendName}>{friend.name}</p>
      <p className={statusClass}>{friend.isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
