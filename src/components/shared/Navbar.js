import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

export default function Navbar(){
    const sections = [
        { name: 'Utama', href: '/utama' },
        { name: 'Pengenalan', href: '/pengenalan'},
        { name: 'Galeri', href: '/galeri'},
        { name: 'Pertanyaan', href: '/pertanyaan'},
    ];

    return (
        <div>
            <Container>
                <Toolbar>
                    <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="flex-start"
                    noWrap
                    >
                    Portal
                    </Typography>
                </Toolbar>
            </Container>

            <Divider />
            
            <Container>
                <Toolbar component="nav" variant="dense">
                    <Grid container justify={'space-between'}>
                    {sections.map(section => (
                        <Grid item>
                            <Link
                                color="inherit"
                                noWrap
                                key={section.name}
                                variant="body2"
                                href={section.href}
                            >
                                {section.name}
                            </Link>
                        </Grid>
                    ))}
                    </Grid>
                </Toolbar>
            </Container>
            
            <Divider />
        </div>
    )
}

