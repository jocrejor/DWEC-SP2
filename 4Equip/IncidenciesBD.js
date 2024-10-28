const database = {
    tables: {
      Incident: {
        columns: [
          { name: "incident_id", type: "INT", attributes: ["AUTO_INCREMENT", "PRIMARY KEY"] },
          { name: "operator_id", type: "INT", attributes: ["FOREIGN KEY", "REFERENCES User(user_id)"] },
          { name: "description", type: "TEXT" },
          { name: "created_at", type: "TIMESTAMP", default: "CURRENT_TIMESTAMP" }
        ],
        data: [
          {
            incident_id: "0",
            operator_id: "3",
            description: "Este producte esta trencat",
            created_at: "CURRENT_TIMESTAMP"
          },
          {
            incident_id: "1",
            operator_id: "6",
            description: "El producte esta desaparegut",
            created_at: "CURRENT_TIMESTAMP"
          },
          {
            incident_id: "2",
            operator_id: "7",
            description: "El prodcute té el soroll distorsionat",
            created_at: "CURRENT_TIMESTAMP"
          },
          {
            incident_id: "4",
            operator_id: "8",
            description: "La pantalla de prodcute no funciona",
            created_at: "CURRENT_TIMESTAMP"
          },
          {
            incident_id: "5",
            operator_id: "9",
            description: "La batería del producte es descarga ràpidament",
            created_at: "CURRENT_TIMESTAMP"
          }
        ]
      }
    }
  };
 
 
  
  
