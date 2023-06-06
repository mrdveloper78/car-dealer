import React, { useContext, useEffect, useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";

import { Box, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { ProductContext } from "../Stores/Context/ProductContext";



const data = [
    {
        price: "$1000",
        name: "Laptop",
    },
    {
        price: "$500",
        name: "Phone",
    },
];

const CartProductTable = () => {



    // data
    const { state, removeItem } = useContext(ProductContext);
    const { selectedItems } = state;

    useEffect(() => { setTableData(selectedItems) }, [removeItem]);

    const columns = useMemo(
        () => [
            // {
            //     accessorKey: "name",
            //     header: "Name",
            // },
            // {
            //     accessorKey: "price",
            //     header: "Price",
            // },
            {
                accessorKey: "car",
                header: "Company",
            },
            {
                accessorKey: "price",
                header: "Price",
            },
            {
                accessorKey: "car_model",
                header: "Model",
            },
        ],
        []
    );

    // manage the table data state
    const [tableData, setTableData] = useState(selectedItems);

    return (
        <MaterialReactTable
            columns={columns}
            data={tableData}
            state={{ isLoading: false }}
            enableRowActions
            renderRowActions={({ row }) => (
                <Box>
                    <IconButton onClick={() => console.info(row.original)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => removeItem(row.original)}>
                        <DeleteIcon />
                    </IconButton>
                </Box>
            )}
        />
    )
}


export default CartProductTable;
