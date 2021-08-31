# MVP
# Andawan App

![Frontend]

A platform for natives in Sabah to connect with lawyers/experts in their traditional land dispute.

## Motivation

**FOR** natives **WHO** want to find lawyers/experts **THE** product **IS** a platform **THAT** connect natives to lawyers/experts **UNLIKE** having the natives search and contact lawyers/experts one by one if they(Lawyers/experts) could help them(natives) **OUR PRODUCT** can eduacte/inform natives and society on native customary law and update ongoing court cases involving native land.

**FOR** the lawyers/experts **WHO** wants to give back to the community and wants to help natives with their expertise; **THE** product **IS** a platform **THAT** connect lawyers/experts to natives that needed legal or advise on their land rights **UNLIKE** having to wait for the natives to reach them personally which will take time and resources**OUR PRODUCT** helps lawyers/experts to share their knowledge and give back to community and enhance their reputation.

## Features

- Form for the natives to convey their questions
- Home pages - slide shows of images related to natives self-determination on their land journey
- Lawyers to view forms filled by Natives

## Feature Wish List

### Nice To Have Features
- Donation page - To support/fund ongoing native customary land cases
- Lawyers/Experts Portfolio/Profile page
- Native customary rights case database, information and update on ongoing native customary cases 
- Lawyers/Expert Login 

## Tech / Framework

Built with React.Js (Bootsrap,Router), Node/Express.Js, MySQL, Postman(Testing database)

## Database 
- databaseTable.jpg


## API Routes Plan

URI | HTTP Method | Description
--- | ----------- | -----------

/api/natives | GET/ POST/DELETE | Get all forms/ Add a form /Delete a form

## User Flow Diagram
-flowchart.jpg

## Architecture Drawing

## Setup

### Dependencies

- Run `npm install` in project directory. This will install server-related dependencies such as `express`
- `cd client` and run `npm install`. This will install client dependencies

### Database Prep

- Access the MySQL interface in your terminal by running `mysql -u root -p`
- Create a new database called Andawan: `create database Andawan;`
- Create a `.env` file in project directory and add

```bash
  DB_NAME=Andawan
  DB_PASS=YOURPASSWORD
  JWT_SECRET=YOURSECRET
```

- Replace `YOUR_PASSWORD` with your actual password



### Run Your Development Servers

- Run `npm start` in project directory to start the Express server on port 5000
- `cd client` and run `npm start` to run your development build. The app will run on `http://localhost:5000` as the default port.

## Reference



## Notes

_This is a student project that was created at [CodeOp](http://CodeOp.tech), a full stack development bootcamp in Barcelona and [Rebound.Asia](https://www.rebound.asia/breakthrough), by TechSprint Academy (Malaysia’s first women only coding academy)._
