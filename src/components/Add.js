
import { Avatar, Box, Button, ButtonGroup, Fab, IconButton, Modal, styled, TextField, Tooltip, Typography } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { deepOrange } from '@mui/material/colors';
import { Stack } from '@mui/system';
import { DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';
const Add = () => {
    const [open, setOpen] = React.useState(false);
    const StyledModal = styled(Modal)({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    })
    return (
        <>
            <Tooltip onClick={e => setOpen(true)} sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50%)", sm: 30 } }}>
                <IconButton>
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </IconButton>

            </Tooltip>
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box borderRadius={3} width={400} height={280} bgcolor={"white"} color ={"black"} p={2}>
                    <Typography variant='h6' color="grey" textAlign="center">Create post</Typography>
                    <Box sx={{ gap: 2, display: { display: "flex" }, marginBottom: "10px" }}>
                        <Avatar sx={{ bgcolor: deepOrange[500], width: 30, height: 29 }}>V</Avatar>
                        <Typography variant='h6'>Vamsi</Typography>
                    </Box>
                    <TextField
                        id="standard-multiline-static"
                        sx={{ width: "100%" }}
                        multiline
                        rows={2}
                        placeholder="what's on your mind"
                        variant="standard"
                        
                    />
                    <Stack direction="row" gap={1} mt={2} mb={2}>
                        <EmojiEmotions color="primary" />
                        <Image color="secondary" />
                        <VideoCameraBack color="success" />
                        <PersonAdd color='error' />
                    </Stack>
                    <ButtonGroup fullWidth  variant="contained" aria-label="outlined primary button group">
                        <Button >post</Button>
                        <Button sx = {{width:"100px"}}><DateRange/></Button>
                    </ButtonGroup>

                </Box>
            </StyledModal>
        </>
    )
}

export default Add
