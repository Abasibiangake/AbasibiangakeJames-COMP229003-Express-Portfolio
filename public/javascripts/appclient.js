// Filename: appclient.js
// Student: Abasibiangake James
// StudentId: 301208739
// Date: Jun 22, 2022

console.log('app script is working.');

if(getTitle == "Contact List")
{
    let deleteButtons = document.querySelectorAll('.btn-danger');
        
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure?")) 
            {
                event.preventDefault();
            }
        });
    }
}

