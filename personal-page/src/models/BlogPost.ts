export class BlogPost {
    id: number;
    title: string;
    content: string;
    date: string;
  
    constructor(id: number, title: string, content: string, date: string) {
      this.id = id;
      this.title = title;
      this.content = content;
      // If the date is passed as a string (from API), convert it to a Date object
      this.date = date;
    }
  
    
  }