import React, { memo } from 'react';
import SearchIcon from '@mui/icons-material/Search';

import './Header.scss';

import '../../icons/BaseIcon/BaseIcon.scss';

import { useHeader } from './hook';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  InputBase,
  Toolbar,
  Typography
} from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import { theme } from '../../../theme';
import { styled, alpha } from '@mui/material/styles';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto'
  }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.grey[500],
  fontWeight: 600,
  fontStyle: 'italic',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  }
}));

export const Header = memo(() => {
  const { open, node, setOpen } = useHeader();

  return (
    <Box
      sx={{
        zIndex: 10
      }}
    >
      <AppBar position="static" color="inherit" elevation={1}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex' }}>
            <Button
              sx={{
                mr: 2,
                textTransform: 'none',
                display: 'flex',
                gap: 2,
                alignItems: 'center'
              }}
              color="warning"
            >
              <GridViewIcon
                sx={{ color: theme.palette.grey[300], fontSize: 26 }}
              />
              <Typography
                sx={{
                  color: theme.palette.grey[500],
                  fontSize: 16,
                  fontWeight: 600
                }}
              >
                Boards
              </Typography>
            </Button>
            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: theme.palette.grey[500] }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>

          <Box>
            <Typography
              color="primary"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontWeight: 600 }}
            >
              Trello
            </Typography>
          </Box>

          <Box sx={{ ml: 30, alignSelf: 'right' }}>
            <IconButton>
              <WidgetsOutlinedIcon
                sx={{
                  color: theme.palette.grey[300]
                }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
});

// <header className={'header'}>
//   <div className={'header__icons_wrapper'}>
//     <div ref={node}>
//       <Burger open={open} setOpen={setOpen} />
//       <Menu open={open} />
//     </div>
//
//     <div className={'header__icon'}>
//       <Link to="/" className={'header__link'}>
//         <HomeHeaderIcon className={'size_sm'} />
//       </Link>
//     </div>
//
//     <Search />
//   </div>
//
//   <div className={'header__title_wrapper'}>
//     <h1 className={'header__title'}>Trello 2.0</h1>
//   </div>
//   <div className={'header__button_wrapper'}>
//     <Link to="/boardList" className={'header__button'}>
//       Your boards
//     </Link>
//   </div>
// </header>
