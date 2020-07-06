import {createMuiTheme} from '@material-ui/core/styles';

const arcBlur="#0B72B9";
const arcOrange="#FFBA60";

export default createMuiTheme({
    palette:{
        common:{
            blur:`${arcBlur}`,
            orange:`${arcOrange}`
        },
        primary:{
            main:`${arcBlur}`
        },
        secondary:{
            main:`${arcOrange}`
        }
    },
    typography:{
        h3:{
            fontWeight:300
        },
        
    }
});