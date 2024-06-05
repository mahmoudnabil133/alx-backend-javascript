interface Teacher{
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [propName: string]: any
}
interface Director extends Teacher {
  numberOfReports: number
}

const printTeacher = (firstName:string, lastName:string) : string => {
  return `${firstName.charAt(0)}. ${lastName}`
}

class StudentClass {
  firstName:String;
  lastName:String;
  constructor(firstName:string, lastName:string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework():string{
    return `Currently working`
  }
  desplayName():string{
    return `${this.firstName}`
  }
}
