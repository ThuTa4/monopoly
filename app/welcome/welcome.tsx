import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { monoData } from "./data";

const boardGrid = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // Top row
  [39, null, null, null, null, null, null, null, null, null, 11], // Left & Right (middle spaces)
  [38, null, null, null, null, null, null, null, null, null, 12],
  [37, null, null, null, null, null, null, null, null, null, 13],
  [36, null, null, null, null, null, null, null, null, null, 14],
  [35, null, null, null, null, null, null, null, null, null, 15],
  [34, null, null, null, null, null, null, null, null, null, 16],
  [33, null, null, null, null, null, null, null, null, null, 17],
  [32, null, null, null, null, null, null, null, null, null, 18],
  [31, null, null, null, null, null, null, null, null, null, 19],
  [30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20], // Bottom row
];

export function Welcome() {
  return (
    <main className="flex items-center justify-center">
      <div className="w-[1000px] h-[1000px] bg-blue-50 grid grid-cols-11 grid-rows-11 gap-0 border-4 border-black  ">
        {boardGrid?.flat().map((index, i) =>
          index === null ? (
            <div className=" bg-amber-500 text-black ">{i}</div>
          ) : monoData[index].type === "special" ? (
            <div
              key={index}
              style={{ background: monoData[index].color }}
              className={`  min-w-[100px]  max-w-[100px] max-h-[100px] h-[100px]`}
            >
              {monoData[index].name}
            </div>
          ) : (
            <div
              key={index}
              style={{ background: monoData[index].color }}
              className={`  min-w-[100px]  max-w-[100px] max-h-[100px] h-[100px]`}
            >
              {monoData[index].name}
            </div>
          )
        )}
      </div>
    </main>
  );
}
