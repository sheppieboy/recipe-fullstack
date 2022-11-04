
import { AppBar, Toolbar, Typography } from "@mui/material"
import {styled} from "@mui/material/styles";


const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
}) as typeof Toolbar;

export const Navbar = () =>{
    return (<AppBar>
        <StyledToolbar>
            <Typography>
                Logo
            </Typography>
            <Typography>
                Search bar
            </Typography>
            <Typography>
                profile pic + tooltip
            </Typography>
        </StyledToolbar>
    </AppBar>)
}