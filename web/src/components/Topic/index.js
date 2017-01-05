/**
 * Created by liudonghui on 17/1/5.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTopic, getReplies } from '../../actions/common';
import TopicInfo from '../TopicInfo';
import Replies from '../Replies';
import '../../../css/Markdown.css';

class Topic extends React.Component {
    constructor(props) {
        super(props);

    }

    componentWillMount () {
        this.props.getTopic(this.props.params.id);
        this.props.getReplies(this.props.params.id);
    }

    render() {
        const isEmpty = !this.props.topic.title;
        return (
            <div className='wrap'>
                { !isEmpty &&
                <div className='panel panel-default topic-wrap'>
                    <div className='panel-heading media'>
                        <div className='media-body'>
                            <h4>{this.props.topic.title}</h4>
                            <TopicInfo topic={this.props.topic} isShow='true'></TopicInfo>
                        </div>
                        <a className="media-right" href="#">
                            <img className='img-circle img-width-50' src={this.props.topic.user.avatar_url} role='presentation'/>
                        </a>
                    </div>
                    <div className='panel-body markdown'>
                        <span dangerouslySetInnerHTML={{ __html: this.props.topic.body_html}} />
                    </div>
                    <div className='panel-footer'>
                    </div>
                </div>
                }
                { isEmpty && <h2>Loading...</h2> }
                <Replies replies={this.props.replies} />
            </div>
        );
    }
}

Topic.propTypes = {

};

Topic.contextTypes = {
    router: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        topic: state.common.results.topic,
        replies: state.common.results.replies
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getTopic: bindActionCreators(getTopic, dispatch),
        getReplies: bindActionCreators(getReplies, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic);