import React from "react";

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    itemPrimary: {
      color: theme.palette.primary.contrastText,
    },
    itemIconRoot: {
      minWidth: 0,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    drawerDividerLight: {
      backgroundColor: theme.palette.primary.contrastText,
      height: theme.spacing(0.1),
    },
  }));

const DemoAppMenu = () => {
    const classes = useStyles();

    return (
        <>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon classes={{ root: classes.itemIconRoot }}>{index % 2 === 0 ? <InboxIcon color="primary" classes={{ colorPrimary: classes.itemPrimary }} /> : <MailIcon color="primary" classes={{ colorPrimary: classes.itemPrimary }} />}</ListItemIcon>
                    </ListItem>
                ))}
            </List>
            <Divider light={true} classes={{ light: classes.drawerDividerLight }} />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon classes={{ root: classes.itemIconRoot }}>{index % 2 === 0 ? <InboxIcon color="primary" classes={{ colorPrimary: classes.itemPrimary }} /> : <MailIcon color="primary" classes={{ colorPrimary: classes.itemPrimary }} />}</ListItemIcon>
                    </ListItem>
                ))}
            </List>
        </>
    );
}

export default DemoAppMenu;