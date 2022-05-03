import React from "react";
import { Container, Table } from "react-bootstrap";


export const Users = () => { 
   
    return(
      <Container>
       <Table>
        <table class="table table-dark table-hover">
         <thaed>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>First Name</th>
                <th>First Name</th>
            </tr>
        </thaed>
        <tbody>
            <tr>
                <td>1st</td>
                <td>Otto</td>
                <td>Shnider</td>
            </tr>
            <tr>
                <td>2d</td>
                <td>Otto</td>
                <td>Shnider</td>
            </tr>
            <tr>
                <td>3d</td>
                <td>Otto</td>
                <td>Shnider</td>
            </tr>
          </tbody>
        </table>
      </Table>
    </Container>
)};