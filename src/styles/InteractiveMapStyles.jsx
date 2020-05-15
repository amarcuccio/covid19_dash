const styles = (theme) => ({
  updated: {
    fontStyle: 'oblique',
    textAlign: 'right',
    marginTop: '3em',
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem !important',
    },
  },
});

export default styles;
