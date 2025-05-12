import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { DrawerContent } from './DrawerContent';
import { ModalConfiguredCookies } from './ModalConfiguredCookies';

type Anchor = 'bottom';

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DrawerCookiesHeader = ({ open, setOpen }: Props) => {
  const configuredCookies = localStorage.getItem('configuredCookie');

  const [state, setState] = useState({
    bottom: configuredCookies ? false : true,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <div>
      {(['bottom'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            // onClose={toggleDrawer(anchor, false)}
          >
            <DrawerContent
              setOpen={setOpen}
              toggleFuntion={() => toggleDrawer('bottom', false)}
            />
          </Drawer>
        </React.Fragment>
      ))}

      <ModalConfiguredCookies
        toggleFuntion={() => toggleDrawer('bottom', false)}
        setOpen={setOpen}
        open={open}
      />
    </div>
  );
};
