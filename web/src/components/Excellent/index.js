/**
 * Created by liudonghui on 17/1/5.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Lists from '../Lists';

class Topics extends React.Component {
    render() {
        const length = this.props.topics.length;
        return (
            <div className='panel panel-default no-margin-bottom-xs topic-lists reset-panel-xs'>
                <div className='panel-heading margin-xs'>
                    社区精华帖
                </div>
                <div className='row reset-row-xs'>
                    <div className='col-md-6'>
                        <Lists topics={this.props.topics.slice(0, length/2)} />
                    </div>
                    <div className='col-md-6'>
                        <Lists topics={this.props.topics.slice(length/2, length)} />
                    </div>
                </div>
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

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topics);