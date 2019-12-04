import React from 'react';
import {
  Toolbar,
  Typography,
  Link,
  Container,
  Divider,
  Grid
} from '@material-ui/core';
import NavbarLink from './NavbarLink';

export default function Navbar(){
    const pages = [
        { name: 'Utama', href: '/utama' },
        { name: 'Pengenalan', href: '/pengenalan'},
        { name: 'Galeri', href: '/galeri'},
        { name: 'Pertanyaan', href: '/pertanyaan'},
    ];

    return (
        <div>
        <Grid container justify={'center'}>

                <Toolbar>
                <img src={'/images/ns.png'} width={100}/>
                    <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="flex-start"
                    noWrap
                    >
                    Portal DiRaja Negeri Sembilan
                    </Typography>
                    <img src={'/images/ns.png'} width={100}/>
                </Toolbar>
      </Grid>

            <Divider />

            <Container>
                <Toolbar component="nav" variant="dense">
                    <Grid container justify={'space-around'}>
                    {pages.map(page => (
                        <Grid item>
                          <NavbarLink
                            key={page.name}
                            title={page.name}
                            url={page.href}
                          />
                        </Grid>
                    ))}
                    </Grid>
                </Toolbar>
            </Container>
        </div>
    )
}
