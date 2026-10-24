import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import alcarazImage from './data/public/alcarazroland.jpg';
import sinnerImage from './data/public/sinner.png';
import medvedevImage from './assets/medvedevus.png';
import rybakinaImage from './assets/rybakina.png';

export default function TitlebarBelowMasonryImageList() {
  return (
    <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: alcarazImage,
    title: 'Carlos Alcaraz',
    author: 'Roland Garros',
  },
  {
    img: sinnerImage,
    title: 'Jannik Sinner',
    author: 'Tenis',
  },
  {
    img: medvedevImage,
    title: 'Daniil Medvedev',
    author: 'US Open',
  },
  {
    img: rybakinaImage,
    title: 'Elena Rybakina',
    author: 'Tenis',
  },
   
];
