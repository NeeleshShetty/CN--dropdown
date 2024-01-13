import { useState } from "react"
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from "react-icons/io";


import "./App.css"
const App = () => {
  const [dropDownVisible, setDropDownVisible] = useState(false);
  const options = [
    "Yes" , "Probably Not"
  ]
  
  const handleHover = () => {
    setDropDownVisible(true)
    console.log(dropDownVisible);
  }

  const handleOption = ()=>{
    setDropDownVisible(false)
  }
  return (
		<>
			<div className="container">
				<h1>Should you use a dropdown ? </h1>
				<div
					className="select"
					onMouseEnter={handleHover}
				>
					
					Select  &nbsp;{dropDownVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}{' '}
				</div>
				{dropDownVisible && (
          options.map((option, index) => {
            return (
              <button key={index} onClick={handleOption}>{option }</button>
            )
          })
				)}
			</div>
		</>
	);
}

export default App