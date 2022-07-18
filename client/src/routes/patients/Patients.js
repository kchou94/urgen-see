import React from 'react';
import Table from '../../components/table/Table'
import { Link } from 'react-router-dom';



function Patients(props) {
    const cols = ["mrn", "first_name", "last_name", "sex", "date_of_birth", "phone_number", "email", "address_1", "address_2", "city", "state", "postal_code", "insurance_policy", "insurance_group", "plan_ID", "carrier.provider", "plan.name"];

    const rows = [
        [1, "Alex", "Alex", "F", "1990-01-01", "111-222-3333", "alex@alex.com", "1 1st Street", null, "New York City", "NY", "10010", "12345abc", "xyz", 1, "Empire BCBS", "HealthPlus"],
        [2, "Betty", "Betty", "MTF", "1980-01-01", "444-555-6666", "betty@betty.com", "2 2nd Street", "Unit 1A", "New York City", "NY", "10011", "67890def", "def", 2, "Aetna", "Bronze PPO"]
    ];
    return (
        <main>
            <header>
                <h1>Patients</h1>
            </header>
            <Link to="/patients/new">Register Patient</Link>
            <Table cols={cols} rows={rows} />
        </main >
    );
}

export default Patients;