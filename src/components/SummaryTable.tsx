import { DotsSixVertical } from "phosphor-react";
import { generateDatesRange } from "../utils/generate-dates-range";
import { DayHabitIndicator } from "./DayHabitIndicator";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

export function SummaryTable() {
  const summaryDates = generateDatesRange();
  const minimumSizeToSummaryDates = 18 * 7;
  const fillRemainingDays = minimumSizeToSummaryDates - summaryDates.length;
  console.log(summaryDates);
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay, index) => {
          return (
            <div
              key={index}
              className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
            >
              {weekDay}
            </div>
          );
        })}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((date) => {
          return (
            <DayHabitIndicator
              key={date.toString()}
              amount={3}
              completed={Math.round(Math.random() * 3)}
            />
          );
        })}
        {fillRemainingDays > 0 &&
          Array.from({ length: fillRemainingDays }).map((_, index) => {
            return (
              <div
                key={index}
                className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg cursor-not-allowed opacity-40"
              />
            );
          })}
      </div>
    </div>
  );
}
