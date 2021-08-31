import React, { useEffect, useState } from "react";

function Lawyer() {
	let [native, setNative] = useState([]);

	//let [native, setNative] = useState([]);

	useEffect(() => {
		fetch("/natives")
			.then((res) => res.json())
			.then((json) => {
				setNative(json);
				console.log(json);
				console.log("alert");
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div>
			<br></br>
			<body className="lawyerBody">
				<div className="lawyerContainer">
					<h4>
						Lawyers/Experts View: Please click Accept Button if you wish to
						answer the question in the Form
					</h4>
					<ol>
						{native.map((native) => (
							<li key={native.id}>
								{native.name}
								<br></br>
								{native.location}
								<br></br>
								{native.contact}
								<br></br>
								{native.question}
								<br></br>
							</li>
						))}
					</ol>
				</div>
			</body>
		</div>
	);
}

export default Lawyer;


