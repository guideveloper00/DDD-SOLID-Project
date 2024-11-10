export class Client {
    constructor(
      public readonly id: string,
      public name: string,
      public email: string
    ) {
      this.validateEmail();
    }
  
    private validateEmail() {
      if (!this.email.includes('@')) {
        throw new Error('Invalid email');
      }
    }
  
    changeName(newName: string) {
      if (!newName) {
        throw new Error('Name cannot be empty');
      }
      this.name = newName;
    }
  }
  