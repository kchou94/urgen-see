import React from 'react';
import { Link } from 'react-router-dom';
import Table from '../../components/table/Table';

import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';

import ErrorMessage from '../../components/ErrorMessage';

const axios = require('axios').default;

function Carriers(props) {
    const [rows, setRows] = React.useState(null);
    const [loaded, setLoaded] = React.useState(false);
    const [error, setError] = React.useState(false);
    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/carriers`)
            .then((res) => {
                setLoaded(true);
                setRows(res.data);
            })
            .catch((err) => {
                setError(true);
            });
    }, []);

    return (
        <>
            <header>
                <h1>Insurance Carriers</h1>
            </header>
            <main>
                <Stack direction="row" spacing="1em" sx={{ mb: 2 }}>
                    <Button component={Link} to="/carriers/new" variant="outlined" endIcon={<PostAddOutlinedIcon />}>
                        Add Carrier
                    </Button>
                </Stack>
                {
                    !loaded &&
                    <h3>Loading table...</h3>
                }
                {
                    error &&
                    <ErrorMessage />
                }
                {
                    loaded &&
                    <Table rows={rows} updatable={true} pKey="carrier_ID" />
                }
            </main>
        </>

    );

}

export default Carriers;