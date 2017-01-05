/**
 * Created by liudonghui on 17/1/5.
 */
import React, { Component } from 'react';
import './index.less';

export default class Footer extends Component {
    render() {
        return (
            <div className='footer container'>
                <span className='license'>
                    Designed by
                    <a target='_blank' href='https://github.com/kunkkaliu/react-redux-bootstrap'>  Kunkkaliu</a>
                    © 2017
                </span>
            </div>
        );
    }
}
