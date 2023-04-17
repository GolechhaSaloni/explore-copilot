// create a new react component called DataTable that takes in a prop called data, attributesName and show them in a table format using materialUI
// component should have pagination for 10 items
import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { Pagination } from 'material-ui';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index';

function DataTable({data,attributesName}) {
    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        {attributesName.map((attribute, index) => {
                            return <TableHeaderColumn key={index}>{attribute}</TableHeaderColumn>
                        })}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((row, index) => {
                        return (
                            <TableRow key={index}>
                                {attributesName.map((attribute, index) => {
                                    return <TableRowColumn key={index}>{row[attribute]}</TableRowColumn>
                                })}
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}
function mapStateToProps(state) {
    return {
        data: state.data,
        attributesName: state.attributesName
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(DataTable);
// export default DataTable;


// function DataTable({data,attributesName}) {
    //     return (
//         <div>
//             <Table>
//                 <TableHeader>
//                     <TableRow>
//                         {attributesName.map((attribute, index) => {
//                             return <TableHeaderColumn key={index}>{attribute}</TableHeaderColumn>
//                         })}
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {data.map((row, index) => {
//                         return (
//                             <TableRow key={index}>
//                                 {attributesName.map((attribute, index) => {
//                                     return <TableRowColumn key={index}>{row[attribute]}</TableRowColumn>
//                                 })}
//                             </TableRow>
//                         )
//                     })}
//                 </TableBody>
//             </Table>
//         </div>
//     )
// }





