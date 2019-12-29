export class Task {
  constructor(description="", expectedPomodoros=1) {
    this.description = description;
    this.expectedPomodoros = expectedPomodoros;
    this.actualPomodoros = 0;
  }
}
