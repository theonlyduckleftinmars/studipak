"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { blue } from "@mui/material/colors";

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    return (
        <>
            <IconButton
                edge="start"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ color: blue[400] }} // Change the color of the IconButton
            >
                <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <List className="cursor-pointer">
                    <ListItem button component={Link} href="/login">
                        <ListItemText primary="LogIn" />
                    </ListItem>
                    <ListItem button component={Link} href="/signup">
                        <ListItemText primary="Sign Up" />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
};

export default Navbar;