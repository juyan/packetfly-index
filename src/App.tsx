import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import {ReactComponent as PacketFlyIcon} from './PacketFlyIcon.svg';
import PeopleIcon from '@material-ui/icons/People';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://packetfly.app/">
        PacketFly Corporation
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function AppIcon(props: SvgIconProps) {
  return (
    <SvgIcon component={PacketFlyIcon} viewBox="0 0 512 512" fontSize="large" {...props}/>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appIcon: {
    verticalAlign: 'middle',
    marginRight: theme.spacing(1),
    height: '48px',
    width: '48px'
  },
  groupIcon: {
    verticalAlign: 'middle',
    marginRight: theme.spacing(1)
  }
}));

export default function App() {

  const classes = useStyles();

  return (
    <Container disableGutters={true} maxWidth={false}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            PacketFly
          </Typography>
          <Button color="inherit" href="https://twitter.com/FlyPacket">Contact Us</Button>
        </Toolbar>
      </AppBar>
      <Box my={4}>
        <Box p="1rem">
          <Typography variant="h4" component="h1" gutterBottom>
            <AppIcon className={classes.appIcon} />PacketFly
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            PacketFly is a mobile app that help you analyze TCP and UDP packets in real-time. Download link will be added once app reaches AppStore.
          </Typography>
        </Box>
        <Box p="1rem">
          <Typography variant="h4" component="h1" gutterBottom>
            <PeopleIcon fontSize='large' className={classes.groupIcon}/>About Us
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            We focus on delivering high quality tooling app to ease developer's experience. Please contact us via
          <Link href="https://twitter.com/FlyPacket"> Twitter </Link>
            if you have any feedback or suggestions.
          </Typography>
        </Box>
        <Copyright />
      </Box>
    </Container>
  );
}
