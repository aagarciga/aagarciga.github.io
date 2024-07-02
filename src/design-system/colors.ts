interface Color {
  [key: string]: {
    DEFAULT: string,
    [key: number]: string
  }
}

const colors: Color = {
  'aerospace_orange': {
    DEFAULT: '#ff4f00',
    100: '#331000',
    200: '#662000',
    300: '#993000',
    400: '#cc4100',
    500: '#ff4f00',
    600: '#ff7433',
    700: '#ff9666',
    800: '#ffb999',
    900: '#ffdccc'
  },
  'brandeis_blue': {
    DEFAULT: '#0b6ff9',
    100: '#011633',
    200: '#032c65',
    300: '#044298',
    400: '#0558cb',
    500: '#0b6ff9',
    600: '#3c8bfa',
    700: '#6da8fb',
    800: '#9ec5fd',
    900: '#cee2fe'
  },
  'gunmetal': {
    DEFAULT: '#2c3539',
    100: "#2c363a",
    90: "#3E494E",
    80: "#525E64",
    70: "#67747A",
    60: "#7E8A90",
    50: "#95A1A6",
    40: "#AEB8BC",
    30: "#C8CFD2",
    20: "#E2E7E8",
    10: "#FFFFFF",
  },
  'white_smoke': {
    DEFAULT: '#f5f5f5',
    100: "#f5f5f5",
    90: "#D9D9D9",
    80: "#BEBEBE",
    70: "#A3A3A3",
    60: "#888888",
    50: "#6C6C6C",
    40: "#515151",
    30: "#363636",
    20: "#1B1B1B",
    10: "#000000",
  },
  'auroelin': {
    DEFAULT: '#E9DF00'
  },
  'satin_sheen_gold': {
    DEFAULT: '#CBA328'
  },
  'burgury': {
    DEFAULT: '#93032E'
  },
  'blood_red': {
    DEFAULT: '#6B0504'
  }
}

export default colors