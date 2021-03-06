const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    [theme.breakpoints.down('xs')]: {
      paddingRight: '0px !important',
    },
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
  buttonIcon: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '28px !important',
      marginRight: '-30px',
      paddingRight: '0px',
    },
  },
});

export default styles;
