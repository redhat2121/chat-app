import React from 'react';
import { Button, Icon, Drawer } from 'rsuite';
import { useModalState } from '../../misc/custom-hooks';
import Dashboard from '.';

const DashboardToggle = () => {
  const { isOpen, close, open } = useModalState();
  return (
    <>
      <Button block clolor="blue" onClick={open}>
        <Icon icon="dashboard" /> Dashboard
      </Button>
      <Drawer show={isOpen} outside={close} placement="left">
        <Dashboard />
      </Drawer>
    </>
  );
};

export default DashboardToggle;
