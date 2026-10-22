import 'dotenv/config'
import { pool } from '../db.js'

try {
    await pool.query('DROP TABLE IF EXISTS grades, courses, students CASCADE;')
    console.log('Tablas eliminadas')
} catch (error) {
    console.error('Error al eliminar tablas: ', error)
    process.exitCode = 1
} finally {
    await pool.end()
}