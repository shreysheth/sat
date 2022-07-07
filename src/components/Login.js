import React from "react";

const Login = () => {
	return (
		<div>
			<div className="login-container">
				<h1 className="label-main">Login</h1>
				<div className="login-form-container">
					<form className="login-form" method="POST">
						<input
							type="text"
							name="uname"
							id="uname"
							placeholder="Username"
							autoComplete="off"
						></input>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Password"
							autoComplete="off"
						></input>
						<button type="submit" id="submit">
							Login
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
