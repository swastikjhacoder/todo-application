let designcl = ['work','Personal','Claeaning','Otheres'] //creating class for implementing design to different category 
$(document).ready(function(){

    let categorys = document.getElementsByClassName('catesec'); // getting all the class name category 
        for(let i=0;i<categorys.length;i++){ // looping in the  categorys to find the which categry class belongs and implement according sesign check home.css to get the color of eact section
            if(categorys[i].innerHTML.trim()=='Work'){ 
               categorys[i].classList.add(designcl[0])
               categorys[i].classList.add('commonClass')
            }
            else if(categorys[i].innerHTML.trim()=='Personal'){
                categorys[i].classList.add(designcl[1])
                categorys[i].classList.add('commonClass')
            }else if(categorys[i].innerHTML.trim()=='Claeaning'){
                categorys[i].classList.add(designcl[2])
                categorys[i].classList.add('commonClass')
            }else if(categorys[i].innerHTML.trim()=='Otheres'){
                categorys[i].classList.add(designcl[3])
                categorys[i].classList.add('commonClass')
            }
        }
});