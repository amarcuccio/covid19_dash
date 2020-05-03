const styles = (theme) => ({
  root: {
    width: '50%',
    margin: 'auto',
  },
  gradient: {
    backgroundImage:
      'linear-gradient(to right, #fff5eb, #fee6ce, #fdd0a2, #fdae6b, #fd8d3c, #f16913, #d94801, #a63603, #7f2704 )',
    height: '20px',
    [theme.breakpoints.down('xs')]: {
      height: '12px',
    },
  },
  text: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.750rem',
    },
    fontWeight: 'bold',
    paddingTop: '0.25rem',
  },
});

export default styles;
