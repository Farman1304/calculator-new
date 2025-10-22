    var recData = document.getElementById ('digits');
    var result = document.getElementById ('result');

    function getData (data) {

      if(result.value === 'Error') {
        // deleteValue ()
        recData.value = recData.value.slice (0 , -1);
        result.value = '';
    }
    recData.value += data;

        

    }
        console.log(recData.value)


        function clearData () {

            recData.value= '';
            result.value = '';

        }

        function deleteValue () {
            recData.value= recData.value.slice (0,-1);
        }

        
        function calculateNow () {

            var opt = ['/','+','-', '%','*','.'];

if(opt.includes (recData.value[0]) || opt.includes(recData.value[recData.value.length -1])) {
    result.value = 'Error'
    return;
}

    for(var i = 0; i < opt.length ; i ++ ) {
        if(opt.includes(recData.value[i]) && opt.includes(recData.value [i + 1])) {
            result.value = 'Error'
            return;
        }
    }
        
      

var finalResult = eval (recData.value);

result.value = finalResult;


        }
