import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SidebarComponent from "./components/SidebarComponent";
import MainComponent from "./components/MainComponent";
import CheckoutComponent from "./components/CheckoutComponent";
import { Container, Row } from "react-bootstrap";
import { API_URL } from "./utils/constants";
import axios from 'axios'; 

import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      active: "all"
    };
  }

  componentDidMount() {
    axios
    .get(API_URL + "products")
    .then((res) => {
      const menus = res.data;
      this.setState({ menus });
    })
    .catch(error => {
      console.log(error)
    })
  }

  changeCategory = (value) => {
      this.setState({
        menus : []
      })

      if(value === 'all'){
        axios.get(API_URL + "products").then((res) => {
          const menus = res.data;
          this.setState({menus});
        });
      }
      else if(value === 'makanan'){
        axios.get(API_URL + "products?category.nama=Makanan").then((res) => {
          const menus = res.data;
          this.setState({ menus });
        });
      }
      else if(value === 'minuman'){
        axios.get(API_URL + "products?category.nama=Minuman").then((res) => {
          const menus = res.data;
          this.setState({ menus });
        });
      }

  }
  

  

  render() {
    const {menus} = this.state
    return (
      <div>
        <Container fluid>
        <Row>
          <SidebarComponent changeCategory = {this.changeCategory} />
          <MainComponent menus = {menus} />
          <CheckoutComponent />
        </Row>
      </Container>
      </div>
    )
  }
}



