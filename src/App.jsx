import { useState } from "react"
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from "react-icons/io";


import "./App.css"
const App = () => {
  const [dropDownVisible, setDropDownVisible] = useState(false);
  const options = [
     "YES","Probably Not","No"
  ]
  
  const handleHover = () => {
    setDropDownVisible(true)
    
  }

  const handleOption = () => {
    setDropDownVisible(!dropDownVisible)
  }

  console.log(dropDownVisible);
  return (
		<>
			<div className="container">
				<h1>Should you use a dropdown ? </h1>
				<div
					className="select"
					onMouseEnter={handleHover}
				>
					Select &nbsp;{dropDownVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}{' '}
				</div>
				<div className="options">
					{dropDownVisible &&
						options.map((option, index) => {
							return (
								<div 
									className="button"
									key={index}
									onClick={handleOption}
								>
									{option}
								</div>
							);
						})}
				</div>
			</div>
		</>
	);
}

export default App