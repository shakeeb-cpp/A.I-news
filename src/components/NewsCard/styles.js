import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    media: {
        height: 200,
    },
    border: {
        border: 'solid',
    },
    fullHeightCard: {
        height: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottom: '10px solid rgb(20, 20, 20)',
        backgroundColor: 'rgb(23, 23, 23)',
        color:'#fff'
    },
    activeCard: {
        borderBottom: '10px solid #565afa',
    },
    grid: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
        // color:'#fff'
    },
    title: {
        padding: '0 12px',
        margin: '0px 0px',
        // color:'#fff'
    },
    cardActions: {
        padding: '0 16px 0px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        // color:'#fff'
    },

});
