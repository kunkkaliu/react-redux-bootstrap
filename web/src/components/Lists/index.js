/**
 * Created by liudonghui on 17/1/5.
 */
import React, { PropTypes } from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TopicInfo from '../TopicInfo';
import './index.less';

class Lists extends React.Component {
    render() {
        let listItems = this.props.topics.map(function (topic) {
            return (
                <div className="media topic" key={topic.id}>
                    <a className="media-left" href="#">
                        <img className='img-circle img-width-50' src={topic.user.avatar_url} role="presentation" />
                    </a>
                    <div className="media-body">
                        <Link to={`/topics/${topic.id}`} className='title'>{topic.title}</Link>
                        {topic.excellent && <span ref='data' className='glyphicon glyphicon-heart left' title='精华帖'></span>}
                        <TopicInfo topic={topic}></TopicInfo>

                    </div>
                    <div className='media-right count'>
                        <span className='badge'>{topic.replies_count}</span>
                    </div>
                </div>
            );
        });
        return(
            <div className='panel-body'>
                { listItems }
            </div>
        );
    }
}

Lists.propTypes = {

};

Lists.contextTypes = {
    router: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists);


