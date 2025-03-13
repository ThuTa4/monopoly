import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { monoData } from "./data";
import { useRef } from "react";

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

//grid-rows-[110px,repeat(9,85px),110px]
export function Welcome() {
  const dice1Ref = useRef<HTMLDivElement>(null);
  const dice2Ref = useRef<HTMLDivElement>(null);

  const rollDice = (random: number) => {
    if (!dice1Ref.current) return;
    dice1Ref.current.style.animation = "rolling 4s";

    setTimeout(() => {
      if (!dice1Ref.current) return;
      switch (random) {
        case 1:
          dice1Ref.current.style.transform = "rotateX(0deg) rotateY(0deg)";

          break;
        case 6:
          dice1Ref.current.style.transform = "rotateX(180deg) rotateY(0deg)";

          break;
        case 2:
          dice1Ref.current.style.transform = "rotateX(90deg) rotateY(0deg)";

          break;
        case 5:
          dice1Ref.current.style.transform = "rotateX(-90deg) rotateY(0deg)";

          break;
        case 3:
          dice1Ref.current.style.transform = "rotateX(0deg) rotateY(90deg)";

          break;
        case 4:
          dice1Ref.current.style.transform = "rotateX(0deg) rotateY(-90deg)";

          break;
        default:
          break;
      }
    }, 500);
  };

  const randomDice = () => {
    let random;
    do {
      random = Math.floor(Math.random() * 10);
    } while (random < 1 || random > 6);

    rollDice(random);
    console.log("Dice rolled:", random);
  };
  return (
    <main className="flex items-center justify-center p-4">
      <div
        style={{
          gridTemplateRows: "100px repeat(9, 75px) 100px", // First & Last = 110px, Middle Rows = 85px
        }}
        className="grid grid-flow-col gap-0 rounded-[10px] border-2 border-gray-800 "
      >
        {boardGrid?.flat().map((index, i) =>
          index === null ? (
            <div
              key={i}
              style={{ display: "contents" }}
              className=" w-0 h-0 bg-gray-300 border "
            >
              <div></div>
            </div> // Empty space
          ) : monoData[index]?.type === "special" ? (
            <div
              key={index}
              style={{ background: monoData[index].color }}
              className="max-w-[100px] !min-h-[100px] flex items-center justify-center border text-center text-[11px] font-medium"
            >
              <div className="w-full h-full object-cover ">
                <img
                  src={monoData[index].cityImage}
                  className="w-full h-full object-cover "
                />
              </div>
            </div>
          ) : index < 10 ? (
            <div
              key={index}
              style={{ background: monoData[index].color }}
              className="w-[100px] h-[75px] flex items-center justify-center   border text-center text-[10px] font-medium relative"
            >
              <div className="absolute left-0 max-h-[75px] w-auto -rotate-90 z-50">
                {monoData[index].name}
              </div>

              <div className="w-[75px] h-[100px] object-cover -rotate-90">
                <img
                  src={monoData[index].cityImage}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ) : index > 20 && index < 30 ? (
            <div
              key={index}
              style={{ background: monoData[index].color }}
              className="w-[100px] h-[75px] flex items-center justify-center border text-center text-[10px] font-medium overflow-hidden relative"
            >
              <div className="absolute right-0 max-h-[75px] w-auto rotate-90 z-50">
                {monoData[index].name}
              </div>

              <div className="w-[75px] h-[100px] object-cover rotate-90">
                <img
                  src={monoData[index].cityImage}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ) : (
            <div
              key={index}
              style={{ background: monoData[index].color }}
              className="w-[75px] h-[100px] flex items-center justify-center border text-center text-[10px] font-medium  relative  bg-amber-300"
            >
              <div className=" absolute top-0 text-center">
                {monoData[index].name}
              </div>
              <div className="w-full h-full object-cover">
                <img
                  src={monoData[index].cityImage}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )
        )}
      </div>
      <div className="absolute">
        <div className="diceContainer relative bottom-50">
          <div
            ref={dice1Ref}
            id="dice1"
            className="relative w-[105px] h-[105px] transform-3d rotate-x-0 rotate-y-0"
          >
            <div
              id="front"
              style={{ transform: "translateZ(50px)" }}
              className="face"
            ></div>
            <div
              id="back"
              style={{ transform: "rotateX(180deg) translateZ(50px)" }}
              className="face"
            ></div>
            <div
              id="top"
              style={{ transform: "rotateX(-90deg) translateZ(50px)" }}
              className="face"
            ></div>
            <div
              id="bottom"
              style={{ transform: "rotateX(90deg) translateZ(50px)" }}
              className="face"
            ></div>
            <div
              id="right"
              style={{ transform: "rotateY(90deg) translateZ(50px)" }}
              className="face"
            ></div>
            <div
              id="left"
              style={{ transform: "rotateY(-90deg) translateZ(50px)" }}
              className="face after:-mt-[35px] after:-ml-[35px] after:shadow-[25px_25px_#131210,50px_50px_#131210]"
            ></div>
          </div>

          <div
            ref={dice2Ref}
            id="dice2"
            className="relative w-[105px] h-[105px] transform-3d rotate-x-0 rotate-y-0"
          >
            <div
              id="front"
              style={{ transform: "translateZ(50px)" }}
              className="face"
            ></div>
            <div
              id="back"
              style={{ transform: "rotateX(180deg) translateZ(50px)" }}
              className="face"
            ></div>
            <div
              id="top"
              style={{ transform: "rotateX(-90deg) translateZ(50px)" }}
              className="face"
            ></div>
            <div
              id="bottom"
              style={{ transform: "rotateX(90deg) translateZ(50px)" }}
              className="face"
            ></div>
            <div
              id="right"
              style={{ transform: "rotateY(90deg) translateZ(50px)" }}
              className="face"
            ></div>
            <div
              id="left"
              style={{ transform: "rotateY(-90deg) translateZ(50px)" }}
              className="face after:-mt-[35px] after:-ml-[35px] after:shadow-[25px_25px_#131210,50px_50px_#131210]"
            ></div>
          </div>
        </div>
        <div className="bottomContainer relative bottom-50 mt-10 w-[250px] text-center">
          <button
            className="rollBottom bg-blue-500 cursor-pointer p-[5px_10px_5px_10px] rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 "
            onClick={randomDice}
          >
            Roll Dice
          </button>
        </div>
      </div>
    </main>
  );
}
