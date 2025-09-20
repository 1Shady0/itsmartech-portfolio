import mysql from "mysql2/promise"

// Database connection configuration
const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "smartech_portfolio",
  port: Number.parseInt(process.env.DB_PORT || "3306"),
}

// Create connection pool for better performance
const pool = mysql.createPool({
  ...dbConfig,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

export async function executeQuery(query: string, params: any[] = []) {
  try {
    const [results] = await pool.execute(query, params)
    return results
  } catch (error) {
    console.error("Database query error:", error)
    throw error
  }
}

export async function insertRequest(data: {
  fullName: string
  email: string
  projectDescription: string
  specificNeeds: string
}) {
  const query = `
    INSERT INTO Requests (full_name, email, project_description, specific_needs)
    VALUES (?, ?, ?, ?)
  `

  const params = [data.fullName, data.email, data.projectDescription, data.specificNeeds || null]

  return await executeQuery(query, params)
}

export default pool
