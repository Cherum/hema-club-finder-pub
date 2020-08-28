import React from 'react';
import './App.css';
import { Weapons, HemaGroup } from './types'
import { groups } from './Data'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';

function App() {
  return (
    <div className="App">
      HEMA Groups
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Weapons</TableCell>
              <TableCell>Websites</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {groups.map((group: HemaGroup, index: number) => (
              <TableRow hover>
                <TableCell>{index}</TableCell>
                <TableCell>{group.name}</TableCell>
                <TableCell>{group.city}, {group.county}</TableCell>
                <TableCell>{group.primaryWeapons}</TableCell>
                <TableCell>
                  {group.websites.map((website: string) => (
                    <div><a href={website}>{website}</a></div>
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
