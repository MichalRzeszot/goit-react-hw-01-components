import FriendList from './components/friendslist/friendslist';
import UserProfile from './components/profile/profile';
import Statistic from './components/statistics/statistics';
import TransactionHistory from './components/transactionhistory/transaction';
import friends from './assets/friends.json';
import user from './assets/user.json';
import stat from './assets/data.json';
import transactions from './assets/transactions.json';

function App() {
  return (
    <div>
      <UserProfile {...user} />
      <Statistic stats={stat} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory item={transactions} />
    </div>
  );
}

export default App;
