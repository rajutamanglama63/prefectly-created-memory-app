import React from 'react'
import {Button, Container} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom'
import Form from '../components/Form'

const useStyles = makeStyles((theme) => ({
    backBtn : {
        margin : '1rem 0'
    },
    link : {
        textDecoration : 'none'
    }
}))
 
const FormPage = ({currentId, setCurrentId}) => {
    const classes = useStyles();
    return (
        <div>
            <Container>
                <Link to='/' className={classes.link}>
                    <Button className={classes.backBtn} variant='contained' color='primary'>Go Back</Button>
                </Link>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Container>
        </div>
    )
}

export default FormPage
