
const DISCIPLINE_KEY = 'discipline'
const DROPS_KEY = 'drpos'

const lo = {

    allDisciplines() {
        return ['freefly', 'crw', 'swoop']
    },

    allDrops() {
        return ['MoliZone', 'Pullout', 'Reggio']
    },

    ls: {

        allDisciplines() {
            return this.read(DISCIPLINE_KEY) || [];
        },

        allDrops(){
            return this.read(DROPS_KEY) || [];
        },

        saveDispiplina(d){
            const discipline = this.allDisciplines();
            this.write(DISCIPLINE_KEY,[...discipline,d])
        },

        saveDispipline(discipline){
            this.write(DISCIPLINE_KEY,discipline);
        },

        saveDrop(d){
            const drops = this.allDrops();
            this.write(DROPS_KEY,[...drops,d])
        },

        saveDrops(drops){
            this.write(DROPS_KEY,drops)
        },

        write(key,obj){
            localStorage.setItem(key,JSON.stringify(obj));
        },

        read(key){
            return JSON.parse(localStorage.getItem(key));
        }
    }
}

export default lo;