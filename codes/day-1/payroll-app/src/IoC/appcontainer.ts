import "reflect-metadata"
import { Container } from "inversify";
import { EmployeeManager } from "../services/employeemanager";
import { TOKENS } from "../config/tokens";
import { Manager } from "../services/abstraction/manager";
import { Employee } from "../models/employee";


const appContainer = new Container()
appContainer.bind<Manager<Employee, number>>(TOKENS.EMPLOYEE_SERVICE_MANAGER).to(EmployeeManager)
export { appContainer }