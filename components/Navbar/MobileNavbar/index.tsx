import { ReactNode } from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { NavbarProps } from '@/types/Navbar';

export default function MobileNavbar({data}: NavbarProps) {
  return (
    <Paper className='shadow-none' sx={{ width: 500, maxWidth: '100%' }}>
      <MenuList className='text-center'>
        {data.menuItems.map((item, index) => (
            <MenuItem key={index}>
            <ListItemText className="font-montserrat text-grey font-Montserrat text-2xl font-normal leading-10 tracking-wide">{item.name}</ListItemText>
          </MenuItem>
        ))}
        <MenuItem>
          <ListItemText>{data.loginRegisterMenuItem}</ListItemText>
        </MenuItem>
        {data.icons.map((item, index) => (
            <MenuItem key={index}>
            <span>{item.icon}</span>
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
}