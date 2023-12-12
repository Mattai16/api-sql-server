import { NextResponse } from "next/server";
import { getConnection } from "../../../../database/connection";
import {sql} from 'mssql';

export async function GET(request, {params}){
    
    try {

        const pool = await getConnection();
        const request = pool.request();

        request.input('id_usuario', sql.Int , params.id);
        
        const result = await pool.request().execute('sps_get_usuarios');

        return NextResponse.json(result.recordset);
    

    } catch (error) {
        return NextResponse.json({
            message: error.message,
        },
        {
            status: 500,
        })
    }
}