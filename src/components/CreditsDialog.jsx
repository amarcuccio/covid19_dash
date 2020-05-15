import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/CreditsDialogStyles';
import { defaultConfig } from '../config';

function CreditsDialog(props) {
  const { classes, open, close } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const tools = defaultConfig.dialogTools;
  return (
    <div>
      <Dialog
        open={open}
        onClose={close}
        aria-labelledby="customized-dialog-title"
        fullScreen={fullScreen}
      >
        <DialogTitle id="customized-dialog-title">
          About This Project
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={close}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            This application was developed to view live Coronavirus Disease
            (COVID-19) related data at a glance. The figures displayed on the
            site are fetched from a public API that collects and compiles them
            from a verified, reputable source:{' '}
            <Link
              color="secondary"
              target="_blank"
              rel="noopener"
              href="https://systems.jhu.edu/research/public-health/ncov/"
            >
              Johns Hopkins University Center for Systems Science and
              Engineering
            </Link>
            .
          </Typography>
          <Typography variant="h6" gutterBottom>
            <Box pt={1} pb={2}>
              Development Toolset
            </Box>
          </Typography>
          <Grid container spacing={2} mt={5}>
            {tools.map((tool) => (
              <Grid item xs={6} sm={4} key={tool.title}>
                <Link
                  href={tool.url}
                  target="_blank"
                  rel="noopener"
                  underline="none"
                >
                  <Paper className={classes.item}>
                    <ButtonBase className={classes.image} disableRipple={true}>
                      <img
                        className={classes.img}
                        alt={tool.title}
                        src={tool.source}
                        title={tool.title}
                      />
                    </ButtonBase>
                    <Typography className={classes.title} variant="subtitle2">
                      {tool.title}
                    </Typography>
                  </Paper>
                </Link>
              </Grid>
            ))}
          </Grid>
          <Typography variant="h6" gutterBottom>
            <Box pt={3}>Credits / Attributions</Box>
          </Typography>
          <Typography gutterBottom>
            Logo: created by{' '}
            <Link
              color="secondary"
              target="_blank"
              rel="noopener"
              href="https://www.flaticon.com/authors/freepik"
            >
              Freepik
            </Link>{' '}
            from{' '}
            <Link
              color="secondary"
              target="_blank"
              rel="noopener"
              href="https://www.flaticon.com/"
            >
              flaticon.com
            </Link>
            .
          </Typography>
          <Typography gutterBottom>
            Data API: provided by{' '}
            <Link
              color="secondary"
              target="_blank"
              rel="noopener"
              href="https://twitter.com/ksredelinghuys"
            >
              Kyle Redelinghuys
            </Link>{' '}
            at{' '}
            <Link
              color="secondary"
              target="_blank"
              rel="noopener"
              href="https://covid19api.com/"
            >
              covid19api.com
            </Link>
            .
          </Typography>
          <Typography variant="h6" gutterBottom>
            <Box pt={2}>Code Repository</Box>
          </Typography>
          <Typography gutterBottom>
            Check out the code for this app on{' '}
            <Link
              color="secondary"
              target="_blank"
              rel="noopener"
              href="https://github.com/amarcuccio/covid19_dash"
            >
              GitHub
            </Link>
            .
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default withStyles(styles)(CreditsDialog);
