/**
 * Created by liudonghui on 17/1/5.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Promote extends Component {
    render() {
        return(
            <div className='panel panel-default'>
                <div className='panel-body'>
                    推广
                </div>
                <ul className="list-group">
                    <li className="list-group-item">
                        <a href='https://www.guazi.com' target='_blank'>瓜子二手车</a>
                    </li>
                    <li className="list-group-item">
                        <a href='https://github.com/kunkkaliu' target='_blank'>Kunkkaliu's GitHub</a>
                    </li>
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Promote);
