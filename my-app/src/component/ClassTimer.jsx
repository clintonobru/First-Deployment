import { Component } from "react";

class ClassTimer extends Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ seconds: this.state.seconds + 1 });
        }, 1000);
    }

    componentDidUpdate() {
        console.log(`Updated! Current Second: ${this.state.seconds}`);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    startTimer = () => {
        this.interval = setInterval(() => {
            this.setState((prevState) => ({
                seconds: prevState.seconds + 1,
            }));
        }, 1000);
    };

    stopTmer = () => {
        clearInterval(this.interval);
        this.setState({ isRunning: false });
    };

    render() {
        return (
            <div>
                <p>Elapsed Time: {this.state.seconds} seconds</p>{" "}
                <button onClick={this.stopTmer}>Stop Timer</button>
                <button onClick={this.startTimer}>Start Timer</button>
            </div>
        )
    }
}

export default ClassTimer;