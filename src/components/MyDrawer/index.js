import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';

import {  Redirect } from 'react-router'

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

class TemporaryDrawer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            left: props.drawerOpen || false,
            goToPage: null
        }
    }

    toggleDrawer = (open) => () => {
        this.setState({
            left: open,
        });
    };

    goToPage = (page) => {
        this.setState({ goToPage: page })
    }

    render() {
        if(this.state.goToPage === '/setup')
            return <Redirect to='/setup' />
        if(this.state.goToPage === '/today')
            return <Redirect to='/today' />

        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Today's Loads" onClick={this.goToPage.bind(this, '/today')}/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary="Load Creation/Update" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary="Manage Load Organizer" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Setup Cost" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Cash and Cost" />
                    </ListItem>
                </List>
            </div>
        );


        return (
            <div>
                <Drawer open={this.props.drawerOpen}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={() => { this.props.onPageIteraction(false) }}
                        onKeyDown={() => { this.props.onPageIteraction(false) }}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}

TemporaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);