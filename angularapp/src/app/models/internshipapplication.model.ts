import { Internship } from "./internship.model";

export interface InternshipApplication
{
    InternshipApplicationId?:number;
    UserId:number;
    InternshipId:number;
    UniversityName:string;
    DegreeProgram:string;
    Internship?: Internship;
    Resume:string;
    LinkedInProfile?:string;
    ApplicationStatus:string;
    ApplicationDate:Date;

}