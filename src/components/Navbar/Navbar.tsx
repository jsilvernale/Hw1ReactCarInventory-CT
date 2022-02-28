import React from 'react'
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
// import { AuthCheck } from 'reactfire';
import welcomelogo from '../../assets/images/welcomelogo.jpg';

const useStyles = makeStyles({
    logo:{
        content: `url(${welcomelogo})`,
        maxWidth: '15%',
        height: 'auto',
    },
    navlogo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    row: {
        display:'flex',
        flexDirection: 'row',
    },
    navbar:{
        backgroundColor:'#000000',
        zIndex: 1,
        borderBottom: '1px white',
    },
    spaceBetween: {
        justifyContent:'space-between',
    },
    navbarItem: {
        color: 'white',
        textDecoration: 'none',
    },
    allaroundp:{
        padding: '5px',
    },
    width100:{
        width: '100%',
    },
    width50:{
        width: '50%',
    },
    padside:{
        paddingRight: '10px',
        paddingLeft: '10px',
    },
    ul: {
        listStyleType: 'none',
        color: 'white',
    }
})

export const Navbar = () => {

    const classes = useStyles();

    return (
        <div className={`${classes.row} ${classes.navbar} ${classes.width100} ${classes.allaroundp} `}>
            <div className={`${classes.navlogo}`}>
                <div className={`${classes.logo} ${classes.padside}`}/>
            </div>
            <div className={`${classes.width50}`}>
                <ul className={`${classes.ul} ${classes.row} ${classes.spaceBetween}`}>
                    {/* <AuthCheck fallback = { */}
                        <li>
                            <Button>
                                <Link to='/signIn' className={`${classes.navbarItem} ${classes.padside}`}>Sign In</Link>
                            </Button>
                        </li>
                    {/* }> */}
                        <li>
                            <Button>
                                <Link to='/' className={`${classes.navbarItem} ${classes.padside}`}>Home</Link>
                            </Button>
                        </li>
                        <li>
                            <Button>
                                <Link to='/Inventory' className={`${classes.navbarItem} ${classes.padside}`}>Vehicle Inventory</Link>
                            </Button>
                        </li>
                        <li>
                            <Button>
                                <Link to='/Contact' className={`${classes.navbarItem} ${classes.padside}`}>Contact</Link>
                            </Button>
                        </li>
                        <li>
                            <Button>
                                <Link to='/About' className={`${classes.navbarItem} ${classes.padside}`}>About</Link>
                            </Button>
                        </li>
                    {/* </AuthCheck> */}
                </ul>
            </div>
        </div>
  )
}
