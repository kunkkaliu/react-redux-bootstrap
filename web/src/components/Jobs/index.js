/**
 * Created by liudonghui on 17/1/5.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTopics } from '../../actions/common';
import {Link} from 'react-router';
import Lists from '../Lists';
import Paginate from '../Paginate';

class Jobs extends React.Component {
    constructor(props) {
        super(props);
        // node_id: 25 是招聘节点
    }

    componentWillMount () {
        this.props.getTopics({node_id: 25})
    }

    render() {
        const count = this.props.topics.length
        return (
            <div className='panel panel-default topic-lists'>
                <div className='panel-heading'>
                    <strong>招聘</strong>
                    <span>共有 {count} 个讨论主题</span>
                    <div className='summary'>
                        <p>
                            <strong className='light-gray-color'>招聘栏目规则：</strong>
                            《
                            <Link to='/topics/25579'>敬告各位发招聘的公司注意！</Link>
                            》请仔细阅读!
                        </p>
                        <hr />
                        <p className='light-gray-color'>如果没有发帖权限，请邮件联系 <a href='mailto:admin@ruby-china.org'>admin@ruby-china.org </a>并注明主题：请开通发布招聘帖权限</p>
                    </div>
                </div>
                <Lists topics={this.props.topics} />
                <Paginate options={{node_id: 25}} pageCount={20} perPage={20}/>
            </div>
        );
    }
}

Jobs.propTypes = {

};

Jobs.contextTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
