import { HiUser } from "react-icons/hi";
const Mailbox = ({ username, messages }) => {
  return (
    <div>
      <p><HiUser/>Hello {username}</p>
      {messages.length > 0 ? (
        <div>
          <p>You have {messages.length} unread messages</p>
        </div>
      ) : (
        <p>No unread messages</p>
      )}
    </div>
  );
};

export default Mailbox