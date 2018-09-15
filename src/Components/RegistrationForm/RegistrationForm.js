import React, { Component } from 'react';
import './RegistrationForm.css';

class RegistrationForm extends Component {
	render() {
		return (
			<div className="fillForm">
				<form method="POST">
					<div className="field">
						<img src={ require('./svg/username.svg') } alt="" />
						<input type="text" name="username" placeholder="Username" />
					</div>
					<div className="field">
						<img src={ require('./svg/email.svg') } alt="" />
						<input type="text" name="email" placeholder="Email" />
					</div>
					<div className="field">
						<img src={ require('./svg/password.svg') } alt="" />
						<input type="password" name="password" placeholder="Password" />
					</div>
					<div className="field">
						<img src={ require('./svg/password.svg') } alt="" />
						<input type="password" name="passwordAgain" placeholder="Confirm Password" />	
					</div>
					<div>
						<input type="submit" name="submit" value="Submit" />
					</div>
				</form>
				<div className="formQuestion">
					<span>Have an account? <a href="login.html">Log in!</a></span>
				</div>
			</div>
		)
	}
}

export default RegistrationForm;

