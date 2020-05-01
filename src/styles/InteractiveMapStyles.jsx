const colorRange = [
  '#FFCDD2',
  '#EF9A9A',
  '#E57373',
  '#F44336',
  '#E53935',
  '#D32F2F',
  '#C62828',
  '#B71C1C',
];

const styles = (theme) => ({
  mapScale: {
    width: 180,
    margin: 'auto',
    backgroundImage: `linear-gradient(to right, ${colorRange[0]}, ${colorRange[7]})`,
    height: 20,
  },
  geography: {
    outline: 'none',
    '&:hover': {
      fill: '#00C853',
      transition: 'all 750ms',
      outline: 'none',
      cursor: 'pointer',
    },
  },
});

export default styles;
