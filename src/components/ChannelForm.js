import React, { Component } from 'react'
import *  as request from 'superagent'
import {url} from '../constants'

export default class ChannelForm extends Component {
    
    state = {newChannelName: "Channel Name"}

    onChange = (event) => {
        this.setState({newChannelName: event.target.value })
    }

    onSubmit = async (event) => {
        event.preventDefault()
        console.log("user pressed submit button")
        await request
        .post(`${url}/channel`)
        .send({channelname: this.state.newChannelName})
        .then( this.setState({newChannelName: ""}))
    }

    
    render() {
        return (
            <div>
                Hello from the channelform!
                <form onSubmit={this.onSubmit}>
                    <input name="newchannelname" type="text" onChange={this.onChange} value={this.state.newChannelName}
                    ></input>
                    <button type="submit">Add a channel to the list</button>
                </form>

            </div>
        )
    }
}
