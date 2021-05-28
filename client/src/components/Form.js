import React,{useState, useEffect} from 'react';
import { TextField, Button, Typography, Card } from '@material-ui/core';
import FileBase from 'react-file-base64';
import {makeStyles} from '@material-ui/core/styles'
import {useHistory} from 'react-router-dom'
import {PostData} from '../redux/actions/memoriesActions'
import {EditData} from '../redux/actions/memoriesActions'
import {useDispatch, useSelector} from 'react-redux'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
        },
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    card : {
        margin : '0 auto',
        width : '35%',
        padding: theme.spacing(2)
    },
    fileInput : {
        width: '97%',
        margin : '1rem 0'
    },
    buttonSubmit : {
        margin : '1rem 0'
    }
}))

const Form = ({currentId, setCurrentId}) => {
    const [postData, setPostData] = useState({creater: '', title: '', message: '', tags: '', selectedFile: ''});
    
    const post = useSelector((state) => currentId ? state.memories.find((p) => p._id === currentId) : null);
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post);
    }, [post])

    const clear = () => {
        setCurrentId(null);
        setPostData({
            creater: '', 
            title: '', 
            message: '', 
            tags: '', 
            selectedFile: ''
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId === null) {
            dispatch(PostData(postData));
            clear();
        }else{
            dispatch(EditData(currentId, postData));
            clear();
        }
        history.push('/');
    }
    return (
        <Card className={classes.card}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">Create your memory</Typography>
            <TextField 
             name="creator" 
             variant="outlined" 
             label="Creator" 
             fullWidth 
             value={postData.creater}
             onChange={(e) => setPostData({...postData, creater: e.target.value})} 
            />
            <TextField 
             name="title" 
             variant="outlined" 
             label="Title" 
             fullWidth  
             value={postData.title}
             onChange={(e) => setPostData({...postData, title: e.target.value})}
            />
            <TextField 
             name="message" 
             variant="outlined" 
             label="Message" 
             fullWidth 
             multiline 
             rows={4} 
             value={postData.message}
             onChange={(e) => setPostData({...postData, message: e.target.value})}
            />
            <TextField 
             name="tags" 
             variant="outlined" 
             label="Tags (coma separated)" 
             fullWidth 
             value={postData.tags}
             onChange={(e) => setPostData({...postData, tags: e.target.value.split(',')})}
            />
            <div className={classes.fileInput}>
                <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}/>
            </div>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" fullWidth onClick={clear}>Clear</Button>
        </form>
        </Card>
  );
};

export default Form;