const styles = (theme) => ({
  details: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    width: '30%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    [theme.breakpoints.down('xs')]: {
      marginTop: '1em',
      width: '100%',
    },
  },
  countIcon: {
    marginRight: '0.5em',
  },
});

export default styles;
