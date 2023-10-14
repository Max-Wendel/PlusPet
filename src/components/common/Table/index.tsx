import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import BaseTableProps, { BaseColumn } from './types';
import { Box, Paper, TablePagination } from '@mui/material';
import React from 'react';
import TableIcon from '../TableIcon';
import OptionMenu from '../OptionsMenu';
import {getFormatedCPF, getGender} from './utils'
import "./style.css"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#CFCFCF',
        color: theme.palette.common.black,
        fontWeight: 'bolder'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(() => ({
    '&:nth-of-type(odd)': {
        backgroundColor: '#F6F5F5',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const serviceColumns: readonly BaseColumn[] = [
    { id: 'icon', label: '', align: 'center', minWidth: 50 },
    { id: 'pet_name', label: 'Nome do Pet', align: 'left', minWidth: 250 },
    { id: 'pet_tutor', label: 'Nome do Tutor', align: 'left', minWidth: 150 },
    { id: 'service', label: 'Serviço', align: 'left', minWidth: 150 },
    { id: 'status', label: 'Status', align: 'left', minWidth: 150 },
    { id: 'date', label: 'Data', align: 'center', minWidth: 150 },
    { id: 'button', label: '', align: 'left', minWidth: 10 },
];

const petColumns: readonly BaseColumn[] = [
    { id: 'icon', label: '', align: 'center', minWidth: 50 },
    { id: 'pet_name', label: 'Nome do Pet', align: 'left', minWidth: 250 },
    { id: 'pet_tutor', label: 'Nome do Tutor', align: 'left', minWidth: 150 },
    { id: 'specie', label: 'Éspecie', align: 'left', minWidth: 150 },
    { id: 'breed', label: 'Raça', align: 'left', minWidth: 150 },
    { id: 'gender', label: 'Sexo', align: 'center', minWidth: 150 },
    { id: 'button', label: '', align: 'right', minWidth: 30 },
];

const tutorColumns: readonly BaseColumn[] = [
    { id: 'pet_tutor', label: 'Nome', align: 'left', minWidth: 300 },
    { id: 'cpf', label: 'CPF', align: 'center', minWidth: 200 },
    { id: 'email', label: 'Email', align: 'center', minWidth: 200 },
    { id: 'button', label: '', align: 'right', minWidth: 30 },
];

const serviceOptions = ['Iniciar Atendimento', 'Finalizar Atendimento', 'Acessar Prontuário'];
const tutorOptions = ['Editar', 'Arquivar'];
const petOptions = ['Editar', 'Arquivar', 'Ver Prescrição'];
const rowsPerPageOptions = [10,25,50];

export default function BaseTable({
    rows,
    type
}: BaseTableProps) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPageOptions[0]);

    const handleChangePage = (event: unknown, newPage: number) => {
        event? event:null;
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const getIcon = (_row: any) => {
        return (
            <TableIcon
                gender={_row.gender ? _row.gender : ''}
                service={_row.service ? _row.service : ''}
                status={_row.status ? _row.status : ''}
            />
        )
    };

    const getColumns = () => {
        switch (type) {
            case 'pet':
                return petColumns;
            case 'service':
                return serviceColumns;
            case 'tutor':
                return tutorColumns;
        }
    };

    const getOptionMenu = () => {
        switch (type) {
            case 'pet':
                return (<OptionMenu options={petOptions}/>);
            case 'service':
                return (<OptionMenu options={serviceOptions}/>)
            case 'tutor':
                    return (<OptionMenu options={tutorOptions}/>)
        }

    }

    const getRows = (row: any) => {
        switch (type) {
            case 'pet':
                return (
                    <StyledTableRow key={row.id}>
                        <StyledTableCell component="th" scope="row">
                            {getIcon(row)}
                        </StyledTableCell>
                        <StyledTableCell align='left'>{row.pet_name}</StyledTableCell>
                        <StyledTableCell align="left">{row.pet_tutor}</StyledTableCell>
                        <StyledTableCell align="left">{row.specie}</StyledTableCell>
                        <StyledTableCell align="left">{row.breed}</StyledTableCell>
                        <StyledTableCell align="center">{getGender(row.gender)}</StyledTableCell>
                        <StyledTableCell align="right">{getOptionMenu()}</StyledTableCell>
                    </StyledTableRow>
                );
            case 'service':
                return (
                    <StyledTableRow key={row.id}>
                        <StyledTableCell component="th" scope="row">
                            {getIcon(row)}
                        </StyledTableCell>
                        <StyledTableCell align='left'>{row.pet_name}</StyledTableCell>
                        <StyledTableCell align="left">{row.pet_tutor}</StyledTableCell>
                        <StyledTableCell align="left">{row.service}</StyledTableCell>
                        <StyledTableCell align="left">{row.status}</StyledTableCell>
                        <StyledTableCell align="center">{row.date}</StyledTableCell>
                        <StyledTableCell align="right">{getOptionMenu()}</StyledTableCell>
                    </StyledTableRow>
                );
            case 'tutor':
                return (
                    <StyledTableRow key={row.id}>
                        <StyledTableCell component="th" scope="row">
                            {row.tutor_name}
                        </StyledTableCell>
                        <StyledTableCell align="center">{getFormatedCPF(row.tutor_cpf)}</StyledTableCell>
                        <StyledTableCell align="center">{row.tutor_email}</StyledTableCell>
                        <StyledTableCell align="right">{getOptionMenu()}</StyledTableCell>
                    </StyledTableRow>
                );
        }
    }

    const getEmptyRow = () =>{
        switch(type){
            case 'tutor':
                return (
                    <StyledTableRow key={'none'}>
                        <StyledTableCell/>
                        <StyledTableCell scope="row" align='center'>
                            Nenhum Resultado encontrado
                        </StyledTableCell>
                        <StyledTableCell/>
                        <StyledTableCell/>
                    </StyledTableRow>
                );
            case 'pet':
                return (
                    <StyledTableRow key={'none'}>
                        <StyledTableCell/>
                        <StyledTableCell/>
                        <StyledTableCell/>
                        <StyledTableCell scope="row" align='center'>
                            Nenhum Resultado encontrado
                        </StyledTableCell>
                        <StyledTableCell/>
                        <StyledTableCell/>
                        <StyledTableCell/>
                    </StyledTableRow>
                );
            case 'service':
                return (
                    <StyledTableRow key={'none'}>
                        <StyledTableCell/>
                        <StyledTableCell/>
                        <StyledTableCell/>
                        <StyledTableCell scope="row" align='center'>
                            Nenhum Resultado encontrado
                        </StyledTableCell>
                        <StyledTableCell/>
                        <StyledTableCell/>
                        <StyledTableCell/>
                    </StyledTableRow>
                );
        }
    }

    return (
        <Box>
            <TableContainer component={Paper}>
                <Table size='small' aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            {getColumns().map((column) => (
                                <StyledTableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </StyledTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows != null ?
                            rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => (getRows(row)))
                            :
                            getEmptyRow()
                        }
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={rowsPerPageOptions}
                    component="div"
                    count={rows? rows.length : 0}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
        </Box>
    );
}