// create a new react component called DataTable that takes in a prop called data, attributesName and show them in a table format using materialUI
// component should have pagination for 10 items

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Item from './Item';

// columns should map from the attributesName prop
// data should map from the data prop
// pagination should be 10 items per page

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function DataTable({ data, attributesName }) {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [showItem, setShowItem] = React.useState(false);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleClick = () => {
        setShowItem(true);
    }

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {attributesName.map((attribute) => (
                                <TableCell key={attribute}>{attribute}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {attributesName.map((attribute) => {
                                        const value = row[attribute];
                                        const handleClick = () => {
                                            if (attribute === 'name') {
                                                setShowItem(true);
                                            }
                                            console.log('clicked', attribute, value);
                                        }
                                        return (
                                            <TableCell key={attribute} onClick={handleClick}>{value}</TableCell>
                                        );
                                    })}
                                    {showItem && <Item item={row} isVisible={showItem} setIsVisible={setShowItem}/>}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
