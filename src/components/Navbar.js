import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

import SearchIcon from '@material-ui/icons/Search';
import GoIcon from '@material-ui/icons/ChevronRight';

import useStyles from './Styles';

function Navbar(){
    const classes = useStyles();

    const [searchClicked, setSearchClicked] = React.useState(false);
    const [search, setSearch] = React.useState(null);

    const sections = [
        { name: 'Utama', href: '/utama' },
        { name: 'Pengenalan', href: '/pengenalan'},
        { name: 'Galeri', href: '/galeri'},
    ];

    const handleSearchClick = () => {
        setSearchClicked(!searchClicked)
    }

    const handleChangeSearch = (event) => {
        setSearch(event.target.value)
    }

    const handleSubmitSearch = (event) => {
        event.preventDefault();
        if (search === null || '') {
            return
        } else {
            alert(search)
        }
    }

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
                    className={classes.toolbarTitle}
                    >
                    Portal
                    </Typography>

                    {searchClicked && (
                        <div>
                            <TextField
                                margin="normal"
                                id="search"
                                label="Search"
                                name="search"
                                onChange={handleChangeSearch}
                            />
                            <IconButton onClick={handleSubmitSearch}>
                                <GoIcon />
                            </IconButton>
                        </div>
                    )}

                    {!searchClicked && (
                        <IconButton onClick={handleSearchClick}>
                            <SearchIcon />
                        </IconButton>
                    )}
                </Toolbar>
            </Container>

            <div className={classes.toolbar} />
            
            <Container>
                <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                    {sections.map(section => (
                        <Link
                            color="inherit"
                            noWrap
                            key={section.name}
                            variant="body2"
                            href={section.href}
                            className={classes.toolbarLink}
                        >
                            {section.name}
                        </Link>
                    ))}
                </Toolbar>
            </Container>
        </div>
    )
}

export default Navbar;

