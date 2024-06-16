import Profile from "../Profile/Profile";
import userData from "../../userData.json";
import Frendlist from "../FriendList/FriendList";
import friends from "../../friends.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "../../transactions.json";

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <Frendlist friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
