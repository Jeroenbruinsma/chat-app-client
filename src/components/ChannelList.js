import React, { Component } from 'react'
import {connect} from 'react-redux'

 class ChannelList extends Component {
    render() {
        return (
            <div>
                Render ChannelList here!                 
            </div>
        )
    }
}

function mapStateToProps(reduxstate){
    console.log("Hello from mapstatetoprops in channellist", reduxstate)
}




export default connect(mapStateToProps, null)(ChannelList)