import { FaUser } from "react-icons/fa";

const User = ({ name }) => {
  return (
    <div className="flex items-center">
      <div className="avatar">
        <div className="rounded-full border-2 p-2">
          <FaUser size={16} />
        </div>
      </div>
      <div className="ml-4">{name}</div>
    </div>
  );
};

export default User;
