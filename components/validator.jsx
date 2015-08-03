var React = require('react');

var Validator = React.createClass({
	getInitialState: function () {
		var name,type;
		switch(this.props.type) {
		case 'account':
		  	name = '账号';
			check = this.checkAccount;
			break;
		case 'password':
		  	name = '密码';
			check = this.checkPassword;
			break;
		}

		return {
		  	name: name,
			check: check
		};
	},

	checkPassword: function (e) {
	  	var val = e.target.value;

		this.props.onError(val);
	},

	checkAccount: function (e) {
	  	var val = e.target.value;

		this.props.onError(val);
	},

	render: function () {
		return (
		  <div>
			  <label>{this.state.name}</label>
			  <input onChange={this.state.check} />
		  </div>
		);
	}
});

module.exports = Validator;