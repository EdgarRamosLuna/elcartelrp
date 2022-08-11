import "bootstrap/dist/css/bootstrap.css";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import { Col, Row, Table } from "react-bootstrap";
import axios from 'axios';
import {
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  TableBody,
  TableHeader
} from "react-bs-datatable";


// Create table headers consisting of 4 columns.
const STORY_HEADERS = [
  {
    prop: "title",
    title: "Nombre de la normativa",
    isFilterable: true,
    isSortable: true
  },
  {
    prop: "color",
    title: "Color",
    isFilterable: true,
    isSortable: true
  },
  {
    prop: "btnActions",
    title: ""
  },
];

// Then, use it in a component.
export default function CatTable(props) {
  const {editBtn, newData} = props;
  const [dataNor, setDataNor] = useState([]);
  useEffect(() => {
        axios.get('/api/normativas/getdata').then(res =>{
           // console.log(res.data);
            setDataNor(res.data);
        }).catch(err =>{
            console.log(err);
        });
  }, [newData]);

  const data = [{}];
  const borrarCat = (idcat) =>{
    console.log(idcat);
    alert(`categoria con el id ${idcat} borrada`);
  }
  for (let i = 0; i < dataNor.length; i++) {
    
    const idnor = dataNor[i].idnor;
    const title = dataNor[i].title;
    const content = dataNor[i].content;
    const color = dataNor[i].color;
    const btnActions = <div className="btnActionsCont"><button className="btnEdit" type="button" onClick={()=> editBtn(idnor)}><i class="fa-solid fa-pen-to-square"></i></button><button type="button" onClick={() => borrarCat(idnor)} className="btnDel"><i class="fa-solid fa-trash"></i></button></div>;
    data.push({"title":title, "content":content, "color":color,"btnActions":btnActions});
  }
  data.shift();
  return (
    <DatatableWrapper
      body={data}
      headers={STORY_HEADERS}
      
      paginationOptionsProps={{
        initialState: {
          rowsPerPage: 10,
          options: [5, 10, 15, 20]
        }
      }}
    >
      <Row className="mb-4 p-2">
        <Col
          xs={12}
          lg={4}
          className="d-flex flex-col justify-content-end align-items-end"
        >
          <Filter />
        </Col>
        <Col
          xs={12}
          sm={6}
          lg={4}
          className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0"
        >
        </Col>
        <Col
          xs={12}
          sm={6}
          lg={4}
          className="d-flex flex-col justify-content-end align-items-end"
        >
          <Pagination />
        </Col>
      </Row>
      <Table >
        <TableHeader />
        <TableBody />
      </Table>
    </DatatableWrapper>
  );
}
