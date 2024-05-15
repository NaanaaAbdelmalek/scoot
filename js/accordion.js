// Accordion manipulation that allows to to show and collapse the panels 

const AccordionHeaderG1 = document.querySelectorAll("#accordion-header-g1");
const AccordionHeaderG2 = document.querySelectorAll("#accordion-header-g2");


function showHideAccordion(accordion){

    accordion.forEach(element => {
        element.addEventListener("click", ()=>{
            if(element.getAttribute("aria-expanded") == "true"){
                element.setAttribute("aria-expanded", "false");
            } else{
                element.setAttribute("aria-expanded", "true");
                collapseOtherAccordion(accordion, element);
            }
        }) 
    });
}

function collapseOtherAccordion(accordion,index){
    accordion.forEach((element) =>{
        if(element != index){
            element.setAttribute("aria-expanded", "false");
        }
    });
    
}

showHideAccordion(AccordionHeaderG1);
showHideAccordion(AccordionHeaderG2);

