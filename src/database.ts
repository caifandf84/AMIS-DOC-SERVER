import mysql, { Pool } from 'promise-mysql';
import keys from './keys'

const pool = mysql.createPool(keys.database);

/*let pool : any;

const getPool = async () => {
    if (pool) {
     console.info('Return existing pool connection');
     return pool;
    }
    pool = await mysql.createPool(keys.database);
    console.info('Return new pool connection');
    return pool;
   }
*/
/*pool.then(connection =>{
        console.log("Base de Datos conectado");
    }).catch(error =>{
        console.log("Error al conectar la base de datos",error);
    });*/

export default pool;