import React from 'react'
import styles from './global.module.scss'
import { Modal } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import CustomCard from './CustomCard';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


function CustomModal(props) {
    const { open, handleClose, children } = props;

    return (
        <Modal
            open={open}
            onClose={handleClose}
            className={styles.contentModal}
            closeAfterTransition
            BackdropProps={{ timeout: 500 }} >
            <CustomCard>
                <div className={styles.iconContainer}  >
                    <IconButton color="primary" onClick={handleClose}>
                        <HighlightOffIcon />
                    </IconButton>
                </div>
                {children}
            </CustomCard>
        </Modal>
    )
}

export default CustomModal