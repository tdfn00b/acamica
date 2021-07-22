//clase Estudiante y luego crear varios objetos que representen a tus compañeros/as.

class Trainees {
    constructor(fname, sname, country) {
        this.fname = fname;
        this.sname = sname;
        this.country = country;
    }
        
    introduccion() {
        return 'Mi nombre es ' + this.fname + ' ' + this.sname + 'y soy de ' + this.country + '.';
    }

}

let student1 = new Trainees("David","Guerrero","Argentina");

console.log(student1.introduccion())