# MySQL Database Setup for Smartech Portfolio

This guide will help you set up the local MySQL database for the project request form.

## Prerequisites

1. **MySQL Server**: Install MySQL on your local machine
   - **Windows**: Download from [MySQL Official Website](https://dev.mysql.com/downloads/mysql/)
   - **macOS**: Use Homebrew: `brew install mysql`
   - **Linux**: Use package manager: `sudo apt-get install mysql-server`

2. **Start MySQL Service**
   - **Windows**: MySQL should start automatically after installation
   - **macOS**: `brew services start mysql`
   - **Linux**: `sudo systemctl start mysql`

## Database Setup Steps

### 1. Create Environment Variables

1. Copy the example environment file:
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`

2. Update the `.env.local` file with your MySQL credentials:
   \`\`\`env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_actual_mysql_password
   DB_NAME=smartech_portfolio
   DB_PORT=3306
   \`\`\`

### 2. Create Database and Table

1. **Option A: Using MySQL Command Line**
   \`\`\`bash
   mysql -u root -p < scripts/create-requests-table.sql
   \`\`\`

2. **Option B: Using MySQL Workbench or phpMyAdmin**
   - Open the `scripts/create-requests-table.sql` file
   - Copy and execute the SQL commands

### 3. Verify Setup

The script will create:
- Database: `smartech_portfolio`
- Table: `Requests` with columns:
  - `id` (Primary Key, Auto Increment)
  - `full_name` (VARCHAR 255, Required)
  - `email` (VARCHAR 255, Required)
  - `project_description` (TEXT, Required)
  - `specific_needs` (TEXT, Optional)
  - `created_at` (TIMESTAMP, Auto-generated)
  - `updated_at` (TIMESTAMP, Auto-updated)

### 4. Test the Connection

1. Start your Next.js development server:
   \`\`\`bash
   npm run dev
   \`\`\`

2. Navigate to the "Start Your Project" section on your website
3. Fill out and submit the form
4. Check your MySQL database to see if the data was inserted

## Troubleshooting

### Common Issues

1. **Connection Refused**
   - Make sure MySQL service is running
   - Check if the port (default 3306) is correct
   - Verify your credentials in `.env.local`

2. **Access Denied**
   - Double-check your MySQL username and password
   - Make sure the user has proper permissions

3. **Database Not Found**
   - Run the SQL script to create the database
   - Verify the database name in your `.env.local` file

### Viewing Submitted Requests

To view submitted project requests, you can use MySQL command line:

\`\`\`sql
USE smartech_portfolio;
SELECT * FROM Requests ORDER BY created_at DESC;
\`\`\`

Or use a GUI tool like MySQL Workbench, phpMyAdmin, or TablePlus.
