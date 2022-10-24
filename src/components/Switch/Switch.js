// import React, {useState} from "react";
//
// const colors = ["#0080ff", "#0058c4"];
//
// const Switch = () => {
//
//     const [backgroundColor, setBackgroundColor] = useState("");
//
//
//     return (
//         <div style={{backgroundColor}}>
//
//             <style>
//                 {`
//                 .set {
//                   border-radius: 50%;
//                   width: 20px;
//                   height: 20px;
//                   border: 1px solid black;
//                   display: inline-block;
//                   cursor: pointer;
//                 }
//                 #screen {
//                   width: 100vw;
//                   height: 100vh;
//                 }
//       `}
//             </style>
//
//             {colors.map((c) => {
//                 return (
//                     <div key={c} style={{backgroundColor: c}} class="set"
//                          onClick={() => setBackgroundColor(c)}></div>
//                 );
//             })}
//         </div>
//     );
// }

// import {useRef} from "react";
//
// const Switch = () => {
//
//     const colorChange = useRef(null);
//
//     const clickMe = () => {
//         if (colorChange.current.style.backgroundColor === "gray") {
//             colorChange.current.style.backgroundColor = "#0080ff";
//         } else {
//             colorChange.current.style.backgroundColor = "gray";
//         }
//     };
//
//     return (
//             <div ref={colorChange}>
//
//                 <input type="checkbox" onClick={clickMe} ref={colorChange}/>
//
//             </div>
//     );
// }
//
//
// export {Switch};