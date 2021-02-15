import React, { useState } from "react";

function InputArea(props)
	{
		const [inputText, setinputText] = useState("");

		function handleChange(event)
	      {
	        const newValue = event.target.value;
	        setinputText(newValue);
	      }

		return (
			<div className="form">
	          <input 
	          	type="text" 
	          	value={inputText} 
	          	onChange={handleChange}
	           />
	          <button onClick={ () => {
		          		props.onAdd(inputText);
		          		setinputText("");
		          	 }}
	          >
	            <span>Add</span>
	          </button>
	        </div>
		);
	}

export default InputArea;