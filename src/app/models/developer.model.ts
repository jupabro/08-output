import { Skill } from "./skill.model"

export interface Developer {
  lastName: string,
  firstName: string,
  age: number,
  gender: string,
  bio: string,
  skills: Skill[]
}