
import ColuLibrary from "../Colu";

class ManagerLibrary{
  constructor() {
    console.log("build ManagerLibrary")
  }

   GetDefault(){
     return new ColuLibrary();

   }
}

export default ManagerLibrary;
