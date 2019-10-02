import React, { Component } from "react";
import { connect } from "react-redux";
import { url } from "../constants";
import ChannelForm from "./ChannelForm";

class ChannelList extends Component {
  state = { channellist: [] };
  source = new EventSource(`${url}/stream`);

  componentDidMount() {
    console.log("component did mount of channellist");
    this.source.onmessage = event => {
      //console.log("on message function",event)
      const channels = JSON.parse(event.data);
      this.setState({ channellist: channels });
    };
  }
  render() {
    console.log("state:", this.state.channellist);
    if (!this.state.channellist) {
      return <div>Waiting for a channellist</div>;
    }
    return (
      <div>
        <ul>
          {" "}
          {this.state.channellist.map(channel => {
            return <li key={channel.id}>{channel.name}</li>;
          })}
        </ul>
        <ChannelForm/>
      </div>
    );
  }
}

function mapStateToProps(reduxstate) {
  console.log("Hello from mapstatetoprops in channellist", reduxstate);
  return {};
}

export default connect(
  mapStateToProps,
  null
)(ChannelList);
