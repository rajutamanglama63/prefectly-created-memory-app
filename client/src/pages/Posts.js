import React from 'react'
import Post from '../components/Post'
import {Button, Container} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'


import {useSelector} from 'react-redux'

const useStyles = makeStyles((theme) => ({
    gridContainer : {
        display : 'grid',
        gridTemplateColumns : '13.8rem 13.8rem 13.8rem 13.8rem',
        gridGap : '10px',
        alignItem : 'center',
        marginBottom : '2rem',
    },
    load : {
        marginLeft : '2rem'
    }
}))

const Posts = ({setCurrentId}) => {
    const classes = useStyles();
    const memories = useSelector(state => state.memories)
    return ( 
        !memories.length ? <h2 className={classes.load}>Loading...</h2> : (
            <Container className={classes.gridContainer}>
                {memories.map((memory) => (
                    <Post key={memory._id} memory={memory} setCurrentId={setCurrentId} />
                ))}
            </Container>
        )
    )
}

export default Posts
