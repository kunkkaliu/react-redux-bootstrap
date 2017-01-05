/**
 * Created by liudonghui on 17/1/5.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTopics } from '../../actions/common';
import Paginate from '../Paginate';
import {Link} from 'react-router';
import Lists from '../Lists';

class Topics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.location.query.type||'last_actived',
        };
    }

    componentWillMount () {
        this.props.getTopics({type: this.state.type});
    }

    handleClick = (type) => {
        this.setState({type: type})
        this.props.getTopics({type: type})
    }

    render() {
        return (
            <div className='panel panel-default topic-lists'>
                <div className='panel-heading text-right'>
                    <span className='separator light-gray-color'>查看:</span>
                    <Link to='/topics' onClick={() => this.handleClick('last_actived')}>默认</Link>
                    <span className='separator'>/</span>
                    <span className='glyphicon glyphicon-heart right' title='精华帖'></span>
                    <Link to='/topics?type=excellent' onClick={() => this.handleClick('excellent')}>优质帖子</Link>
                    <span className='separator'>/</span>
                    <Link to='/topics?type=no_reply' onClick={() => this.handleClick('no_reply')}>无人问津</Link>
                    <span className='separator'>/</span>
                    <Link to='/topics?type=recent' onClick={() => this.handleClick('recent')}>最新创建</Link>
                </div>
                <Lists topics={this.props.topics} />
                <Paginate options={{type: this.state.type}}/>
            </div>
        );
    }
}

Topics.propTypes = {

};

Topics.contextTypes = {
    router: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        topics: state.common.results.topics
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getTopics: bindActionCreators(getTopics, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topics);
