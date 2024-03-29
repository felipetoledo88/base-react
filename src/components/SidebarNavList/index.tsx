import React from 'react';
import { useMatch, Link as RouterLink } from 'react-router-dom';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import PaymentIcon from '@mui/icons-material/Payment';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useAuth } from '../../contexts/AuthContext'; 

interface SidebarNavListProps {
    handleOpenSettings: () => void;
    handleLogout: () => void;
}

const SidebarNavList: React.FC<SidebarNavListProps> = ({ handleOpenSettings, handleLogout }) => {
    const { userAccessLevel } = useAuth();

    const dashboardPath = userAccessLevel === 1 ? '/admin/dashboard' : '/cliente/dashboard';
    const matchDashboard = useMatch(dashboardPath);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Box sx={{ flexGrow: 1 }}>

                <List>
                    <ListItem>
                        <ListItemText primary="Projetos" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                            component={RouterLink}
                            to={dashboardPath}
                            sx={{
                                backgroundColor: matchDashboard ? 'action.selected' : 'transparent', 
                                '&:hover': {
                                    backgroundColor: 'action.hover',
                                },
                            }}
                        >
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem>
                        <ListItemText primary="Contratos" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <FileCopyIcon />
                            </ListItemIcon>
                            <ListItemText primary="Meus Contratos" />
                        </ListItemButton>
                    </ListItem>
                </List>

                <Divider />
                <List>
                    <ListItem>
                        <ListItemText primary="Financeiro" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PaymentIcon />
                            </ListItemIcon>
                            <ListItemText primary="Pagamentos" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <HistoryIcon />
                            </ListItemIcon>
                            <ListItemText primary="Histórico" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
            <Box>
                <Divider />
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={handleOpenSettings}>
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Ajustes" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={handleLogout}>
                            <ListItemIcon>
                                <ExitToAppIcon />
                            </ListItemIcon>
                            <ListItemText primary="Sair" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default SidebarNavList;
