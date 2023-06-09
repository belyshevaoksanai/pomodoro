import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { EqualizerIcon, LogoIcon } from "../../icons";
import { useNavigate } from "react-router-dom";

interface ILayoutProps {
    children: React.ReactElement;
}

export const Layout = ({ children }: ILayoutProps) => {
    const navigate = useNavigate();

    const handleStatisticsPush = () => {
        navigate('/pomodoro/statistics');
    }

    const handleTimerPush = () => {
        navigate('/pomodoro/timer');
    }

    return (
    <div>
        <AppBar>
            <Toolbar>
                <Box display='flex' justifyContent='space-between' width='100%'>
                    <Button variant="text" startIcon={<LogoIcon />} onClick={handleTimerPush}>
                        pomodoro_box
                    </Button>
                    <Button variant="text" startIcon={<EqualizerIcon />} onClick={handleStatisticsPush}>
                        Статистика
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
        <Box pb={10} pl={10} pr={10} pt={'100px'} display="flex" justifyContent="center">
            {children}
        </Box>
    </div>
)}
