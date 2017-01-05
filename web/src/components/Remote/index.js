/**
 * Created by liudonghui on 17/1/5.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTopics } from '../../actions/common';
import Lists from '../Lists';

class Remote extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount () {
        this.props.getTopics({node_id: 25, limit: 150})
    }

    render() {
        let remote = []
        this.props.topics.forEach(topic => {
            if (topic.title.includes('远程')) {
                remote.push(topic)
            }
        })
        const count = remote.length
        return (
            <div className='panel panel-default topic-lists'>
                <div className='panel-heading'>
                    <strong>远程</strong>
                    <span>共有 {count} 个招聘帖</span>
                    <div className='summary'>
                        <p>
                            <strong className='light-gray-color'>远程规则：</strong>
                            请在标题中注明: [ 远程 ]
                        </p>
                    </div>
                </div>
                <Lists topics={remote} />
            </div>
        );
    }
}

Remote.propTypes = {

};

Remote.contextTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Remote);
