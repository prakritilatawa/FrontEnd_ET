var country = document.getElementById('country')
var startdate = document.getElementById('startdate')
var enddate = document.getElementById('enddate')

var form = document.getElementById('i1')
form.addEventListener('submit',(e)=>{
   
    if(country.value===''|| country.value== null){
        alert('Please enter Country name');
        return false;
        e.preventDefault();

    }
    if(startdate.value===''|| startdate.value==null){
        alert('Please enter the start date');
        return false;
        e.preventDefault();
        
    }
    if(enddate.value===''|| enddate.value==null){
        alert('Please enter the end date');
        return false;
        e.preventDefault();
    }

})