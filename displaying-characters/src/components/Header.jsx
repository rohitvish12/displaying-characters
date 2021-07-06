// import { AppBar, Toolbar, Typography, Box, InputBase, makeStyles, fade,  } from "@material-ui/core";
// import SearchIcon from '@material-ui/icons/Search';
// import logo from '../image/Breaking_logo.png';

// const useStyles = makeStyles((theme) => ({
//     root:{
//         flexGrow:1
//     },
//     logo: {
//         width: 100,
        
//     },
//     header: {
//         background: "#000000",
//         padding: 5,
        
//     },
//     search: {
//         background:'rgba(255, 255, 255, 0.15)',
//         borderRadius: 10,
//         // backgroundColor: fade(theme.palette.common.white, 0.15),
//         // '&:hover': {
//         //     backgroundColor: fade(theme.palette.common.white, 0.25),
//         // },
//         marginLeft: 100,
//     },
//     // searchIcon: {
//     //     padding: theme.spacing(0, 2),
//     //     display: 'flex',
//     //     alignItems: 'center',
//     //     justifyContent: 'center',
//     // },
//     inputRoot: {
//         color: 'inherit',
//         margin:'0 50px',
//     },
// }))

// const Header = () => {
//     const classes = useStyles();
//     return (
//         <div className={classes.root}>

//         <AppBar className={classes.header} position='static' >
//             <Toolbar>
//                 <img src={logo} alt="logo" className={classes.logo} />
//             </Toolbar>
//            <Box className={classes.search} >
//                <InputBase/>
//            </Box>
//         </AppBar>
//         </div>
//     )
// }

// export default Header;











import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../image/Breaking_logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header:{
      background:"#000000"
  },
  logo:{
    width: 100,
    marginRight:'auto',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 100,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Header = ({getText}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.header} position="static">
        <Toolbar>
        <img src={logo} alt="logo" className={classes.logo} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
            }}
                onChange={(e) => getText(e.target.value)}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default Header;