import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PokemonCard(props) {
  return (
    <Card elevation={3} sx={{ maxWidth: 345, ml: 3, mt: 5}}>
      <CardMedia  sx={{ height: 120, mt: 2}} component="img" src={props.imagem}> 
        </CardMedia>
      <CardContent>
        <Typography textTransform="uppercase" fontSize="13px" textAlign="center" gutterBottom variant="p" sx={{ml: -1}}component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.descricao}
        </Typography>
      </CardContent>
    </Card>
  );
}
