import Typography from "typography";

const typography = new Typography({ 
  baseFontSize: "16px",
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    a: {
      textDecoration: 'none'
    },
    // h3: {
    //   fontFamily: ['Palatino Linotype', 'sans-serif'].join(','),
    // },
    blockquote: {
      ...adjustFontSizeTo('19px'),
      color: 'gray',
      fontStyle: 'italic',
      paddingLeft: rhythm(13/16),
      marginLeft: rhythm(-1),
      borderLeft: `${rhythm(3/16)} solid grey`,
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
  })
});

export default typography;