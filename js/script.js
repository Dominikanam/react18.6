var Counter = React.createClass({
	propTypes: {
		emoji: React.PropTypes.string.isRequired
	},


	getInitialState: function() {
        return {
            counter: 1
        };
	},

	componentDidMount: function() {
		console.log('Take the data from API');
	},

	shouldComponentUpdate: function(nextProps, nextState) {
		console.log('Check new props and return false to prevent update if not needed');
		return true;
	},

	componentDidUpdate: function(prevProps, prevState) {
		console.log('Data loaded from API and we need to update component state');
	},

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
	},

	decrement: function() {
		if(this.state.counter <= 1) {
			return;
		}
        this.setState({
            counter: this.state.counter - 1
        });
	},

    render: function() {
		var items = '';
		for(var i = 0; i < this.state.counter; i++) {
			items += this.props.emoji
		}

		return React.createElement('div', {},
			React.createElement('button', {onClick: this.decrement}, '-'),
			React.createElement('button', {onClick: this.increment}, '+'),
			React.createElement('span', {}, items)
        );
    }
});

var element = React.createElement('div', {},
	React.createElement(Counter, { emoji: '🐹' }),
	React.createElement(Counter, { emoji: '🐭' }),
	React.createElement(Counter, { emoji: '😂' })
);
ReactDOM.render(element, document.getElementById('app'));