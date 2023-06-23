import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { collection, getDocs } from "firebase/firestore";
import { db } from '../util/firebase';

export async function getStaticProps() {
  return { props: {} }
}

export default function DatabasePage() {
  const [monster, setMonster] = useState([]);

  useEffect(() => {
    fetchMonster();
  }, [])

  const fetchMonster = async () => {
    await getDocs(collection(db, "monster")).then((querySnapshot) => {
      const res = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setMonster(res);
    })
  }

  return (
    <div>
      <div className="card">
        <DataTable
          value={monster}
          showGridlines
          stripedRows
          // paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]}
          sortField="Lv" sortOrder={1} removableSort
          scrollable scrollHeight="600px"
          size="small" resizableColumns
        >
          <Column field="Name" header="Name" sortable frozen></Column>
          <Column field="Lv" header="Lv." sortable></Column>
          <Column field="Type" header="Type" sortable></Column>
          <Column field="Property" header="Property" sortable></Column>
          <Column field="Size" header="Size" sortable></Column>
          <Column field="HP" header="HP" sortable></Column>
          <Column field="ATK" header="ATK" sortable></Column>
          <Column field="DEF" header="DEF" sortable></Column>
          <Column field="HIT" header="HIT" sortable></Column>
          <Column field="MATK" header="MATK" sortable></Column>
          <Column field="MDEF" header="MDEF" sortable></Column>
          <Column field="FLEE" header="FLEE" sortable></Column>
          <Column field="Equipment_Card" header="Equipment Card" sortable></Column>
          <Column field="Card" header="Card" sortable></Column>
          <Column field="Card_In_Book" header="Card_In_Book" sortable></Column>
        </DataTable>
      </div>
    </div>
  )
}
