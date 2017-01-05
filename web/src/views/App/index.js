import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Navbar from '../../components/Navbar';
import Promote from '../../components/Promote';
import Footer from '../../components/Footer';

class App extends React.Component {
    render() {
        let layout = ''
        const {children} = this.props;

        let pathname = this.props.location.pathname

        if (pathname === '/programmer' || pathname==='/'){
            layout = <div className='container'>
                {children}
            </div>
        } else if (pathname === '/topics/new'){
            layout = <div>
                {children}
            </div>
        } else {
            layout = <div className='container'>
                <div className='row margin-xs'>
                    <div className='col-md-9 no-padding-xs'>
                        {children}
                    </div>
                    <div className='col-md-3 no-padding-xs'>
                        <Promote />
                    </div>
                </div>
            </div>
        }
        return (
            <div>
                <Navbar path={this.props.location.pathname}/>
                { layout }
                <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
