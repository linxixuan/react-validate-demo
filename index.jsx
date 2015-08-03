var React = require('react');
var Validator = require('./components/validator.jsx');

var Form = React.createClass({
	getInitialState: function () {
		return {
			tip: '',
			tipType: 'none',
		};
	},

	errorAccount: function (val) {
		this.setState({
			tip: '账号错误' + val,
			tipType: 'error'
		});
	},

	errorPassword: function (val) {
		this.setState({
			tip: '错误密码:' + val,
			tipType: 'error'
		});
	},

	render: function () {
		return (
		  	<form>
			  <div className={this.state.tipType}>
					{this.state.tip}
			  </div>
			  <div>
					<Validator type="account" onError={this.errorAccount}></Validator>
					<Validator type="password" onError={this.errorPassword}></Validator>
			  </div>
			</form>
		);
	}
});

React.render(<Form />, document.body);
