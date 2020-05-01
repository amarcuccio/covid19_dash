const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      fontSize: '16px !important',
    },
  },
  logo: {
    height: '50px',
    marginRight: '20px',
    marginLeft: '-25px',
  },
  button: {
    [theme.breakpoints.down('xs')]: {
      paddingRight: '0px',
    },
  },
  buttonText: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  buttonIcon: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '28px !important',
      marginRight: '-30px',
      paddingRight: '0px',
    },
  },
  titleTextSm: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  titleTextXs: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
});

export default styles;
