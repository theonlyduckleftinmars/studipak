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
                sx={{ color: blue[500] }} // Change the color of the IconButton
            >
                <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <List>
                    <ListItem button component={Link} href="/">
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button component={Link} href="/upload">
                        <ListItemText primary="Upload" />
                    </ListItem>
                    <ListItem button component={Link} href="/courses">
                        <ListItemText primary="Courses" />
                    </ListItem>
                    <ListItem button component={Link} href="/about">
                        <ListItemText primary="About" />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
};

export default Navbar;