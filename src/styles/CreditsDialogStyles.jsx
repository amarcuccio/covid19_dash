const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  item: {
    height: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    padding: theme.spacing(1),
  },

  image: {
    width: 88,
    height: 88,
  },
  img: {
    width: '100%',
  },
});

export default styles;
