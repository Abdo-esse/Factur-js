document.addEventListener('DOMContentLoaded', function() {

    // add initital total calculation first 
        //here
    
    // these are selection helpers
    const invoiceTable = document.getElementById('invoiceTable').getElementsByTagName('tbody')[0];
    const invoiceTotal = document.getElementById('invoiceTotal');
    let quantite = document.querySelectorAll('.quantity')[0].value;
    let priec = document.querySelectorAll('.unitPrice')[0].value;
    
    
    let X = document.getElementById("bnt");

     
    
    // console.log(priec );


   
    
    
    // This function updates the total amount in each row ( item price * Qte )
    // quantite.onchange = function (ev) {
    
        
        
       
    // }


    // This function updates the total amount of the invoice (sum all Item totals)
    function updateInvoiceTotal() {
        let Y;
        Y = priec * quantite;
        console.log(Y);
        
        X.textContent = Y;
    }


    // Ajouter un nouveau item 
    function addNewItem() {
        

    }


    // If you finish the above functions, consider adding a delete button
 
});
