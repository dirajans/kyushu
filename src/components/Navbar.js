import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';

import SearchIcon from '@material-ui/icons/Search';
import GoIcon from '@material-ui/icons/ChevronRight';

import useStyles from './Styles';

function Navbar(){
    const classes = useStyles();

    const [searchClicked, setSearchClicked] = React.useState(false);
    const [values, setValues] = React.useState('');

    const sections = [
        'Utama',
        'Pengenalan',
        'Galeri',
    ];

    const handleSearchClick = () => {
        setSearchClicked(!searchClicked)
    }

    const handleChangeInput = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const handleSubmitSearch = (event) => {
        event.preventDefault();
        const { search } = values;

        alert(search)
    }

    return (
        <div>
            <Toolbar className={classes.toolbar}>
                <Typography
                component="h2"
                variant="h5"
                color="inherit"
                align="flex-start"
                noWrap
                className={classes.toolbarTitle}
                >
                Blog
                </Typography>

                {searchClicked && (
                    <>
                        <TextField
                            margin="normal"
                            id="search"
                            label="Search"
                            name="search"
                            onChange={handleChangeInput('search')}
                        />
                        <IconButton onClick={handleSubmitSearch}>
                            <GoIcon />
                        </IconButton>
                    </>
                )}

                {!searchClicked && (
                    <IconButton onClick={handleSearchClick}>
                        <SearchIcon />
                    </IconButton>
                )}
                
            </Toolbar>
            <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                {sections.map(section => (
                <Link
                    color="inherit"
                    noWrap
                    key={section}
                    variant="body2"
                    href="#"
                    className={classes.toolbarLink}
                >
                    {section}
                </Link>
                ))}
            </Toolbar>
        </div>
    )
}

export default Navbar;

