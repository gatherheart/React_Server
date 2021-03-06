import React, { Component } from 'react';
import Customer from "./components/Customer.js"
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles'; 

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minwidth: 1080
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
})
/*
 * constructor 
 * componentWillMount
 * render()
 * componentDidMount
 * props or state => shouldComponentUpdate()
 * O_RDONLY / O_RDWR
 */
class App extends Component {
  // changeable data
  state = {
    customers: "",
    completed: 0
  }
  
  componentDidMount(){
    this.timer = setInterval(this.progress, 20);
    //this.callApi()
    //  .then(res => this.setState({customers: res}))
    //  .catch(err => console.log(err));
  }
  
  callApi = async function() {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState( { completed: completed >= 100 ? 0 : completed  + 1} );
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell> ID </TableCell> 
                <TableCell> Image </TableCell> 
                <TableCell> Number </TableCell> 
                <TableCell> Birthday </TableCell> 
                <TableCell> Gender </TableCell> 
                <TableCell> Job </TableCell> 
              </TableRow>
            </TableHead>
            <TableBody>
              { this.state.customers ? this.state.customers.map(customer => { return ( <Customer key={customer.id} id={customer.id} image={customer.image} name={customer.name} birthday={customer.birthday} gender={customer.gender} job={customer.job}
              />)}) : 
              <TableRow>
                <TableCell colspan="6" align="center">
                  <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed} />
                </TableCell>
              </TableRow>
              }
            </TableBody>
          </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
