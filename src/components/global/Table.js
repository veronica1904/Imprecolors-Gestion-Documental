import React, { forwardRef } from "react";
import MaterialTable from "@material-table/core";
import { AddCircle, ArrowDownward, Check, ChevronLeft, ChevronRight, Clear, DeleteOutline, Edit, FilterList, FirstPage, LastPage, Remove, SaveAlt, Search, ViewColumn, Visibility } from "@mui/icons-material";
import { Paper } from "@mui/material";
import colors from "../../utils/colors.json";
import styles from "./global.module.scss";

const tableIcons = {
    Add: forwardRef((props, ref) => <AddCircle {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
        <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
        <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
    Visibility: forwardRef((props, ref) => <Visibility  {...props} ref={ref} />),
};

const Table = (props) => {
    const {
        columns,
        data,
        title,
        actions,
        editable,
        options,
        ...otherProps
    } = props;

    return (
        <MaterialTable
            components={{
                Container: props => <Paper className={styles.containerTable} elevation={0} {...props}>{props.children}</Paper>
            }}
            icons={tableIcons}
            title={title}
            columns={columns}
            data={data}
            actions={actions}
            editable={editable}
            options={{
                actionsColumnIndex: -1,
                pageSize: 7,
                pageSizeOptions: [7, 14, 21, 28],
                headerStyle: {
                    color: colors.primary,
                    fontWeight: 'bold',
                    whiteSpace: "nowrap"
                },
                ...options
            }}
            {...otherProps}
        />
    );
};

export default Table;