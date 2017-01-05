/**
 * Created by liudonghui on 17/1/5.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Format } from '../../utils';

class TopicInfo extends React.Component {

    render() {
        let info = ''
        let hits = ''
        if (this.props.isShow === 'true') {
            info = <span>发布于 { Format.date(this.props.topic.created_at) }</span>
            hits = <span>{this.props.topic.hits} 次阅读</span>
        }

        return(
            <div className='infos'>
                <span className='separator'>{this.props.topic.node_name}</span>
                •
                <span className='separator'>{this.props.topic.user.name}</span>
                •

                { this.props.topic.replied_at !== null ?
                    <span className='separator'>
              { info }
                        最后由
              <span className='separator'>{this.props.topic.last_reply_user_login}</span>
              回复于 {Format.date(this.props.topic.replied_at)}
            </span>
                    :
                    <span className='separator'>发布于 { Format.date(this.props.topic.created_at) }</span>
                }
                { hits }
            </div>
        );
    }
}

TopicInfo.propTypes = {

};

TopicInfo.contextTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(TopicInfo);
