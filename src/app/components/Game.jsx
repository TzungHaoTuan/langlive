"use client";
import { FaUser } from "react-icons/fa";
import List from "./List";
import { useDispatch, useSelector } from "react-redux";
import { setWinner, resetWinner } from "@/lib/redux/features/draw/drawSlice";
import { useState, useEffect } from "react";
import list from "@/data/users.json";

const Game = () => {
  const currentWinner = useSelector((state) => state.drawReducer.winner);
  const dispatch = useDispatch();
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive && (seconds > 0 || minutes > 0)) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prev) => prev - 1);
        } else if (minutes > 0) {
          setMinutes((prev) => prev - 1);
          setSeconds(59);
        }
      }, 1000);
    } else if (!isActive || (minutes === 0 && seconds === 0)) {
      clearInterval(interval);
      if (isActive) {
        handleDraw();
      }
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, minutes, seconds]);

  const handleDraw = () => {
    const randomNum = Math.floor(Math.random() * list.length) + 1;
    const winner = list.find((user) => user.id === randomNum);
    dispatch(setWinner(winner.name));
  };

  const handleSet = () => {
    if (isActive) return;
    setIsActive(true);
  };
  const handleReset = () => {
    setIsActive(false);
    setMinutes("");
    setSeconds(0);
    dispatch(resetWinner());
  };

  const handleChange = (e) => {
    setMinutes(e.target.value);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full px-16 sm:px-28  lg:px-60 py-20 justify-between">
      <div className="flex flex-col">
        <div className="text-2xl mb-10">Time Setting:</div>
        <div className="flex justify-between items-center">
          <input
            type="number"
            disabled={isActive}
            onChange={handleChange}
            placeholder="Set minutes"
            className="input input-bordered w-full min-w-[130px]"
          />
          <div className="ml-4">minutes</div>
        </div>
        <div className="flex justify-between items-center my-5">
          <button
            className="btn border-2 border-slate-600 w-1/2"
            onClick={handleSet}
            disabled={isActive}
          >
            Set
          </button>
          <button
            className="btn border-2 border-slate-600 w-1/2 ml-4"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
        <div className="mx-auto text-7xl">
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </div>
        <div className="text-2xl my-10">Winner:</div>
        <div className="flex items-center">
          <div className={`avatar ${currentWinner || "opacity-0"}`}>
            <div className="rounded-full border-2 p-2">
              <FaUser size={16} />
            </div>
          </div>
          <span className="ml-5">{currentWinner}</span>
        </div>
      </div>
      <div className="mt-10 sm:mt-0">
        <div className="text-2xl mb-10">List:</div>
        <List />
      </div>
    </div>
  );
};

export default Game;
