import sql from 'mssql'

const dbSettings = {
    user : 'usr_administrador',
    password : 'NzARErBtAaoLN',
    server : 'localhost',
    database : 'comedorUV',
    options: {
        encrypt: true,
        trustServerCertificate: true
    },
}

export async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.error(error);
    }
}

