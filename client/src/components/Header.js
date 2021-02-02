import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarToggler} from 'reactstrap';

export default class Header  extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
      }
      
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render () {
        return (        
            <Navbar className="justify-content-center" color="dark" dark expand="md">
                <NavbarBrand tag={Link} to="/">Video Streaming App</NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
            </Navbar>
        );  
    }
}