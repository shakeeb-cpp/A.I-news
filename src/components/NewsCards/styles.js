import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    container: {
        padding: '0 2%',
        paddingBottom:'2%',
        width: '100%',
        margin: '0',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '56vh',
        padding: '5%',
        borderRadius: '10px',
        color: 'white',
        border:'2px solid #636363'
    },
    infoCard: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
    }

});

