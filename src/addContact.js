import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class addContact extends Component {
  state = {
      name: "",
      phone: null
  }
  saveDetails = () => {
    fetch("http://localhost:8000/business/add", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state)
        })
            .then(response => {
                return response.json();
            })
            .then(json => {
                if (json.error) console.log("error occurred", json);
                console.log("Data Saved");
                this.props.history.push('/view');
            });
  }
  
  render() {
    return (
      <div className="addContact">
        <div class="container">
          <h2>Fill Details</h2>
          <form>
            <div class="form-group">
              <label htmlFor="name">Name:</label>
              <input
                value={this.state.name}
                onChange={(e) => this.setState({name: e.target.value})}
                type="text"
                className="form-control"
                id="name" 
                placeholder="Enter name"
                name="name"
              />
            </div>
            <div class="form-group">
              <label htmlFor="phone">Phone number:</label>
              <input type="tel" 
                     value={this.state.phone}
                     onChange={(e) => this.setState({phone: e.target.value})}
                     className="form-control"
                     id="phone" 
                     placeholder="Enter phone number" 
                     name="phone"
              />
            </div>
            <button onClick={() =>this.saveDetails()}
                    type="button"
                    className="btn btn-success"
                    >Add</button>
          </form>
        </div>
        <br/><br/>
        <div>
          <div class="form-group">
                <label>Name: {this.state.name}</label>
          </div>
          <div class="form-group">
                <label>Phone: {this.state.phone}</label>
          </div>
        </div>
      </div>
    );
  }
}

export default addContact;
