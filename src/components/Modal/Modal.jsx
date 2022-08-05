import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import VideoPlayer from './../VideoPlayer/VideoPlayer'
import { IconButton, Box } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import styled from 'styled-components';

export default function TransitionsModal({open,setOpen,video_url,title}) {
  const handleClose = () => setOpen(false);
  const ModalWrapperMain = styled(Box)`
    position: absolute !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    width: 850px !important;
    border: '2px solid #000' !important;
    box-shadow: 24px !important;
    padding: 20px !important;
    height:600px !important;
    outline:none !important;
    background-color: #000000 !important;
    border:none !important;
    @media (max-width:900px){
        width: 100% !important;
        height: 100% !important;
        padding: 10px !important;
    }
  `
  return (
    <div>   
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open} style={{outline:"none",border:'none'}}>
          <ModalWrapperMain>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:'-5px'}}>
              <h2 style={{color:'white',padding:10}}>{title}</h2>
              <IconButton onClick={handleClose} >
                <CloseRoundedIcon style={{color:'white',fontSize:40}} />
              </IconButton>
            </div>  
            <VideoPlayer show={open} video_url={video_url} />
          </ModalWrapperMain>
        </Fade>
      </Modal>
    </div>
  );
}
