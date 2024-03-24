import { Bs0Circle } from "react-icons/bs";
import Swal from 'sweetalert2';

import 'animate.css';
import { useRef, useState } from "react";

function App() {
  /** animation */
  const textRef = useRef()

  /** count and even */
  const [count, setCount] = useState(0);

  const handleAnimation = () => {
    console.log(textRef.current);
    textRef.current;
    textRef.current.classList.add("animate__animated");
    textRef.current.classList.add("animate__bounce");

    setTimeout(() => {
      textRef.current.classList.remove("animate__animated");
      textRef.current.classList.remove("animate__bounce");
    }, 1000);
  }
  const handleClick = () => {
    // console.log('clicked');
    // Swal.fire("SweetAlert2 is working!");
    Swal.fire({
      title: "The Internet?",
      text: "That thing is still around?",
      icon: "question"
    });
  }
  return (
    <div>
      <h1 ref={textRef} className="">My Website</h1>
      <button onClick={handleClick} className="btn btn-primary"> <Bs0Circle></Bs0Circle> Submit</button>

      <button className="animate__animated hover:animate__bounce" onClick={() => {
        setCount((count) => count + 1)
        handleAnimation()
      }}>Animation {count}
      </button>
    </div>
  )
}

export default App
