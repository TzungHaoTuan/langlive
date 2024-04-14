import list from "@/data/users.json";
import User from "./User";
const List = () => {
  return (
    <div className="flex flex-col space-y-4">
      {list.map((item) => {
        return <User key={item.id} name={item.name} />;
      })}
    </div>
  );
};
export default List;
