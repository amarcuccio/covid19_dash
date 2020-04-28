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
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  buttonIcon: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '30px !important',
      marginRight: '-30px',
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
