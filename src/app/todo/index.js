export class Todo {
    constructor(options = { priority: 1 }) {
        const { priority, text, dedline } = options;
        
        this.priority = priority;
        this.text = text;
        this.dedline = dedline;
        this.createDate = Date.now();
    }
}