function showSectionById(id){
    // hide all the sections
    document.getElementById('donation').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');
   
    
    // show the section with the provide id as parameter
    document.getElementById(id).classList.remove('hidden');
}