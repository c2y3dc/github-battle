var React = require('react');

var styles = {
  container: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    fontSize: '55px'
  },
  content: {
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    marginTop: '30px',
  }
}


var Loading = React.createClass({
	getInitalState: function(){
		this.originalText = 'Loading';
		return {
			text: 'Loading'
		}
	},
	componentDidMount: function() {
		var stopper = this.originalText + '...';
		this.interval = setInterval(function(){
			if(this.state.text === stopper){
				this.setState({
					text: this.originalText;
				})
			}else{
				this.setState({
					text:this.state.text + "."
				})
			}
		}.bind(this), 300)
	},
	componentWillMount: function() {
		clearInterval(this.interval);
	},
	return (
		<div styles={styles.container}>
			<p styles={styles.content}>{this.state.text}</p>
		</div>
	)
})

module.exports = Loading;