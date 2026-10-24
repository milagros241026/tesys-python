import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function TitlebarBelowMasonryImageList() {
  return (
    <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
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
    img: 'C:\proyectos\tesys\paginaweb\front\vite-project-tenis\src\assets\alcarazroland.jpg',
    title: 'Bed',
    author: 'swabdesign',
  },
  {
    img:"https://www.claytenis.com/portada/alcaraz-y-el-final-de-su-inocencia-ante-djokovic/" ,
    title: 'alcaraz',
    
  },
  {
    img: 'https://www.mcall.com/2026/10/16/novak-djokovic-disputar-el-torneo-de-basilea-tras-aceptar-una-invitacin/',
    title: 'djokovic',
   
  },
  {
    img: 'https://www.espn.com.ar/tenis/jugador/_/id/2375/alexander-zverev',
    title: 'zverev',
    
  },
  {
    img: 'https://ca-times.brightspotcdn.com/dims4/default/79a1607/2147483647/strip/true/crop/3982x2655+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F35%2F6b%2F6aa2adf247bd9535425d0e77e11c%2F88e803143e9b4a67b8054e3197c93d04.jpg',
    title: 'sinner',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl_77-P8v_IZRWuiJ1C-CaI-iwQakqdt_CW312ypmdypn8PtqFUJYGaqg&s=10',
    title: 'swiatek',
   
  },
  {
    img: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Aryna_Sabalenka_US_Open_Final_2024.jpg/500px-Aryna_Sabalenka_US_Open_Final_2024.jpg?utm_source=es.wikipedia.org&utm_campaign=parser&utm_content=thumbnail',
    title: 'sabalenka',
    
  },
   
];
