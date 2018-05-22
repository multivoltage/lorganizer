import React, { Component } from 'react';
import './style.css';
import lo from '../../lo';
// components
import Header from '../../components/Header';
import { TextField, List, ListItem, Checkbox, Button } from '@material-ui/core';

class Setup extends Component {

  state = {
    new: "",
    discipline: []
  }

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    // read from localsatorage and merge with state
    this.setState({ discipline: [...lo.allDisciplines(),...lo.ls.allDisciplines()] })
  }

  render() {
    return (
      <section className="setup">
        <Header title="SETUP LO" />
        <article>
          <TextField
            hintText="Il tuo nome..."
          />
          <List className="list-discipline">
            <p>Discipline</p>
            {this.renderDiscipline()}
            <div className="list-discipline--add">
              <TextField
                hintText="nuova disciplina" onChange={this.handleNewType} onKeyPress={this.handleKeyPress}
              />
               <Button variant="raised" disabled={this.state.new === ''} onClick={this.handleNewAdd}>Primary</Button>
            </div>
          </List>
        </article>
      </section>
    );

  }

  renderDiscipline = () => {
    return this.state.discipline.map((disciplina,i) => (<p key={disciplina+i}>{disciplina}</p>))
  }

  handleNewType = (e) => {
    this.setState({ new: e.target.value })
  }

  handleNewAdd = () => {
    lo.ls.saveDispiplina(this.state.new)
    this.setState({ discipline: [...this.state.discipline, this.state.new] });
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter')
      this.handleNewAdd()
  }
}

export default Setup;
