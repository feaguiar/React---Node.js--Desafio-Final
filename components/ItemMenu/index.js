import { Box } from '@material-ui/system';
import React from 'react';

function ItemMenuLateral({ nome, imagem, alt, link, ...rest }) {
  return (
    <Box
      sx={{
        textAlign: "center",
        textTransform: "capitalize",
        cursor: 'pointer',
      }}
      {...rest}
    >
      <img
        src={imagem}
        alt={alt}
        loading="lazy"
        style={{ filter: "revert-layer" }}
      />

      <p>{nome}</p>
    </Box>
  );
};

export default ItemMenuLateral;