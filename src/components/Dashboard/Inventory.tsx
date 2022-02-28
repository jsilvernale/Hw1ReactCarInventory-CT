import React, { useState } from 'react';
import { useFetchData } from '../../CustomHooks'
import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import { Drawer as MUIDrawer, 
ListItem,
List,
ListItemIcon,
ListItemText,
Theme,
useTheme,
makeStyles,
createStyles,
AppBar,
Toolbar,
IconButton,
Typography,
Dialog,
DialogActions,
DialogContent,
DialogContentText,
DialogTitle,
Divider,
Button 
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import { AddCarForm } from '../AddCarForm'
import { DataTable } from '../../components/DataTable';
import { RouteComponentProps, withRouter, Route, Switch } from 'react-router-dom';

interface DashProps{
    history: RouteComponentProps['history'];
    location: RouteComponentProps['location'];
    match: RouteComponentProps['match'];
}

const drawerWidth = 240;

const useStyles = makeStyles ((theme: Theme) => 
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            transition: theme.transitions.create(['margin', 'width'],{
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper:{
            width: drawerWidth,
        },
        drawerHeader: {
            display: 'flex',
            alightItems: 'center', 
            padding: theme.spacing(0,1),
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -drawerWidth,
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        },
        toolbar: {
            display: 'flex',
            backgroundColor: 'black',
        },
        toolbar_button: {
            marginLeft: 'auto',
            color: 'white',
        },
    })
)

export const Inventory = withRouter(( props: DashProps ) => {
    console.log(props)
    const { history } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    
    const handleDialogClickOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClickClose = () => {
        setDialogOpen(false);
    };
    
    const itemsList = [
        {
            text: 'Home',
            onClick: () => history.push('/')
        },
        {
            text: 'Contact',
            onClick: () => history.push('/contact')
        },
        {
            text: 'About',
            onClick: () => history.push('/about')
        }
    ]
  return (
    <div className={classes.root}>
        <CssBaseline />
        <AppBar position='fixed' className={clsx(classes.appBar, {[classes.appBarShift]: open,})}>
            <Toolbar className={classes.toolbar}>
                <IconButton color='inherit' aria-label='open drawer' onClick={handleDrawerOpen} edge='start' className={clsx(classes.menuButton, open && classes.hide)}>
                    <MenuIcon />
                </IconButton>
                <Typography variant='h6' noWrap>
                    Inventory
                </Typography>
                <Button className={classes.toolbar_button} onClick={handleDialogClickOpen}>Add New Car</Button>
                <Dialog open={dialogOpen} onClose={handleDialogClickClose} aria-labelledby='form-dialog-title'>
                    <DialogTitle id='form-dialog-title'>Add To the Inventory</DialogTitle>
                    <DialogContent>
                        <DialogContentText></DialogContentText>
                        <AddCarForm />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleDialogClickClose} color='primary'>Nevermind</Button>
                    </DialogActions>
                </Dialog>
            </Toolbar>
        </AppBar>
        <MUIDrawer className={classes.drawer} variant='persistent' anchor='left' open={open} classes={{paper:classes.drawerPaper,}}>
            <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </div>
            <Divider />
            <List>
                {itemsList.map((item, index) => {
                    const { text, onClick } = item;
                    return (
                        <ListItem button key={text} onClick={onClick}>
                            <ListItemText primary={text} />
                        </ListItem>
                    );
                })}
            </List>
        </MUIDrawer>
        <main className={clsx(classes.content, {
            [classes.contentShift]: open,
        })}>
            <div className={classes.drawerHeader} />
            <h1>Welcome to My Car Collection</h1>
            <DataTable/>
        </main>
    </div>
  )
})
