import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect, useState} from "react";
import Owner from "./owner";

const API = `http://${window.location.hostname}:8080/api`

export default function Owners() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <OwnerTable/>
    </div>
  );
}

function OwnerTable() {
  const [owners, setOwners] = useState();
  const [owner, setOwner] = React.useState(false);

  const handleOpen = (owner) => {
    return () => {
      setOwner(owner)
    }
  };

  const handleClose = () => {
    setOwner(null)
  };

  useEffect(() => {
    fetch(`${API}/owners`)
      .then(res => res.json())
      .then(owners => setOwners(owners))
  }, []);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">Country</TableCell>
              <TableCell align="right">Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {owners && owners.content.map(owner => (
              <TableRow key={owner.id} onClick={handleOpen(owner)}>
                <TableCell align="right">{owner.firstName} {owner.lastName}</TableCell>
                <TableCell align="right">{owner.address}</TableCell>
                <TableCell align="right">{owner.city}</TableCell>
                <TableCell align="right"><img style={{width: "30px"}} src={owner.country} alt="country" /></TableCell>
                <TableCell align="right">{owner.telephone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {owner && <Owner owner={owner} onClose={handleClose} />}
    </div>
  );
}