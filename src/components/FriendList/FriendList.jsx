import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function Frendlist({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}
