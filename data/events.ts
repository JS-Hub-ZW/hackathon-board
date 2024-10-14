import { generateUUID } from "@/utils/general.utils";

  
const event =    {
      "id": "",
      "date": "2023-04-15",
      "time": "10:30",
      "name": "Iron Dome",
      "venue": "HIT Innovation Hub",
      "hosts": [
        {
          "name": "John Smith",
          "email": "john.smith@example.com"
        },
        {
          "name": "Jane Doe",
          "email": "jane.doe@example.com"
        }
      ],
      "sponsors": [
        {
          "name": "ABC Company",
          "website": "https://www.abc.com/"
        },
        {
          "name": "XYZ Inc.",
          "website": "https://www.xyz.com/"
        }
      ],
      "contacts": [
        {
          "name": "Joe Brown",
          "email": "joe.brown@example.com",
          "phone": "+1-555-1234"
        },
        {
          "name": "Sara Jones",
          "email": "sara.jones@example.com",
          "phone": "+1-555-5678"
        }
      ],
      "images": {
        "potrait":"https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/F315/production/_133592226_irondomeinaction.jpg.webp",
        "landscape": "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/F315/production/_133592226_irondomeinaction.jpg.webp"
      },
      "admission": "Free",
      "type": "community_event",
      "description": "This is a community event",
      "status": 1,
      "total_prizes": 600,
      "prizes": [
        {
          id: 1,
          amount: 300,
          name: "1st Prize",
          description: "Some descripiton here"
        },
        {
          id: 2,
          amount: 200,
          name: "2nd Prize",
          description: "Some descripiton here"
        },
        {
          id: 3,
          amount: 100,
          name: "2rd Prize",
          description: "Some descripiton here"
        }
      ]
    }
    

    const generateEvents = (count:number) => {
      let events = [];
      let actualCount = count /3

      // upcoming events
      for (let i = 0; i < actualCount; i++) { 
        let newEvent = {...event};
        newEvent.id = generateUUID()
        newEvent.status = 1;
        events.push(newEvent);
      }


        // ongoing events
      for (let i = 0; i < actualCount; i++) {
        let newEvent = {...event};
        newEvent.id = generateUUID()
        newEvent.status = 2;
        events.push(newEvent);
      }


        // past events
      for (let i = 0; i < actualCount; i++) {
        let newEvent = {...event};
        newEvent.id = generateUUID()
        newEvent.status = 3;
        events.push(newEvent);
      }
      return events;
    }


 let events = generateEvents(60);   

    
    
export default events;