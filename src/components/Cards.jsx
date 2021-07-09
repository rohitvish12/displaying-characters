
import { Card, Typography, makeStyles,Tooltip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    img:{
        height:300,
        width:'100%',
        objectFit:"cover"
    }
}))

const Cards = ({ item }) => {
    console.log(item);
    const classes = useStyles();
    return (
        <Card>
            <Tooltip title={
                <>
                    <Typography>Name: {item.name}</Typography>
                    <Typography>NickName: {item.nickname}</Typography>
                    <Typography>Real Name: {item.portrayed}</Typography>
                    <Typography>BirthDay: {item.birthday}</Typography>
                    <Typography>Status: {item.status}</Typography>
                </>
            } 
            arrow placement='top'  >

            <img src={item.img} className={classes.img} alt="character" />
            </Tooltip>
        </Card>
    )
}

export default Cards;