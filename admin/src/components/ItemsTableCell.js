var React = require('react');

var ItemsTableCell = React.createClass({
	displayName: 'ItemsTableCell',
	propTypes: {
		className: React.PropTypes.string,
	},
	render: function() {
		let className = 'ItemList__col' + (this.props.className ?  (' ' + this.props.className) : '');
		return (
			<td {...this.props} className={className} />
		);
	}
});

module.exports = ItemsTableCell;
