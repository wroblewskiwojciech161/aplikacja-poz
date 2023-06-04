export function scrolltoId(id){
    const access = document.getElementById(id);
    access.scrollIntoView({behavior: 'smooth'}, true);
}