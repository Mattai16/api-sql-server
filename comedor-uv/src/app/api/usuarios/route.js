import { NextResponse } from "next/server";
import {getConnection} from '../../../database/connection';

export async function GET(){
    
    try {

        const pool = await getConnection();
        
        const result = await pool.request().execute('sps_get_usuarios');

        const registros = result.recordset;
        return NextResponse.json(registros)

    } catch (error) {
        return NextResponse.json({
            message: error.message,
        },
        {
            status: 500,
        })
    }
}