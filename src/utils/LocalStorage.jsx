const employee = [
  {
      "id": 1,
      "firstname": "Arjun",
      "email": "e@x.com",
      "password": "123",
      "taskCount": { "active": 1, "newTask": 1, "completed": 0, "failed": 0 },
      "tasks": [
          {
              "taskTitle": "Prepare Sales Report",
              "taskDescription": "Compile the sales report for Q3.",
              "taskDate": "2024-11-18",
              "category": "Sales",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          },
          {
              "taskTitle": "Team Meeting",
              "taskDescription": "Discuss project timelines and deliverables.",
              "taskDate": "2024-11-19",
              "category": "Meetings",
              "active": false,
              "newTask": true,
              "completed": false,
              "failed": false
          }
      ]
  },
  {
      "id": 2,
      "firstname": "Priya",
      "email": "employee2@example.com",
      "password": "123",
      "taskCount": { "active": 2, "newTask": 1, "completed": 1, "failed": 0 },
      "tasks": [
          {
              "taskTitle": "Client Follow-up",
              "taskDescription": "Follow up with client X regarding their feedback.",
              "taskDate": "2024-11-18",
              "category": "Client Relations",
              "active": true,
              "newTask": false,
              "completed": true,
              "failed": false
          },
          {
              "taskTitle": "Update Documentation",
              "taskDescription": "Revise the user manual for software Y.",
              "taskDate": "2024-11-20",
              "category": "Documentation",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          },
          {
              "taskTitle": "Organize Team Lunch",
              "taskDescription": "Plan and book a venue for the team lunch.",
              "taskDate": "2024-11-22",
              "category": "Team Events",
              "active": false,
              "newTask": true,
              "completed": false,
              "failed": false
          }
      ]
  },
  {
      "id": 3,
      "firstname": "Rohan",
      "email": "employee3@example.com",
      "password": "123",
      "taskCount": { "active": 2, "newTask": 1, "completed": 0, "failed": 1 },
      "tasks": [
          {
              "taskTitle": "Code Review",
              "taskDescription": "Review pull requests for project Z.",
              "taskDate": "2024-11-18",
              "category": "Development",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          },
          {
              "taskTitle": "Bug Fixing",
              "taskDescription": "Fix priority bugs reported in sprint 5.",
              "taskDate": "2024-11-19",
              "category": "Development",
              "active": false,
              "newTask": true,
              "completed": false,
              "failed": true
          },
          {
              "taskTitle": "Test Deployment",
              "taskDescription": "Deploy and test the staging environment.",
              "taskDate": "2024-11-20",
              "category": "Testing",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          }
      ]
  },
  {
      "id": 4,
      "firstname": "Neha",
      "email": "employee4@example.com",
      "password": "123",
      "taskCount": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 },
      "tasks": [
          {
              "taskTitle": "Prepare Presentation",
              "taskDescription": "Create slides for the upcoming project demo.",
              "taskDate": "2024-11-18",
              "category": "Presentation",
              "active": true,
              "newTask": false,
              "completed": true,
              "failed": false
          },
          {
              "taskTitle": "Budget Review",
              "taskDescription": "Analyze Q4 budget allocation.",
              "taskDate": "2024-11-20",
              "category": "Finance",
              "active": false,
              "newTask": true,
              "completed": false,
              "failed": false
          }
      ]
  },
  {
      "id": 5,
      "firstname": "Ananya",
      "email": "employee5@example.com",
      "password": "123",
      "taskCount": { "active": 2, "newTask": 1, "completed": 0, "failed": 0 },
      "tasks": [
          {
              "taskTitle": "Inventory Check",
              "taskDescription": "Perform an audit of current inventory levels.",
              "taskDate": "2024-11-18",
              "category": "Operations",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          },
          {
              "taskTitle": "Vendor Negotiations",
              "taskDescription": "Negotiate terms with vendor A for new supplies.",
              "taskDate": "2024-11-21",
              "category": "Procurement",
              "active": false,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "taskTitle": "Safety Training",
              "taskDescription": "Organize and oversee safety training for staff.",
              "taskDate": "2024-11-22",
              "category": "Training",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          }
      ]
  }
];

const admin = [
  {
      "id": 1,
      "firstname": "Vikram",
      "email": "admin@example.com",
      "password": "123"
  }
];


  export const setLocalStorage = ()=>{
    localStorage.setItem('employee',JSON.stringify(employee))
    localStorage.setItem('admin',JSON.stringify(admin))
  }
  export const getLocalStorage = ()=>{
    const employee = JSON.parse(localStorage.getItem('employee'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employee,admin};

  }