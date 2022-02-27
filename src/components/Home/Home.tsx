import React from 'react'
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ford_mustang from '../../assets/images/ford_mustang.jpg';
import { Navbar } from '../../components/Navbar';
import { Link } from 'react-router-dom';


interface Props{
    title: string;
}

const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0',
    },
    background: {
        backgroundImage: `url(${ford_mustang})`,
        width: '100%',
        height: '90%',
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    main_text: {
        textAlign: 'center',
        position: 'relative',
        top: '40%',
        transoform: 'translate(-50%, -50%)',
        color: 'blue',
        zIndex: 1,
    },
    main_background:{
        backgroundColor: 'black',
        marginLeft: '40%',
        marginRight: '40%',
    },
    button_form: {
        textDecoration:'none',
        backgroundColor: 'black',
        padding: '5px',
    }
    

})

export const Home = ( props:Props ) => {

    const classes = useStyles();

    return (
        <>
            <div className={`${classes.root}`}>
            <Navbar />
                <div className={`${classes.background}`}>
                    <div className={`${classes.main_text}`}>
                        <h1 className={`${classes.main_background}`}>{props.title}</h1>
                        <Button>
                            <Link to='/Inventory' className={`${classes.button_form}`}>Lets See our Inventory</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
