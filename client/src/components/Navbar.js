import React from 'react'
import {Link} from 'react-router-dom'
import {Container, AppBar, Toolbar, Typography, Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    header : {
        marginBottom : '2rem'
    },
    title : {
        flexGrow : '1',
        fontSize : '2rem'
    },
    link : {
       textDecoration : 'none' 
    }
}))

const Navbar = () => {
    const classes = useStyles();
    return (
        <div>
            <Container className={classes.header}>
                <AppBar position='static' style={{marginTop : "1rem"}}>
                    <Toolbar>
                        <Typography variant="h2" className={classes.title}>Memories</Typography>
                        <Link to='/form' className={classes.link}>
                            <Button className={classes.openBtn} variant='contained' color='secondary'>Create Memory</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </Container>
        </div>
    )
}

export default Navbar
