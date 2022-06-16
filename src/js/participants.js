
export let participants = []


export var total = 0 ;

function addParticipant(name){
    participants.push({ name: name, id: total})
    total++
}
export function participantsDefault(){
    addParticipant("Tania")
    addParticipant("Nerea")
    addParticipant("Marina")
    addParticipant("Marta")
    addParticipant("Viviana")
    addParticipant("Vero")
    addParticipant("MaryBel")
    addParticipant("Cris")
    addParticipant("Paz")
    addParticipant("Juliet")
    addParticipant("Esther")
    addParticipant("Iria")
    addParticipant("Laura")
    addParticipant("Sara")
}
participantsDefault ()
console.log(participants)
