"use client";
import { FaUser } from "react-icons/fa";
import List from "./List";
import { useDispatch, useSelector } from "react-redux";
import { setWinner, resetWinner } from "@/lib/redux/features/draw/drawSlice";
import list from "@/data/users.json";

const Game = () => {
  const currentWinner = useSelector((state) => state.drawReducer.winner);
  const dispatch = useDispatch();

  const handleDraw = () => {
    const randomNum = Math.floor(Math.random() * list.length) + 1;
    const winner = list.find((user) => user.id === randomNum);
    dispatch(setWinner(winner.name));
  };

  const handleReset = () => {
    dispatch(resetWinner());
  };
  return (
    <div className="flex flex-row w-full px-40 py-20 justify-between">
      <div>
        <div className="text-2xl mb-10">Time Setting:</div>
        <button
          className="btn border-2 border-slate-600 mb-10"
          onClick={handleDraw}
        >
          Set
        </button>
        <button
          className="btn border-2 border-slate-600 mb-10 ml-5"
          onClick={handleReset}
        >
          Reset
        </button>
        <div className="text-2xl mb-10">Winner:</div>
        <div className="flex items-center">
          <div className={`avatar ${currentWinner || "opacity-0"}`}>
            <div className="rounded-full border-2 p-2">
              <FaUser size={16} />
            </div>
          </div>
          <span className="ml-5">{currentWinner}</span>
        </div>
      </div>
      <div className="">
        <div className="text-2xl mb-10">List:</div>
        <List />
      </div>
    </div>
  );
};

export default Game;
