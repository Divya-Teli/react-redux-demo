import React, { Component } from 'react';
import Table from '../DataTable/Table'
import Fab from '@material-ui/core/Fab';
import { RefreshRounded } from '@material-ui/icons';
import { getPosts } from '../../redux/actions/UserActions'
// Connect react and redux
import { connect } from 'react-redux';

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dataArr: ["1", "2", "3"],
            display: true,
            data: []
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.getposts !== this.props.getposts) {
            const postsarray = nextProps.getposts;
            this.setState({
                data: postsarray
            })
        }
    }

    handleRefresh = () => {
        this.props.getPosts();
    }

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        return (
            <div>
                <div style={{ display: 'flex', justifyContent: 'center', padding: '14px' ,position:'relative'}}>
                    <div>
                        <Table data={this.state.data} />
                    </div>
                </div>
                <Fab style={{ backgroundColor: "#4caf50" ,position:'fixed',top:'50%'}} aria-label="like" onClick={this.handleRefresh}>
                    <RefreshRounded />
                </Fab>
            </div>

        )
    }
}

//export default Dashboard;

const mapStateToProps = (state) => ({
    getposts: state.user.data
})

const mapDispatchToProps = {
    getPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);