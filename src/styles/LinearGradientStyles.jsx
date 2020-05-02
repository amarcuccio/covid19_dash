const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    margin: '0 auto',
    height: 20,
  },
  image: {
    display: 'flex',
    width: '100%',
    margin: '0 auto',
    '& img': {
      height: 20,
      maxWidth: '100%',
    },
  },
  text: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    margin: '0 auto',
  },
});

export default styles;
