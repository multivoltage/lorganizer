import React, { Component } from 'react';
import './style.css';
import lo from '../../lo';
// components
import Header from '../../components/Header';
import Divider from '@material-ui/core/Divider';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class Today extends Component {

  constructor(props) {
    super(props);

    this.state = {
      drops: [],
      currentDrop: '',
      name: 'hai',
    }
  }

  componentDidMount() {
    this.setState({ drops: [...lo.allDrops(), ...lo.ls.allDrops()] })
  }

  handleChange = event => {
    this.setState({ currentDrop: event.target.value });
  }

  renderDrops() {
    const drops = this.state.drops.map((d, i) => <p key={d + i} value={d}>{d}</p>)
    return drops;
  }

  render() {

    const { classes } = this.props;

    return (
      <section className="today">
        <Header title="TODAYS LOADS" />

        <article className="content">
          <div>
            <span>DROP ZONE</span>
            <Select
              value={this.state.currentDrop}
              onChange={this.handleChange}
              displayEmpty
              name="age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.renderDrops()}
            </Select>
          </div>

          <Divider />
          <div>
            <span>DATA</span>
            <input id="date" type="date" value="2017-06-01" />
          </div>

          <Divider />


        </article>
      </section>
    );
  }
}

export default Today;
