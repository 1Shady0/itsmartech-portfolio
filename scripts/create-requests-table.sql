-- Create the Requests table for project submissions
CREATE DATABASE IF NOT EXISTS smartech_portfolio;

USE smartech_portfolio;

CREATE TABLE IF NOT EXISTS Requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    project_description TEXT NOT NULL,
    specific_needs TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Add indexes for better performance
CREATE INDEX idx_email ON Requests(email);
CREATE INDEX idx_created_at ON Requests(created_at);
