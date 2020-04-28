const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    height: '50px',
    marginRight: '20px',
    marginLeft: '-25px',
  },
  buttonText: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  buttonIcon: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px !important',
    },
  },
});

export default styles;
