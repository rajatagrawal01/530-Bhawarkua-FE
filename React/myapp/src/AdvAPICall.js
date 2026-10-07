import { useState, useEffect } from "react"

export default function AdvAPICall() {
    const [users, setUsers] = useState([])
    const [loading,setLoading]=useState(true)

    const url = 'https://jsonplaceholder.typicode.com/users'

    const fetchAPI = async () => {
        try {
            const res = await fetch(url)
            const data = await res.json();
            setUsers(data);
            setLoading(false)
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchAPI()
    }, [])
    
    if(loading){
        return(
            <h1>Loading</h1>
        )
    }

    return (
        <div style={styles.container}>
            <h2>User Directory</h2>
            <div style={styles.tableWrapper}>
                <table style={styles.table}>
                    <thead>
                        <tr style={styles.thTr}>
                            <th style={styles.th}>ID</th>
                            <th style={styles.th}>Name</th>
                            <th style={styles.th}>Username</th>
                            <th style={styles.th}>Email</th>
                            <th style={styles.th}>Address</th>
                            <th style={styles.th}>Phone</th>
                            <th style={styles.th}>Website</th>
                            <th style={styles.th}>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} style={styles.tr}>
                                <td style={styles.td}>{user.id}</td>
                                <td style={styles.td}><strong>{user.name}</strong></td>
                                <td style={styles.td}>@{user.username}</td>
                                <td style={styles.td}>
                                    <a href={`mailto:${user.email}`} style={styles.link}>{user.email}</a>
                                </td>
                                <td style={styles.td}>
                                    {user.address.suite}, {user.address.street}, {user.address.city}
                                </td>
                                <td style={styles.td}>{user.phone}</td>
                                <td style={styles.td}>
                                    <a href={`http://${user.website}`} target="_blank" rel="noreferrer" style={styles.link}>
                                        {user.website}
                                    </a>
                                </td>
                                <td style={styles.td}>
                                    <strong>{user.company.name}</strong><br />
                                    <span style={styles.subText}>{user.company.catchPhrase}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        color: '#333',
    },
    tableWrapper: {
        overflowX: 'auto',
        background: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        textAlign: 'left',
        minWidth: '900px',
    },
    thTr: {
        backgroundColor: '#2c3e50',
        color: '#ffffff',
    },
    th: {
        padding: '12px 15px',
        fontSize: '13px',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
    },
    tr: {
        borderBottom: '1px solid #e0e0e0',
    },
    td: {
        padding: '12px 15px',
        fontSize: '14px',
    },
    link: {
        color: '#3498db',
        textDecoration: 'none',
    },
    subText: {
        fontSize: '12px',
        color: '#666',
    }
};