import {Component} from 'react'

// создание компонента через классы
class ChildrenComponent extends Component {
  constructor(props) {
    super(props);
    //пропсы только для чтения если нужно что то менять для этого есть state
    this.state={
      years:27,
      text:'click mi'
    }
  }

  nextYar = () => {
    // метод для изминения (мутации) state, меняеться только (years) то что мы укащываем ниже

    this.setState(state => ({
      years: state.years +1
    }))
  }
  render() {
    const{name, sername, link}=this.props;
    return (
          <li>
            <button onClick={this.nextYar} >{this.state.text}</button>
            <h1>
              My name is: {name.FirstName} , surnema: {sername()}, age: {this.state.years}
            </h1>
            <a target="blank" href={link}>
              {link}
            </a>
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
