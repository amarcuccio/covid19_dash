const styles = (theme) => ({
  root: {
    marginTop: '1.5em',
    marginBottom: '1.5em',
  },
  title: {
    marginBottom: '1.5em',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem !important',
    },
  },
  updated: {
    fontStyle: 'oblique',
    textAlign: 'right',
  },
  grid: {
    marginBottom: '1.5em',
  },
});

export default styles;
