import React, { Component } from "react";
import defaultImg from "../images/room-5.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";

const SingleRoom = (props) => {
	console.log(props);
	return (
	<div>Hello from a single room</div>
	);
};

export default SingleRoom;


/* export default class SingleRoom extends Component {
	constructor(props) {
		super(props);
		console.log(this.props)
	}
	componentDidMount() {}
  render() {
	return (
	  <div>SingleRoom men på en anden måde</div>
	)
  }
} */
