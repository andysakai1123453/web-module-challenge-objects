const greatWhiteShark = {
    myKingdom: 'Anamalia',
    myPhylum: 'Chordata',
    myClass: 'Chondrichthyes',
    myOrder: 'Lamniformes',  
    example: 'ssssss',
    esssss: 'ssssss0',
    ssssss1: 'ssssss',
    ssssss2: 'sssssss',
    ssssss3: 'sssssss',

    getScientificName: function(){
        scientificName = this.myclass + ' ' +this.myKingdom;
        return(scientificName);
    }
 
}

console.log(greatWhiteShark)

greatWhiteShark.getScientificName();

