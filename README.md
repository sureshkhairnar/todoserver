# todoserver
Backend for todo task management app

# Backend Node.js Server

## Introduction
This is the backend server application built using Node.js and Express.

## Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/sureshkhairnar/todoserver.git
cd todoserver

# Install dependencies
npm install

# Run the Application
node server

# API Endpoints
GET /api/tasks: Retrieve all tasks
POST /api/tasks: Create a new task
PUT /api/tasks/:id: Update a task
DELETE /api/tasks/:id: Delete a task
DELETE /api/tasks: Delete all tasks

# note
I have used mongodb compass for mongo and used mongoose driver for connection


