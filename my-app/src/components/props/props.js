import { Component } from "react";

// создание компонента через классы
class ChildrenComponent extends Component {
  constructor(props) {
    super(props);
    //пропсы только для чтения если нужно что то менять для этого есть state
    this.state = {
      years: 27,
      text: "click mi",
      input: "",
    };
  }

  nextYar = () => {
    // метод для изминения (мутации) state, меняеться только (years) то что мы укащываем ниже
    // setState с аргументом state используеться тогда. когда нам нужно считать предылущие значение (например счетчик. новое значение идет от предыдущего)
    this.setState((state) => ({
      years: state.years + 1,
    }));
  };

  // setState без аргумента state используеться тогда. когда предыдущее значение не играет роли (например запись в инпут)
  commitInputChanges = (e, input) => [
    console.log(input),
    this.setState({
      input: e.target.value + 1,
    }),
  ];

  render() {
    const { name, sername, link } = this.props;
    const{input, years, text} = this.state
    return (
      <li>
        <button onClick={this.nextYar}>{text}</button>
        <h1>
          My name is: {name.FirstName} , surnema: {sername()}, age:{" "}
          {years}, input-value:{input}
        </h1>
        <a target="blank" href={link}>
          {link}
        </a>
        <form>
          <span>Wrote something</span>
          {/* функция с аргументом */}
          <input type="text" onChange={(e) => this.commitInputChanges(e, 'imput')} />
        </form>
      </li>
    );
  }
}
// создание компонента через функцию
// const ChildrenComponent = ({name, sername, link}) => {
//   return (
//     <li>
//       <h1>
//         My name is: {name.FirstName} , surnema: {sername()}
//       </h1>
//       <a target="blank" href={link}>
//         {link}
//       </a>
//     </li>
//   );
// };

const Props = () => {
  return (
    <ul>
      <ChildrenComponent
        name={{ FirstName: "Anton" }}
        sername={() => {
          return "Izotov";
        }}
        link="https://antonizotov.ru"
      />
      <ChildrenComponent
        name={{ FirstName: "Eva" }}
        sername={() => {
          return "Izotova";
        }}
        link="https://eva.izotov.ua"
      />
    </ul>
  );
};

export default Props;
