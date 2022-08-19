import React, { Component } from 'react';

import { Header } from './components/Header';
import { Clients } from './components/Clients';
import { DisplayClients } from './components/DisplayClients';

import Cards from './components/Cards';
import CreateClient from './components/CreateClient';
import { getAllClients, createClient } from './servises/ClientServise';

export default class App extends Component {
  state = {
    client: {},
    clients: [],
    numberOfClients: 0,
  };
  refreshFields = () => {
    this.setState.client('');
  };

  createClient = () => {
    createClient(this.state.client).then((response) => {
      console.log(response);
      this.setState({ numberOfClients: this.state.numberOfClients + 1 });
    });
    this.refreshFields();
  };

  onChangeForm = (e) => {
    e.preventDefault();
    let client = this.state.client;
    if (e.target.name === 'firstname') {
      client.firstName = e.target.value;
    } else if (e.target.name === 'lastname') {
      client.lastName = e.target.value;
    } else if (e.target.name === 'email') {
      client.email = e.target.value;
    } else if (e.target.service === 'service') {
      client.service = e.target.value;
    }
    this.setState({ client });
  };
  getAllClients = () => {
    getAllClients().then((clients) => {
      console.log(clients);
      this.setState({ clients, numberOfClients: clients.length });
    });
  };

  render() {
    return (
      <div className='App'>
        <Header></Header>
        <Cards></Cards>
        <div className='container '>
          <div className='row'>
            <div className='col-md-8'>
              <CreateClient
                onChangeForm={this.onChangeForm}
                createClient={this.createClient}
              ></CreateClient>
            </div>
            <div className='col-md-4'>
              <DisplayClients
                numberOfClients={this.state.numberOfClients}
                getAllClients={this.getAllClients}
              ></DisplayClients>
            </div>
          </div>
        </div>
        <div className='row '>
          <Clients
            clients={this.state.clients}
            numberOfClients={this.state.numberOfClients}
            refreshFields={this.refreshFields}
          ></Clients>
        </div>
      </div>
    );
  }
}
