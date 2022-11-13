import "./counter.css";
import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.counter,
    };
  }
  setCount = (v) => {
    switch (v) {
      case "inc":
        if (this.state.counter < 50) {
          this.setState((state) => ({
            counter: state.counter + 1,
          }));
        }
        break;

      case "dec":
        if (this.state.counter > 0) {
          this.setState((state) => ({
            counter: state.counter - 1,
          }));
        }
        break;

      case "rnd":
        this.setState(() => ({
          counter: +(Math.random() * (50 - 0) + 0).toFixed(0),
        }));
        break;
      case "reset":
        this.setState(() => ({
          counter: 0,
        }));

        break;

      default:
        break;
    }
  };

  // Используйте только стрелочную форму методов
  // Почему? Подробный ответ будет в следующем уроке

  render() {
    return (
      <div className="apper">
        <div className="counter">{this.state.counter}</div>
        <div className="controls">
          <button
            onClick={() => {
              this.setCount("inc");
            }}
          >
            INC
          </button>
          <button
            onClick={() => {
              this.setCount("dec");
            }}
          >
            DEC
          </button>
          <button
            onClick={() => {
              this.setCount("rnd");
            }}
          >
            RND
          </button>
          <button
            onClick={() => {
              this.setCount("reset");
            }}
          >
            RESET
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
