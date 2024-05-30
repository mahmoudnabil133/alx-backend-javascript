export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
     * @param {String | undefined} name
     */
  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  /**
     * @param {any} length
     */
  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  /**
     * @param {any[] | undefined} students
     */
  set students(students) {
    if (students instanceof Array) {
      if (students.filter((st) => typeof st !== 'string').length > 0) {
        throw new TypeError('Students must be an array of strings');
      }
      this._students = students;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get student() {
    return this._students;
  }
}
