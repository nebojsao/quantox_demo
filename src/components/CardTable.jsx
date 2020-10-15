import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import routes from '../config/routes';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    table: {
        minWidth: 650
    },
    tableRow: {
        cursor: 'pointer'
    }
});

export const CardTable = ({ cardData }) => {
    const classes = useStyles();
    const history = useHistory();

    const handleRowClick = (e, id) => {
        history.push(`${routes.VIEW_CARDS}/${id}/edit`);
    };

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell align={'left'}>Card Id</TableCell>
                        <TableCell align={'left'}>Owner Name</TableCell>
                        <TableCell align={'left'}>Card number</TableCell>
                        <TableCell align={'left'}>Expires On</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cardData.map((row) => (
                        <TableRow
                            key={row.id}
                            className={classes.tableRow}
                            hover
                            onClick={(e) => handleRowClick(e, row.id)}
                        >
                            <TableCell align={'left'}>{row.id}</TableCell>
                            <TableCell align={'left'}>{row.ownerName}</TableCell>
                            <TableCell align={'left'}>{row.cardNumber}</TableCell>
                            <TableCell align={'left'}>{row.expiresOn}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

CardTable.propTypes = {
    cardData: PropTypes.array.isRequired
};
