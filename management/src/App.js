import React, { Component } from 'react';
import Customer from "./components/Customer.js"
import './App.css';

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': "Hello world",
  'birthday': "940110",
  'gender': 'male',
  'job': 'no'
  },

  {'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': "Hello WoRld",
  'birthday': "940120",
  'gender': 'female',
  'job': 'no'
  },

  {'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': "Hello World",
  'birthday': "950110",
  'gender': 'male',
  'job': 'no'
  }]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(customer => { return ( <Customer key={customer.id} id={customer.id} image={customer.image} name={customer.name} birthday={customer.birthday} gender={customer.gender} job={customer.job}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;
