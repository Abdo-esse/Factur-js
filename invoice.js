document.addEventListener('DOMContentLoaded', function() {

    // add initital total calculation first 
        //here
    
    // these are selection helpers
    const invoiceTable = document.getElementById('invoiceTable').getElementsByTagName('tbody')[0];
    const invoiceTotal = document.getElementById('invoiceTotal');
    let quantite = document.querySelectorAll('.quantity')[0].value;
    let quantite1 = document.querySelectorAll('.quantity')[1].value;
    let quantite2 = document.querySelectorAll('.quantity')[2].value;
    let priec = document.querySelectorAll('.unitPrice')[0].value;
    let priec1 = document.querySelectorAll('.unitPrice')[1].value;
    let priec2 = document.querySelectorAll('.unitPrice')[2].value;
    
    
    
    // console.log(priec );


   
    
    
    // This function updates the total amount in each row ( item price * Qte )
    function updateItemTotal(row) {
       
    }


    // This function updates the total amount of the invoice (sum all Item totals)
    function updateInvoiceTotal() {
       
    }


    // Ajouter un nouveau item 
    function addNewItem() {
        

    }


    // If you finish the above functions, consider adding a delete button
 
});
