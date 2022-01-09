import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './sidebar.css';
import styles from '../info-panel/InfoPanel.module.css';

import Drawer from '@material-ui/core/Drawer';
import InfoCard from '../info-card/InfoCard'

export default props => {
  return (
    <Menu>
      <Drawer className={styles.drawer} variant="permanent" classes={{paper: styles.drawerPaper}} anchor="left">
        <InfoCard></InfoCard>
      </Drawer>

    </Menu>
  );
};