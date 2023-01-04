import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material"
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material"
import { red } from "@mui/material/colors"


const Feed = ({Dummyposts}) => {
 
  return (
    <Box flex = {4}>
     {Dummyposts.map(ci=>{
      return (
        <Card sx={{ maxWidth: "100%",marginBottom:"20px" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {ci.shortName}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={ci.name}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="15%"
          image={ci.uploadPic}
          alt={ci.name}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
             lorem ipsum dolar sit amet,consectetur adipiscing elit 
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx = {{color:"red"}}/>} />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
          
        </CardActions>
        
      </Card>
      )
     })}
      
    </Box>
  )
}

export default Feed
