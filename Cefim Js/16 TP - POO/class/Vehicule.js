class  Vehicule {
    constructor(nombreRoues,couleur,vitesse,position){
        this.nombreRoues = nombreRoues;
        this.couleur = couleur;
        this.vitesse = Math.abs(vitesse);
        this.position = 0;

    }

    rouler() {
        this.position += this.vitesse ;
    }
    doubler(v2){
        while (v2.position>=this.position){

        
       this.rouler();
    }
    }
}



