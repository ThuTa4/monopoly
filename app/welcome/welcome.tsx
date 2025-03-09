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

//grid-rows-[110px,repeat(9,85px),110px]
export function Welcome() {
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
        <div className="relative  w-[105px] h-[105px] bottom-50 transform-3d rotate-x-45 rotate-y-45">
          <div
            id="front"
            style={{ transform: "translateZ(50px)" }}
            className="face after:content-[''] after:absolute after:w-[30px] after:h-[30px] after:rounded-[50%] after:top-[50%] after:left-[50%] after:bg-[#f63330] after:-mt-[15px] after:-ml-[15px]"
          ></div>
          <div
            id="back"
            style={{ transform: "rotateX(180deg) translateZ(50px)" }}
            className="face after:content-[''] after:absolute after:w-[17px] after:h-[17px] after:rounded-[50%] after:top-[50%] after:left-[50%] after:bg-[#131210] after:-mt-[35px] after:-ml-[30px] after:shadow-[40px_0_#131210,0_25px_#131210,40px_25px_#131210,0_50px_#131210,40px_50px_#131210]"
          ></div>
          <div
            id="top"
            style={{ transform: "rotateX(90deg) translateZ(50px)" }}
            className="face  after:content-[''] after:absolute after:w-[17px] after:h-[17px] after:rounded-[50%] after:top-[50%] after:left-[50%] after:bg-[#131210] after:-mt-[30px] after:-ml-[30px] after:shadow-[40px_40px_#131210]"
          ></div>
          <div
            id="bottom"
            style={{ transform: "rotateX(-90deg) translateZ(50px)" }}
            className="face after:content-[''] after:absolute after:w-[17px] after:h-[17px] after:rounded-[50%] after:top-[50%] after:left-[50%] after:bg-[#131210] after:-mt-[36px] after:-ml-[36px] after:shadow-[26px_26px_#131210,52px_52px_#131210,52px_0_#131210,0_52px_#131210]"
          ></div>
          <div
            id="right"
            style={{ transform: "rotateY(90deg) translateZ(50px)" }}
            className="face after:content-[''] after:absolute after:w-[17px] after:h-[17px] after:rounded-[50%] after:top-[50%] after:left-[50%] after:bg-[#131210] after:-mt-[30px] after:-ml-[30px] after:shadow-[40px_0_#131210,0_40px_#131210,40px_40px_#131210]"
          ></div>
          <div
            id="left"
            style={{ transform: "rotateY(-90deg) translateZ(50px)" }}
            className="face after:content-[''] after:absolute after:w-[17px] after:h-[17px] after:rounded-[50%] after:top-[50%] after:left-[50%] after:bg-[#131210] after:-mt-[35px] after:-ml-[35px] after:shadow-[25px_25px_#131210,50px_50px_#131210]"
          ></div>
        </div>
      </div>
    </main>
  );
}
