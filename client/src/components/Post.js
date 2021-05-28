import React from 'react'
import {Card, Typography, CardActions, CardMedia, CardContent, Button, Container} from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import {makeStyles} from '@material-ui/core/styles'
import {useHistory} from 'react-router-dom'
import {DeleteData} from '../redux/actions/memoriesActions'
import {updateLike} from '../redux/actions/memoriesActions'
import moment from 'moment'

import {useDispatch, useSelector} from 'react-redux'
const useStyles = makeStyles((theme) => ({
    card : {
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'space-between',
        height : '100%',
        borderRadius : '15px',
        position :'relative',
    },
    media : {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
    },
    overlay : {
        position : 'absolute',
        top : '20px',
        left : '20px',
        color : 'white'
    },
    overlay1 : {
        position : 'absolute',
        top : '20px',
        left : '10rem',
        color : 'white'
    },
    details : {
        display : 'flex',
        justifyContent : 'space-between',
        margin : '1rem'
    },
    title: {
        padding: '0 16px',
    },
    actions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    }
}))

const Post = ({memory, setCurrentId}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const memories = useSelector(state => state.memories)
    const classes = useStyles();

    const editbtn = () => {
        setCurrentId(memory._id)
        history.push('/form')
    }
    return (
        <div>
                
                <Card className={classes.card}>
                    <CardMedia className={classes.media} image={memory.selectedFile} />
                    <div className={classes.overlay1}>
                        <Button size='small' style={{color : 'white'}}><MoreHorizIcon fontSize='default' onClick={editbtn} /></Button>
                    </div>
                    <div className={classes.overlay} >
                    <Typography variant='h6' style={{color : 'white'}}>{memory.creater}</Typography>
                        <Typography variant='body2' style={{color : 'white'}}>{moment(memory.createdAt).fromNow()}</Typography>
                    </div>
                    <div className={classes.details}>
                        <Typography variant="body2" color="textSecondary" component="h2">{memory.tags.map((tag) => `#${tag}` )}</Typography>
                    </div>

                    <Typography className={classes.title} gutterBottom variant="h5" component="h2">{memory.title}</Typography>

                    <CardContent>
                        <Typography variant='body2' color='textSecondary' component='p'>{memory.message}</Typography>
                    </CardContent>
                    <CardActions className={classes.actions}>
                        <Button size='small' color='primary'><ThumbUpAltIcon fontSize='small' onClick={() => dispatch(updateLike(memory._id))} />Like {memory.likeCount}</Button>
                        <Button size='small' color='secondary' onClick={() => dispatch(DeleteData(memory._id))}><DeleteIcon fontSize='small' />Delete</Button>
                    </CardActions>
                </Card>
        </div>
    )
}

export default Post
