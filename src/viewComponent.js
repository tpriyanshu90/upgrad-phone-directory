import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";

class viewComponent extends Component {
  state = {
      allContacts: []
  }

  componentDidMount() {
    fetch("http://localhost:8000/business").then(res => res.json())
            .then(json => {
                if (json.error) console.log("error occurred", json);
                this.setState({ allContacts : json })
            });
  }

  deleteDetails = (id,i) => {
    fetch("http://localhost:8000/business/delete/"+id).then(res => res.json())
            .then(json => {
                if (json.error) console.log("error occurred", json);
                console.log(json);
                this.state.allContacts.splice(i,1);
                this.setState({ allContacts : this.state.allContacts });
            });
  }

  render() {
    return (
      <div className="viewComponent">
      <br/>
      <Link to="/add">
           <button className="btn btn-success">ADD</button>
        </Link> 
      {
        this.state.allContacts.map((contact,i) => {
          return (
              <div className="card">
                <div class="form-group">
                      <label>Name: {contact.name}</label>
                </div>
                <div class="form-group">
                      <label>Phone: {contact.phone}</label>
                </div>

                <button onClick={() =>this.deleteDetails(contact._id, i)}
                    type="button"
                    className="btn btn-danger"
                    >Delete</button>  

              </div>
            );
        })
      }  
      </div>
    );
  }
}

export default viewComponent;
