import React, { useState } from "react";

const Assign2 = () => {
  const [color, setColor] = useState("maroon");
  return (
    <>
      <div
        className="flex justify-center items-end w-screen h-screen pb-5"
        style={{ background: color }}
      >
        <div className="flex justify-between gap-10 shadow-2xl shadow-black p-2">
          <button
            className="outline-none px-4 py-2 rounded-full text-black shadow-lg bg-yellow-300"
            onClick={() => 
              setColor('yellow')
            }
          >
            Yellow
          </button>
          <button
            className="bg-green-300 outline-none px-4 py-2 m-0 rounded-full shadow-lg  "
            onClick={() => setColor('green')}
          >
            Green
          </button>
          <button
            className="bg-pink-100  outline-none px-4 py-2 m-0 rounded-full  "
            onClick={() => setColor('pink')}
          >
            Pink
          </button>
          <button
            className="bg-blue-300  outline-none px-4 py-2 rounded-full "
            onClick={() => setColor('blue')}
          >
            Blue
          </button>
          <button
            className="bg-purple-800  outline-none px-4 py-2 rounded-full "
            onClick={() => setColor('purple')}
          >
            Purple
          </button>

          <button
            className="bg-white  outline-none px-4 py-2 rounded-full "
            onClick={() => setColor('white')}
          >
            Default
          </button>
        </div>
      </div>
    </>
  );
};

export default Assign2;
