// import { useRef, useState } from "react";

// const Assign6 = () => {
//   const [showOTP, setShowOTP] = useState(true);
//   return (
//     <>
//       <div className="flex justify-center items-center h-screen bg-black">
//         <div className=" border-2 border-dashed border-zinc-400 rounded-3xl w-3/12">
//           {showOTP ? (
//             <OTP btn="Login" />
//           ) : (
//             <NumberInput changer={setShowOTP} btn="Send OTP" />
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Assign6;

// const OTP = ({ btn }) => {
//   const otpInputs = Array(4)
//     .fill(null)
//     .map(() => useRef(null));
//   const focusInput = (inputs, index) => {
//     inputs[index].current.focus();
//   };

//   const handleInputChange = (inputs, index, value) => {
//     // Move to the next input on value change
//     if (value && index < inputs.length - 1) {
//       focusInput(inputs, index + 1);
//     }
//   };

//   const handleKeyDown = (inputs, index, e) => {
//     // On pressing the Arrow keys, move the focus on the left and right side
//     if (e.key === "ArrowLeft" && index > 0) {
//       focusInput(inputs, index - 1);
//     } else if (e.key === "ArrowRight" && index < inputs.length - 1) {
//       focusInput(inputs, index + 1);
//     }

//     // Move to the previous input on Backspace if not on the first input
//     if (e.key === "Backspace" && index > 0) {
//       e.preventDefault();
//       inputs[index].current.value = "";
//       focusInput(inputs, index - 1);
//     }
//   };

//   return (
//     <>
//       <div className="gap-8 py-10 px-6 flex flex-col items-center justify-between">
//         <h1 className="text-4xl text-white">Login via OTP</h1>
//         <div className="flex gap-2 w-full justify-center">
//           {otpInputs.map((inputRef, index) => (
//             <input
//               className="text-center px-1 py-3 w-1/12 min-w-[40px]"
//               key={index}
//               type="text"
//               maxLength={1}
//               ref={inputRef}
//               onChange={(e) =>
//                 handleInputChange(otpInputs, index, e.target.value)
//               }
//               onKeyDown={(e) => handleKeyDown(otpInputs, index, e)}
//               onClick={() => focusInput(otpInputs, index)}
//             />
//           ))}
//         </div>
//         <Button btn={btn} />
//       </div>
//     </>
//   );
// };

// const NumberInput = ({ changer, btn }) => {
//   return (
//     <>
//       <div className="flex flex-col items-center justify-between gap-8 py-10 px-6">
//         <h1 className="text-4xl text-white">Login via OTP</h1>
//         <input
//           type="text"
//           className="py-2 bg-transparent rounded w-3/4 border border-dashed text-center text-white placeholder:text-center"
//           placeholder="Enter the phone number"
//           minLength={10}
//         />
//         <Button changer={changer} btn={btn} />
//       </div>
//     </>
//   );
// };

// const Button = ({ changer, btn }) => {
//   return (
//     <>
//       <button
//         className="bg-transparent text-white border border-dotted px-2 py-2 border-zinc-400 rounded-lg"
//         onClick={() => changer(true)}
//       >
//         {btn}
//       </button>
//     </>
//   );
// };


import { useRef, useState } from "react";

const Assign6 = () => {
  const [showOTP, setShowOTP] = useState(false);
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-black px-4">
        <div className="border-2 border-dashed border-zinc-400 rounded-3xl w-full max-w-md md:w-8/12">
          {showOTP ? (
            <OTP btn="Login" changer={setShowOTP}/>
          ) : (
            <NumberInput changer={setShowOTP} btn="Send OTP" />
          )}
        </div>
      </div>
    </>
  );
};

export default Assign6;

const OTP = ({ btn,changer }) => {
  const otpInputs = Array(4)
    .fill(null)
    .map(() => useRef(null));
  const focusInput = (inputs, index) => {
    inputs[index].current.focus();
  };

  const handleInputChange = (inputs, index, value) => {
    if (value && index < inputs.length - 1) {
      focusInput(inputs, index + 1);
    }
  };

  const handleKeyDown = (inputs, index, e) => {
    if (e.key === "ArrowLeft" && index > 0) {
      focusInput(inputs, index - 1);
    } else if (e.key === "ArrowRight" && index < inputs.length - 1) {
      focusInput(inputs, index + 1);
    }

    if (e.key === "Backspace" && index > 0) {
      e.preventDefault();
      inputs[index].current.value = "";
      focusInput(inputs, index - 1);
    }
  };

  return (
    <>
      <div className="gap-8 py-10 px-4 sm:px-6 flex flex-col items-center justify-between">
        <h1 className="text-4xl text-white">Login via OTP</h1>
        <div className="flex gap-2 w-full justify-center">
          {otpInputs.map((inputRef, index) => (
            <input
              className="text-center px-1 py-3 w-1/6 sm:w-1/12 min-w-[40px] bg-transparent border border-zinc-400 rounded text-white"
              key={index}
              type="text"
              maxLength={1}
              ref={inputRef}
              onChange={(e) =>
                handleInputChange(otpInputs, index, e.target.value)
              }
              onKeyDown={(e) => handleKeyDown(otpInputs, index, e)}
              onClick={() => focusInput(otpInputs, index)}
            />
          ))}
        </div>
        <Button btn={btn} changer={changer}/>
      </div>
    </>
  );
};

const NumberInput = ({ changer, btn }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-between gap-8 py-10 px-4 sm:px-6">
        <h1 className="text-4xl text-white">Login via OTP</h1>
        <input
          type="text"
          className="py-2 bg-transparent rounded w-full sm:w-3/4 border border-dashed text-center text-white placeholder:text-center"
          placeholder="Enter the phone number"
          minLength={10}
        />
        <Button changer={changer} btn={btn} />
      </div>
    </>
  );
};

const Button = ({ changer, btn }) => {
  return (
    <>
      <button
        className="bg-transparent text-white border border-dotted px-2 py-2 border-zinc-400 rounded-lg"
        onClick={() => changer(t => !t)}
      >
        {btn}
      </button>
    </>
  );
};
